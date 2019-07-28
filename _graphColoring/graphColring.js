class Graph{
    
    constructor(){
        this.vertices = {
            1: 1,
            2: 1,
            3: 1,
            4: 1,
            5: 1
        };
        this.edges = {
            1:[2,5],
            2:[1,3,5],
            3:[2,4,5],
            4:[3,5],
            5:[1,2,3,4]
        }
    }

    adjacentVertices(vertex){
        return this.edges[vertex];
    }
}

let


let colors = {
    'R': 1,
    'G': 1,
    'B': 1
}

let graph = new Graph();
let canBeColored = canGraphBeColored(graph , colors);
console.log('OUTPUT : ' , canBeColored);

let getNext = (unVisitedVertices) => [...unVisitedVertices.keys()][0];


function canGraphBeColored( graph  , colors = {}){

    let visitedVertices = new Set();
    let unVisitedVertices = new Set();
    let colorMap = new Map();

    let { edges , vertices } = graph;

    unVisitedVertices = Object.keys(vertices).reduce( (set , vertex) => {
        set.add(vertex);
        return set;
    } , new Set());

    let canBeColored = true;


    
    while(unVisitedVertices.size){

        let vertex = getNext(unVisitedVertices);
        if(!canColorVertex(vertex , graph , unVisitedVertices , visitedVertices , colorMap , colors)){
            canBeColored = false;
            break;
        }

    }

    return canBeColored;

}


function canColorVertex(vertex , graph , unVisitedVertices , visitedVertices , colorMap , colors){
    moveVertex(vertex , unVisitedVertices , visitedVertices);
    let adjVertives = graph.adjacentVertices(vertex);
    let len = adjVertives.length;


}
