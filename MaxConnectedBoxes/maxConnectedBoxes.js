
const arr = [
    [0 , 0 , 1 , 2],
    [0 , 1 , 2 , 1],
    [2 , 1 , 1 , 1]
];

function getMaxConnectedBoxes(arr){

    let rows = arr.length,
        cols = arr[0] && arr[0].length;

    let i=0,
        j=0,
        val,
        answer = -Infinity,
        adjacentCount;

    for(i=0; i<rows; i++){
        for(j=0; j<cols; j++){

            val = arr[i][j];
            adjacentCount = getConnectedCount( arr , i , j , val );
            answer = adjacentCount>answer ? adjacentCount : answer;

        }
    }

    return answer;

}


//Not a pure function
function getConnectedCount(arr , rowNo , colNo , val){

    if(arr[rowNo]===undefined){return 0};
    if(arr[rowNo][colNo]===undefined){return 0};
    if(arr[rowNo][colNo]===-Infinity){return 0};
    if(arr[rowNo][colNo]!=val){return 0};
    
    arr[rowNo][colNo] = -Infinity;
    
    return (
        1 + //Self
        getConnectedCount(arr, rowNo, colNo-1, val)  + //left
        getConnectedCount(arr, rowNo, colNo+1, val)  + //right
        getConnectedCount(arr, rowNo-1, colNo, val)  + //top
        getConnectedCount(arr, rowNo+1, colNo, val)  //bottom
    );

}


const output = getMaxConnectedBoxes(arr);
console.log('Output : Max Connected boxes : ' , output);