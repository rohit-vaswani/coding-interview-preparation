/*
        Source: https://bigfrontend.dev/problem/implement-Array-prototype-reduce (146_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) if initialValue is not provided to reduce, it consider first value as it's initial value (Skip one iteration)
        TODO_SOLUTION:
            a)
*/

function myReduce(reducerFn, initialValue) {

    let arr = [...this]
    let ans = initialValue

    if (initialValue === undefined) {
        arr = arr.slice(1)
    }

    arr.forEach((val, index) => {
        ans = reducerFn(ans, val, index, arr)
    })

    return ans


}

Array.prototype.reduce = myReduce

const ans = [1, 2, 3].reduce((acc, val) => (acc + val), 0)

console.log(ans)