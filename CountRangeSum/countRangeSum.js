/*

    Source: https://leetcode.com/problems/count-of-range-sum/
    Difficulty: TODO_DI_HARD

*/

let arr = [-2,5,-1];
let combinations = getCombinations(arr , 0 , 1 , arr.length , [] , -2 , 2);
console.log('Answer : Combinations : ' , combinations.length);



function getCombinations(arr , start = 0, end = 1, len , combs = [], lower , upper){
    
    let slicedArray = arr.slice(start , end);
    let sum = slicedArray.reduce( (sum , val) => sum+val , 0);

    sum>=lower && sum<=upper && slicedArray.length && combs.push(slicedArray);

    if( start >= len && end >= len ){
        return combs;
    }
    
    //TODO_LEARNING: An alternative recursive and liner approach to a nested iterative approach
    if(end === len ){
        start++;
        end = start;
    }
    
    return getCombinations(arr , start , end+1 , len , combs , lower , upper);
      
}