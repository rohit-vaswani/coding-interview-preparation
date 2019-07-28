/*

    Source: https://leetcode.com/problems/smallest-range-ii/
    Asked in: TODO_CO_?    
    Difficulty: TODO_CO_MEDIUM

*/

//Helper function
let  getTransformedArray = (arr, subtractWhen , delta) => arr.map( elem => elem>=subtractWhen ? (elem-delta) : elem+delta);

let arr = [1,3,6];
let smallestRange = getSmallestRange(arr , 3);
console.log('Smallest range: ' , smallestRange);

function getSmallestRange(arr , delta){

    let { min } = getMinMax(arr);//{1,6} 4 
    let subtractWhen = min + delta;
    let transformedArray = getTransformedArray(arr , subtractWhen , delta);
    let { min: newMin , max: newMax} = getMinMax(transformedArray);
    return Math.abs(newMax-newMin);

}


function getMinMax(arr){

    let max = -Infinity;
    let min = Infinity;

    arr.forEach( val => {
        min = val<min ? val : min;
        max = val>max ? val : max;
    });

    return {min,max};

}

