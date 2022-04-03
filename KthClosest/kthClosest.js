/*
        Source: https://www.youtube.com/watch?v=eaYX0Ee0Kcg&t=65s
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_AMAZON
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Always take simple example to understand the question better
            b) Understand what exactly u need to solve the problem -> distance from the origin.
            c) Keep the example in front of you
            d) Plan out the steps
        TODO_REMEMBER:
            a) To find top K elements, without sorting, put them in an array with index as the key
            b) Filter remaining, pluck the required one's
        TODO_SOLUTION:
            a) Find the distance of each pointer using formula
            b) distance will act as index of an array
            c) Filter the array and remove undefined
            d) Pluck the last one's after flat(1)


*/



const input = [
    [-2,4],
    [0,-2],
    [-1,0],
    [3,5],
    [-2,-3],
    [3,2],
]



const getDistance = (a,b) => Math.floor(Math.sqrt(a*a + b*b ))

const kthClosest = (arr, k) => {


    let indicesArr = []

    // Find the distance of each i
    arr.forEach( ([x,y]) => {
        const distance = getDistance(x,y)
        indicesArr[distance] = indicesArr[distance] || []
        indicesArr[distance].push([x,y])
    })

    return indicesArr.filter(val => !!val).flat(1).slice(0, k)


}


const output = kthClosest(input , 2);
console.log(output);



















// const kthClosest = (input , k) => {
//
//     const square = val => val*val;
//     const getDistance = ([a,b]) => Math.sqrt( square(a) + square(b) );
//     const valueMap = input.reduce( (acc , val) =>  {acc[val] = getDistance(val);return acc} , {});
//     const sortedArray = Object.keys(valueMap).sort( (a , b) => valueMap[a] > valueMap[b] ? 1 : -1);//TODO_TAKEAWAY: This is an expensive operation. Can be optimized with Max heap.
//     return sortedArray.slice( 0 ,  k);
//
// }

//
// const input = [
//     [-2,4],
//     [0,-2],
//     [-1,0],
//     [3,5],
//     [-2,-3],
//     [3,2]
// ]
//
// const output = kthClosest(input , 2);
// console.log(output);