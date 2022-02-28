/*
        Source: https://bigfrontend.dev/problem/implement-lodash-chunk (131_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
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

const chunk = (arr, chunkSize) => {

    let len = arr.length
    let ans = []
    let targetIndex = 0

    if(chunkSize < 1) {
        return  []
    }

    for (let i = 0; i < len; i++) {

        ans[targetIndex] = ans[targetIndex] || []

        if (ans[targetIndex].length < chunkSize) {
            ans[targetIndex].push(arr[i])
        }

        if (ans[targetIndex].length === chunkSize) {
            targetIndex++
        }

    }


    return ans


}


console.log(chunk([1, 2, 3, 4, 5], 1))
console.log(chunk([1, 2, 3, 4, 5], 2))
console.log(chunk([1, 2, 3, 4, 5], 3))
console.log(chunk([1, 2, 3, 4, 5], 4))
console.log(chunk([1, 2, 3, 4, 5], 5))