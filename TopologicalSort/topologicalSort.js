/*

    Source: https://www.youtube.com/watch?v=ddTC4Zovtbc&list=PLrmLmBdmIlpu2f2g8ltqaaCZiq6GJvl1j
    Asked in: TODO_CO_GOOGLE
    TODO_DS_GRPAH

    TODO_SOLUTION:
        1. new Map() - .set / .get / .has / .delete / .clear / .keys / .values / .entries / .size
        2. Keep your code functional - graphInstance.[methodNames]
        3. TODO_DS_MULTI: TODO_DS_STACK + TODO_DS_MAP

*/







class Graph{
    constructor(){
        this.vertex = new Map();
        this.edges = []
    }

    addVertex(v){        
        this.vertex.set(v , 1);
        return this;
    }

    addEdge(from, to){
        this.edges.push([from,to]);
        return this;
    }

    wasRootVertexVisisted(v){
        return this.rootVisistedVertices.has(v);
    }


    getParentVertices(v){
        return this.edges.reduce( (acc , entry) => {
            let [from , to] = entry || [];
            to === v && acc.push(from);
            return acc;
        } , []);
    }

    getChildVertices(v){
        return this.edges.reduce( (acc , entry) => {
            let [from , to] = entry || [];
            from === v && acc.push(to)
            return acc;
        } , []);        
    }

    getConnectedVertices(v){
        return [...new Set([...this.getChildVertices(v) , ...this.getParentVertices(v)])];
    }

    getVertices(){
        return [...this.vertex.keys()];
    }

    getTotalVertices(){
        return this.getVertices().length;
    }
}

class Stack{

    constructor(){
        this.arr = [];
    }

    push(v){
        this.arr.push(v);
    }

    pop(){
        if(this.arr.length){
            let val = this.arr[ this.arr.length - 1];
            this.arr.length = this.arr.length - 1;
            return val;
        }   
    }

    peek(){
        if(this.arr.length){
            let val = this.arr[ this.arr.length - 1];
            return val;
        }
    }

    isEmpty(){
        return !this.arr.length;
    }

}

//TODO_TAKEAWAY: Define fn's with `Util` as suffix.
let areAllVerticesVisited = (vertices, visistedVerticesMaps) => vertices.every( v => visistedVerticesMaps.has(v) );
let getUnvisitedVertexUtil = (vertices ,  visistedVerticesMap) => vertices.find( vertex => !visistedVerticesMap.has(vertex) );
let checkAllParentVerticesVisistedUtil = (vertices , visitedVerticesMap) => vertices.every( vertex => visitedVerticesMap.has(vertex) );

//Driver function
function dfsGraphTraversal(graph){

    //TODO_TAKEAWAY: Keep your code functional

    let traversalStack = new Stack();
    let visitedVerticesMap = new Map();
    let answerStack = new Stack();

    let vertex = getUnvisitedVertexUtil( graph.getVertices() , visitedVerticesMap );
    traversalStack.push(vertex);

    while(!traversalStack.isEmpty()){

        let peekVertex = traversalStack.peek();
        visitedVerticesMap.set(peekVertex , 1);
        let connectedVertices = graph.getConnectedVertices(peekVertex);
        let firstUnvistedVertex = getUnvisitedVertexUtil( connectedVertices , visitedVerticesMap);
        let parentVertices = graph.getParentVertices(peekVertex);
        let areAllParentVerticesVisited = checkAllParentVerticesVisistedUtil(parentVertices , visitedVerticesMap);

        areAllParentVerticesVisited && answerStack.push(peekVertex);
        firstUnvistedVertex ? traversalStack.push(firstUnvistedVertex) : traversalStack.pop(); 

    }

    return [...new Set(answerStack.arr)];


}

let graphInstance = (function createGraph(){

    let graphInstance = new Graph();

    graphInstance
        .addVertex('a')
        .addVertex('b')
        .addVertex('c')
        .addVertex('d')
        .addVertex('e')
        .addVertex('f')
        .addVertex('g')

    graphInstance
        .addEdge('a', 'c')
        .addEdge('b', 'c')
        .addEdge('c', 'e')
        .addEdge('e', 'f')
        .addEdge('f', 'g')
        .addEdge('d', 'f')
        .addEdge('b', 'd')

    return graphInstance;

})();


console.log(graphInstance);
const topologicalSortedGraph = dfsGraphTraversal(graphInstance);
console.log('Output : ' , topologicalSortedGraph);