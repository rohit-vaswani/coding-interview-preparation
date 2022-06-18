/*
        Source: https://practice.geeksforgeeks.org/problems/maximum-index-1587115620/1
        Solution link: https://www.geeksforgeeks.org/given-an-array-arr-find-the-maximum-j-i-such-that-arrj-arri/
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        Solved: June, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Find Max Right array
            b) Keep i, j = 0
            c) Inc j, arr[j] > arr[i], else inc i
            d) Do this till i, j < n
*/




const maxIndexDiff = (arr) => {

    let n = arr.length
    let rightMax = new Array(arr.length).fill(0)
    rightMax[n - 1] = arr[n - 1]
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], arr[i])
    }

    let maxDist = Number.MIN_VALUE
    let i = 0
    let j = 0
    while (i < n && j < n) {
        if (rightMax[j] >= arr[i]) {
            maxDist = Math.max(maxDist, j - i)
            j++
        } else {
            i++
        }
    }
    return maxDist
}

const arr =      [34, 8, 10, 3, 2, 80, 30, 33, 1]
console.log(maxIndexDiff(arr))