/*

    Source: https://www.youtube.com/watch?v=zplklOy7ENo
    Asked in: Google, facebook and Apple
    Approach: Dynamic programming


*/



const lists = [
    [4,10,15,24],
    [0,9,12,20],
    [5,18,22,30]
];
const output = getShortestRange(lists);
console.log('Output :  Shortest distance : ' , output);

function getShortestRange(lists){


    let firstList = lists[0];
    let remainingLists = lists.slice(1);
    let flLen = firstList.length;
    let i = 0,
        refElement = -1,
        targetArrayIndex = 0,
        shortestPath = Infinity,
        shortestPathElems;

    for( i=0; i<flLen; i++ ){

        refElement = firstList[i];
        targetArrayIndex = 0;
        shortestPathElems = getShortestPathArray(remainingLists , targetArrayIndex , [refElement]);
        diff = getDiff(shortestPathElems);
        if( diff < shortestPath){
            shortestPath = diff;
        }

    }

    return shortestPath;

}


function getShortestPathArray(remainingLists , targetArrayIndex, finalAnswer){

    let targetArray = remainingLists[targetArrayIndex];
    let shortestPath = Infinity;
    let i=0 , targetValue , newPathDistance;

    //Base condition
    if(targetArrayIndex === remainingLists.length){
        return finalAnswer;
    }
    
    while(targetArray[i]!=undefined){

        targetValue = targetArray[i];
        newPathDistance = getDiff( [...finalAnswer , targetValue]);
        if(newPathDistance < shortestPath){
            shortestPath = newPathDistance;
        }else{
            finalAnswer.push(targetArray[i-1]);
            break;
        }
        i++;

    }


    return getShortestPathArray( remainingLists , targetArrayIndex+1 , finalAnswer );



}


function getDiff(arr){
    arr.sort( (a,b) => a-b );
    let len = arr.length - 1;
    return Math.abs( arr[len] - arr[0] );
}