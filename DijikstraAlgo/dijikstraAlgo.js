
/*
    Source: Youtube / Tushar Roy / Dijiksra's Algorithm Single source...
    TODO_DS_MULTI: TODO_DS_MAP + TODO_DS_PQ
    Asked in: TODO_CO_GOOGLE
    TODO_SOLUTION: This solution teaches me 
        1.To write functional programming
        2.To write the driver function as you think
        3. To define Utils function and/or api method which makes sense.
*/

let graph = {
    vertices: {
        'A':1,
        'B':1,
        'C':1,
        'D':1,
        'E':1,
        'F':1
    },
    edges: [
        ['A','B',5],
        ['A','D',9],
        ['A','E',2],
        ['B','C',2],
        ['C','D',3],
        ['D','F',2],
        ['E','F',3]
    ]
}


/*

    Just thinking - Can we also represent a directed graph like this
    let graph  = {
        'A':{
            'B':5,
            'D':9
        },
        'B':{
            'C':2
        },
        'C':{
            'D':3
        },
        'D':{
            'F':2
        },
        'E':{
            'F':3
        }
    }

*/


//Utils funnction 
let updateInitialConstMapUtil = (vertices , cost) => {
    
    return Object.keys(vertices).reduce( (acc , vertex) => {
        acc.set(vertex , cost);
        return acc;
    } , new Map());

}

let getCostToTargetVertexUtil = (targetVertex , finalCostMap ) => finalCostMap.has(targetVertex) ? finalCostMap.get(targetVertex) : 0;
let getMinCostVertexUtil = (initialCostMap) => {

    return [...initialCostMap.entries()].reduce( (minCostEntry , entry ) => {

        let [ vertex , cost ] = entry;
        let [ minVertex , minCost ] = minCostEntry;
        return cost < minCost ? entry : minCostEntry;

    } , [undefined , Infinity]);


}
let hasMinCostAlreadyUtil = (toVertex , costFromSourceVertex , finalCostMap) => {
 
    if(!finalCostMap.has(toVertex)){return false}
    else{return finalCostMap.get(toVertex)<costFromSourceVertex};
}

let getCostUtil = (graphEdges = [], fromVertex , toVertex) => {

    let targetEntry = graphEdges.find( ([from , to]) => ( (from === fromVertex && to === toVertex) || from === toVertex && to === fromVertex ));
    return targetEntry ? targetEntry[2] : Infinity;
}

let getConnectedVerticesUtil = (graphEdges , vertex) => {

    return graphEdges.reduce( (toVertices , graphEdge ) => {
        let [fromVertex , toVertex] = graphEdge;
        fromVertex === vertex && toVertices.push(toVertex);
        toVertex === vertex && toVertices.push(fromVertex);
        return toVertices;
    } , []);

}


//Driver function
function findShortestPath(graph , sourceVertex){


    let mapToParentVertex = new Map();//Specify the parent from which we need to traverse
    let finalCostMap = new Map();    //Min Cost from the source vertex
    let initialCostMap = new Map();

    initialCostMap = updateInitialConstMapUtil( graph.vertices , Infinity );
    initialCostMap.set(sourceVertex , 0 );
    finalCostMap.set( sourceVertex , 0 );
    
    while(initialCostMap.size){

        let [ targetVertex ] = getMinCostVertexUtil( initialCostMap );// A (As cost is ZERO)
        initialCostMap.delete( targetVertex );
        let connectedVertices = getConnectedVerticesUtil( graph.edges , targetVertex);//A -> [ B , D , E ]
        let costToCurrentVertex = getCostToTargetVertexUtil( targetVertex , finalCostMap ); //A -> 0 

        connectedVertices.forEach( toVertex => {
            
            let fromVertex = targetVertex;
            let deltaCost = getCostUtil( graph.edges , fromVertex , toVertex);
            let costFromSourceVertex = costToCurrentVertex + deltaCost;
            let  hasMinCostPresent = hasMinCostAlreadyUtil( toVertex , costFromSourceVertex , finalCostMap);
            initialCostMap.has(toVertex) && initialCostMap.set(toVertex , costFromSourceVertex);
            if(hasMinCostPresent){return};
            mapToParentVertex.set(toVertex , fromVertex);
            finalCostMap.set( toVertex , costFromSourceVertex );    

        } );


    }

    return finalCostMap;

}



const finalCostMap = findShortestPath(graph , 'A');
console.log(finalCostMap);

/*

    mapToParentVertex = {

    }


    finalCostMap = {
        A: 0,
        B: 3,
        C: 4,
        D: 5,
        E : 7
    }

    initialCostMap = {
        'A':0,
        'B':Infinity,
        'C':Infinity,
        'D':Infinity,
        'E':Infinity,
        'F':Infinity
    }


*/