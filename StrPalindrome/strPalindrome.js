/*
    Source: ??
    Asked: TODO_CO_GOOGLE?


*/

let grid = [
    [1, 0, 1, 0, 1], 
    [0, 1, 0, 0, 0],
    [0, 1, 1, 0, 0]
];
let cost = getMinDistance(grid);
console.log('Cost : ' , cost);

function getMinDistance(grid){

    let minCost = Infinity;
    let [ firsRow = [] ] = grid;
    let rows = grid.length;
    let cols = firsRow.length;

    let homeIndices = getHomeIndices(grid);//[ [0,0] , [0,4] , [2,2] ]
    let cost = 0;
    for(let i = 0 ; i<rows ; i ++){
        for(let j = 0; j <cols; j++){
            cost = getCost( i , j , homeIndices);
            minCost = cost<minCost ? cost : minCost;
        }
    }

    return minCost;

}

function getCost( rowIndex  , colIndex , homeIndices){
    
    return homeIndices.reduce( (totalCost , homeIndex) => {
        let cost = getCostToReach( homeIndex , rowIndex , colIndex );
        totalCost+= cost;
        return totalCost;
    }  , 0);

}

function getCostToReach(homeIndex , rowIndex , colIndex){

    let [ targetRow , targetCol ] = homeIndex;
    let rowsDiff = Math.abs(rowIndex-targetRow);
    let colsDiff = Math.abs(colIndex-targetCol);
    return (rowsDiff+colsDiff);

}


function getHomeIndices(grid){

    let targetIndices = [];
    let i=0;
    let lastIndex = 0;
    
    while(true){

        let row = grid[i] || [];

        let index = row.indexOf(1 , lastIndex);

        if(index!=-1){
            targetIndices.push( [i , index] );
            lastIndex = index + 1;
        }else{
            i++;
            lastIndex = 0;
        }

        if(i === grid.length && lastIndex === 0){
            break;
        }

    }
    
    return targetIndices;

}
