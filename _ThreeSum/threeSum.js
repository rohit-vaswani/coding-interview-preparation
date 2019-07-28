/*

    Source: https://leetcode.com/problems/3sum/
    TODO_PENDING: Have to write an recusrive solution to this problem statement

*/


const threeSum = (arr , targetValue) => {
    const allCombinations = arr.reduce(  ( subset , val ) => subset.concat( subset.map( set => [val,...set] ) ), [ [] ]);
    const length3Combs = allCombinations.filter( val => val.length === 3 );
    let sum = (arr) => arr.reduce( (acc , val) => val+acc );
    return length3Combs.find( triplet => sum(triplet) === targetValue);
}

const input = [12, 3, 4, 1, 6, 9];
const targetVal = 24;
const output = threeSum(input , targetVal);
console.log(output);



/*





function getCombination(nums = [] , i , j , k , combs = []){
    
    
    let len = nums.length;
    
    combs.push([ nums[i] , nums[j] , nums[k] ]);
    
    if( (k===len-1) && (j===len-2) && (i===len-3)){return combs}
    
    if((j===len-2) && (i<len-3)){i++;}
    else if((k===len-1) && (j<len-2) && ){j++;}
    else if((k<len-1)){k++;}
    
    
    return getCombination(nums , i , j , k , combs);
}

*/