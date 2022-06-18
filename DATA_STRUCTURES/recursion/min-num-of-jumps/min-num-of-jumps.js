/*
        Source: https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1/?page=1&difficulty[]=1&difficulty[]=2&company[]=Amazon&sortBy=submissions
        Solution link: OWN
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        Solved: June, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Base conditions:
                i === length - 1 -> 0
                i > length -1 > -1
                Iterate: startIndex + (startIndex + jumps[startIndex])
                    -> Find Min
                        -> -1: Don't count
                        -> 0
                    -> min + 1 (if not -1)
*/


// [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
const minJumps = (arr = [], index = 0) => {


    // BASE CONDITION: Fav condition
    if (index >= arr.length - 1) {
        return 0
    }

    // BASE CONDITION: Non Fav condition
    if (arr[index] === 0) {
        return -1
    }

    const startIndex = index + 1 // 2
    const endIndex = index + arr[index] // 5

    // Non-Base condition
    let minJumpsFinal = Infinity
    for (let j = startIndex; j <= endIndex; j++) {
        const minJumpsToTake = minJumps(arr, j)
        if (minJumpsToTake !== -1) {
            // Aggregation condition
            minJumpsFinal = Math.min(minJumpsToTake, minJumpsFinal)
        }

    }

    return minJumpsFinal !== Infinity ? 1 + minJumpsFinal : -1

}


console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))
console.log(minJumps([1, 4, 3, 2, 6, 7]))