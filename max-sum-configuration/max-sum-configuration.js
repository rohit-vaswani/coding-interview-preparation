/*
        Source: https://practice.geeksforgeeks.org/problems/max-sum-in-the-configuration/1
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
            a)
*/



const maxSum = (arr) => {

    // Find Max elem
    const maxIndex = arr.reduce((maxIndex, value, index) => {
        const _maxValue = arr[maxIndex] ?? Number.MIN_VALUE
        return value > _maxValue ? index : maxIndex
    }, -1)

    // Find offset
    const maxArrIndex = arr.length  -1
    const offset = maxArrIndex - maxIndex // 3


    // Find Max value
    return arr.reduce((maxValue, val, index) => {
        const newIndex = (index + offset) % arr.length
        return maxValue + (val * newIndex)
    }, 0)


}


console.log(maxSum([3,8,1,2]))