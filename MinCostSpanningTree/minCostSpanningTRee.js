/*

    Source: Tushar Roy videos / Min Cost spanning Tree.
    Asked in: TODO_CO_GOOGLE
    Data structures used: Disjoint set
    Algorithm: Kruskal's algorithm / TODO_DS_GREEDY

*/


let graph = {
    vertices:{
        'A': 1,
        'B': 1,
        'C': 1,
        'D': 1,
        'E': 1,
        'F': 1
    },
    edges: [
        ['AD' , 1],
        ['AB' , 3],
        ['BD' , 3],
        ['BC' , 1],
        ['DC' , 1],
        ['DE' , 6],
        ['EC' , 5],
        ['CF' , 4],
        ['EF' , 2]
    ]
}

//Helper functions
let getAscSortedEdges = graphEdges => graphEdges.sort( ( [ a , aCost],[ b , bCost] ) => aCost < bCost ? -1 : 1);

class DisjointSet{
    constructor(vertices){

        this.disjointSets = vertices.reduce( (disjointSet , vertex) => {
            disjointSet[vertex] = vertex;
            return disjointSet;
        } , {});

    }

    checkIfDisjoin(v1 , v2){
        return this.disjointSets[v1] != this.disjointSets[v2];
    }

    makeUnion(v1 , v2){
        this.disjointSets[v2] = this.disjointSets[v1];
    }
}


//Driver function
function getMinCostSpanningTree(graph){

    //1. Sort the edges based on the weight
    let sortedEdges = getAscSortedEdges(graph.edges);
    console.log(sortedEdges);
    //2. Create Default disjoint set
    const disjointSet = new DisjointSet(Object.keys(graph.vertices));

    //3. Process sorted edges in the sorted order    
    let resultEdges = sortedEdges.reduce( (resultEdges , edge) => {
        let [ from , to ] = [...edge[0]];
        if(!disjointSet.checkIfDisjoin(from , to)){
            console.log('Not Disjoined : ' , disjointSet ,  from , to);
            return resultEdges
        };
        resultEdges.push([from , to]);
        disjointSet.makeUnion(from , to);
        return resultEdges;
    } , [] );

    return resultEdges;
}



let minCostSpanningTree = getMinCostSpanningTree(graph);
console.log('Output : minCostSpanningTree : ' , minCostSpanningTree);

