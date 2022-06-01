/*
        Source: ?
        Solution link: ?
        Difficulty: TODO_DI_EASY | TODO_DI_MEDIUM | TODO_DI_HARD
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


// const getAllCombinations = (arr = []) => {
//
//
//     let len = arr.length;
//     const subArr = []
//     for (let i = 0; i < len; i++) {
//         for (let j = i; j < len; j++) {
//             subArr.push(arr.slice(i, j + 1))
//         }
//     }
//
//     return subArr
// }
//
// const getSubArrImbalancedCount = (arr) => {
//     const sortedArr = arr.sort() // ascending sorting
//
//     return sortedArr.slice(1).reduce((acc, val, index) => {
//         const isImbalanced = (val - sortedArr[index] )> 1
//         return isImbalanced ? acc + 1 : acc
//     }, 0)
//
// }
//
// function findTotalImbalance(rank) {
//     // Write your code here
//
//     // Find all the combinations
//     const allCombs = getAllCombinations(rank)
//
//
//     // Filter the combinations
//     const filteredCombs = allCombs.filter(subArr => subArr.length > 0)
//
//     // Iterate each, sort each, Find diff between consecutive to be more than 1
//     let imbalancedElemsCount = filteredCombs.reduce((imbalanceCount, subArray, index) => {
//         const subArrImbElemsCount = getSubArrImbalancedCount(subArray)
//         subArrImbElemsCount > 0 && console.log(subArray, subArrImbElemsCount)
//         return imbalanceCount + subArrImbElemsCount
//     }, 0)
//
//     return imbalancedElemsCount
//
//
// }


// const getAllSubsets =  theArray => theArray.reduce( (subsets, value) => {
//     return subsets.concat(subsets.map(set => [value, ...set]))
// }, [[]] );

// const output = findTotalImbalance([4, 1, 3, 2]);


// const output = getSubArrImbalancedCount([1,2,3,4])
// console.log(output)




const ans = maxSubarrayLength([1, -1, -1, -1, 1, 1])
console.log(ans)


/*




 */