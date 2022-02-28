/*

    Source: https://www.youtube.com/watch?v=rKQaZuoUR4M&t=35s
    Difficulty: TODO_DI_HARD
    TODO_DS_GRAPH
    Application: To detect cycles in the formula of Google excel sheet


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
    edges: {
        'F':['A'],
        'A':['F','B'],
        'B':['A','E'],
        'C':['D'],
        'D':['E','C'],
        'E':['D','B'],
    }
}

let hasCycles = hasCyclicReference(graph);
console.log('Output: Has Cycles : ' , hasCycles);


//Driver function
function hasCyclicReference(graph) {

    //Set DS
    let unVisited = new Set(); //Initial/Source of nodes for traversal
    let visited = new Set(); //All adj. nodes visited

    unVisited = getAllVertices(graph);

    while (unVisited.size) {

        let vertex = getNext(unVisited); //helper function: A very powerful function
        if (dfs(vertex, unVisited, visited)) {
            return true;
        }
    }

    return false;
}

function dfs(vertex, unVisited, visited, sourceVertex) {
    moveVertex(vertex, unVisited, visited); //helper fn
    let adjVertices = getAdjacentVertices(graph, vertex).filter(v => v!=sourceVertex);
    let len = adjVertices.length;
    let currentVertex = null;
    let hasLoop = false;
    console.log('Exploring : ' , vertex , ' : ' , adjVertices);
    for (let i = 0; i < len; i++) {//TODO_TAKEAWAY: How this loop has been used for the DFS. This is an alternative of thr stack
        currentVertex = adjVertices[i];
        if (visited.has(currentVertex)) {
           hasLoop = true;
           return true;
        }
       if(dfs(currentVertex, unVisited, visited , vertex)){
           return true;
       };
    }
    return hasLoop;
}

function moveVertex(vertex, fromSet, toSet) {
    fromSet.delete(vertex);
    toSet.add(vertex);
}


function getAdjacentVertices(graph, vertex) {

    let {edges} = graph;
    return edges[vertex] || [];

}

function getAllVertices(graph) {
    let {vertices} = graph;
    return Object.keys(vertices).reduce((set, vertex) => set.add(vertex), new Set());
}

function getNext(set) {
    let vertices = [...set.keys()] || [];
    return vertices[0];
}