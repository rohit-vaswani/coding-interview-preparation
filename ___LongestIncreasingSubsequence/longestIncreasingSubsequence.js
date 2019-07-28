/*

    Problem 8: Longest increasing Subsequence
    Source1: https://www.interviewbit.com/problems/longest-increasing-subsequence/
    Source2: https://www.dailycodingproblem.com/blog/longest-increasing-subsequence/
    Solve: https://www.youtube.com/watch?v=CE2b_-XfVDk
    Asked: TODO_CO_FACEBOOK , TODO_CO_MICROSOFT , TODO_CO_AMAZON
    Difficulty: TODO_DI_MEDIUM

*/



//Driver function;
function getLongestIncreasingSubSequence( arr ){

    let len = arr.length;
    let longestSubSeqArr = [...new Array(len)].fill(1);

    for(let i = 1; i<len ; i ++ ){
        let maxSubSequences = getMaxValueTill(arr , longestSubSeqArr , i , arr[i]);
        longestSubSeqArr[ i ] = maxSubSequences + 1;
    }

    return Math.max.apply(undefined,longestSubSeqArr);

}

function getMaxValueTill(arr , longestSubSeqArr , endIndex , targetValue){

    return arr.slice(0,endIndex).reduce( (maxValue , val , index) => {
        let potentialMaxvalue = val<targetValue ? longestSubSeqArr[index] : maxValue;
        return potentialMaxvalue > maxValue ? potentialMaxvalue : maxValue
    } , 0 );
}


let input = [ 3 , 4 , -1 , 0 , 6 , 2 , 3 ];
let output = getLongestIncreasingSubSequence(input);
console.log( 'Output: Longest sub sequence : ' , output );


//Take2: Same approach and written again
let arr =  [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
console.log( getLongestSubSequence(arr) );

function getLongestSubSequence(arr){

    let longSubSequence = 0;
    let len = arr.length;
    let hopsArray = [];

    for(let i = 0 ; i < len ; i++){
        let maxHops = getMaxHops( hopsArray , arr , arr[i] , i);
        hopsArray[i] = maxHops + 1;
    }

    longSubSequence = Math.max.apply(Math , hopsArray);
    return longSubSequence;

}

function getMaxHops(hopsArr , targetArray , value , endIndex){
    return targetArray.slice(0, endIndex).reduce( (maxValue , elem , index) => elem>value ? maxValue : Math.max(hopsArr[index] , maxValue) , 0);
}




/*
[3 , 4 , -1 , 1] -> 2
[3,4] + [-1,1]

[-1,1] -> [-1,1] -> MAX

[ 1 , 2 , 0]
[ 0 , 1 , 2] -> n*logn 
[ 0 , 1 , 2 ]


*/



// console.log( getPosNumber([3 , 4 , -1 , 1]) );
// console.log( getPosNumber( [ 1 , 2 , 0] ) );
// console.log( getPosNumber( [ 2 ,  7 ,  8 , 9 , 0 , 1 ] ) );
// console.log( getPosNumber( [ 0 , 1 , 3 , 4 , 5 , -2 , -1] ) );

// function getPosNumber(arr){

//     let { breakingIndex , secondArrMin } = getBreakingIndex(arr); //{breakingIndex:2,secondArrMin:true}
//     if(breakingIndex === -1){return arr[arr.length-1]+1};

//     let firstAr = arr.slice(0,breakingIndex);//[3,4]
//     let secondAr = arr.slice(breakingIndex);//[-1,1]
//     let [ firstArr , secondArr ] = secondArrMin ? [ secondAr , firstAr ] : [ firstAr , secondAr ];
    
//     let missingPosValue = getMissPosValue(firstArr);
//     if(missingPosValue!=-1){return missingPosValue};
//     let nextExpectedValue = firstArr[firstArr.length-1];
//     let missValue = getMissPosValue(secondArr , nextExpectedValue);
//     if(missValue===-1){missValue =  secondArr[secondArr.length-1]+1};

//     return missValue;

// }


// function getMissPosValue(arr , expectedValue){
//     expectedValue = expectedValue === undefined ? arr[0]-1 : expectedValue;
//     let index = arr.findIndex( val => (val !== ++expectedValue && val>0));
//     return index === -1 ? -1 : arr[index]-1;
// }


// function getBreakingIndex(arr){
    
//     let [ firstVal ] = arr;
//     let prevVal = firstVal - 1;
//     let breakingIndex = arr.findIndex( val => (val < prevVal++));
//     let secondArrMin = breakingIndex!=-1 && arr[breakingIndex]<firstVal;
    
//     return {
//         breakingIndex,
//         secondArrMin
//     };


// }
