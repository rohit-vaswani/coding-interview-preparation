/*

    Source: https://www.youtube.com/watch?v=rKQaZuoUR4M&t=35s
    Difficulty: TODO_DI_HARD
    TODO_DS_GRAPH
    Application: To detect cycles in the formula of Google excel sheet


*/
 let graph = {
     vertices: {
         1: 1,
         2: 1,
         4: 1,
         5: 1,
         6: 1
     },
     edges: {
         4: {
             1: 1,
             5: 1
         },
         1: {
             2: 1
         },
         5: {
             6: 1
         },
         6: {
            //  4: 1
         }
     }
 }

let hasCycles = hasCyclicReference(graph);
console.log('Output: Has Cycles : ' , hasCycles);


 //Driver function
 function hasCyclicReference(graph) {

     //Set DS
     let whiteSet = new Set(); //Initial/Source of nodes for traversal
     let graySet = new Set(); //Still exploring the adj. nodes
     let blackSet = new Set(); //All adj. nodes visited

     whiteSet = getAllVertices(graph);

     while (whiteSet.size) {

         let vertex = getNext(whiteSet); //helper function: A very powerful function
         if (dfs(vertex, whiteSet, graySet, blackSet)) {
             return true;
         }
     }

     return false;
 }

 function dfs(vertex, whiteSet, graySet, blackSet) {

     moveVertex(vertex, whiteSet, graySet); //helper fn
     let adjVertices = getAdjacentVertices(graph, vertex);
     let len = adjVertices.length;
     let currentVertex = null;
     let hasLoop = false;
     for (let i = 0; i < len; i++) {//TODO_LEARNING: How this loop has been used for the DFS. This is an alternative of thr stack
         currentVertex = adjVertices[i];
         if (blackSet.has(currentVertex)) {
             continue;
         }
         if (graySet.has(currentVertex)) {
            hasLoop = true;
            return true;
         }
        if(dfs(currentVertex, whiteSet, graySet, blackSet)){
            return true;
        };
     }
     moveVertex(vertex, graySet, blackSet);
     return hasLoop;
 }

 function moveVertex(vertex, fromSet, toSet) {
     fromSet.delete(vertex);
     toSet.add(vertex);
 }


 function getAdjacentVertices(graph, vertex) {

     let {edges} = graph;
     let adjObj = edges[vertex] || {};
     return Object.keys(adjObj);

 }

 function getAllVertices(graph) {
     let {vertices} = graph;
     return Object.keys(vertices).reduce((set, vertex) => set.add(vertex), new Set());
 }

 function getNext(whiteSet) {
     let vertices = [...whiteSet.keys()] || [];
     return vertices[0];
 }