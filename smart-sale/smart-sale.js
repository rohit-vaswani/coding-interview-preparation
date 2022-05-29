/*
        Source: ?
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_BOOKING
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


/*

    Problem:
        Given an array of items which are need to be sold.
        Items which are in bulk are easy to sell.
        To maximise the sale, you can remove the items of low frequency.
        Return the unique items count, which needs to be sold.

 */

const smartSale = (arr = [], m = 1) => {

    // Create a freq Map
    const freqMap = arr.reduce((map, val) => {
        const freq = map.get(val) ?? 0
        map.set(val, freq + 1)
        return map
    }, new Map())

    // Put them into array
    let freqArr = []
    for(let [key, value] of freqMap.entries()) {
        freqArr.push([key, value])
    }

    // Sort the Freq Arr
    freqArr = freqArr.sort((a, b) => {
        return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0
    })

    // Flatten the array
    const outputArr = freqArr.reduce( (outputArr, arrItem) => {
        outputArr = [...outputArr, ...new Array(arrItem[1]).fill(arrItem[0])]
        return outputArr
    }, [])

    // Find the unique
    return [...new Set(outputArr.slice(m)).keys()].length

}

// const freqMap = {
//     1: 2,
//     2: 3,
//     3: 2
// }
//
//
// const freqMap = {
//     1: 3,
//     2: 2,
//     3: 1
// } // 3 -> 1
//
//
// const freqMap = {
//     1: 2,
//     2: 1,
//     3: 1,
//     4: 1,
//     5: 5
// }


smartSale([1, 2, 3, 1, 2, 2, 3], 2) // 2
// console.log(smartSale([1, 1, 1, 2, 2, 3], 3)); // [1, 1, 1, 3] --> 1
// console.log(smartSale([1, 1, 2, 2, 2, 3], 2)); // [2, 2, 2, 3]
// console.log(smartSale([1, 1, 2, 2, 3, 4], 2)); // [1, 1, 2, 2]
// console.log(smartSale([1, 1, 2, 3, 4, 5], 2)); //
