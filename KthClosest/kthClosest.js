/*

    Source: https://www.youtube.com/watch?v=eaYX0Ee0Kcg&t=65s
    Asked in: Amazon
    TODO_LEARNING: Max heap maintains the object holding value and the max/min value. Replaces once the next value is small/big as per the requirement.

*/



const kthClosest = (input , k) => {

    const square = val => val*val;
    const getDistance = ([a,b]) => Math.sqrt( square(a) + square(b) );
    const valueMap = input.reduce( (acc , val) =>  {acc[val] = getDistance(val);return acc} , {});
    const sortedArray = Object.keys(valueMap).sort( (a , b) => valueMap[a] > valueMap[b] ? 1 : -1);//TODO_LEARNING: This is an expensive operation. Can be optimized with Max heap.
    return sortedArray.slice( 0 ,  k);

}


const input = [
    [-2,4],
    [0,-2],
    [-1,0],
    [3,5],
    [-2,-3],
    [3,2]
]

const output = kthClosest(input , 2);
console.log(output);