/*
        Source: https://leetcode.com/problems/first-missing-positive/
        Solution link: OWN
        Difficulty: TODO_DI_HARD
        Algorithm: ?
        Company: ?
        DataStructure: TODO_DS_STRING_ARRAY
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: YES
        Solved: June, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Try to collect as much as information as you can collect. [Of Array; sum, min, max]
            b) Look at the output & see how you can come up to from the input. [Look at the edge cases, to better predict the flow]
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


const firstMissingPositive = (arr = []) => {


    let min = Infinity
    let max = -Infinity
    let sum = 0
    let expectedSum = 0


    for (let i = 0; i < arr.length; i++) {

        const val = arr[i]
        if (val > 0) {
            min = Math.min(min, arr[i])
            max = Math.max(max, arr[i])
            sum += val
        }

    }


    if (min !== 1) {
        return 1
    }

    for (let i = min; i <= max; i++) {
        expectedSum += i
    }

    if (expectedSum === sum) {
        return max + 1
    }

    return (expectedSum - sum)


}

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([7, 8, 9, 11, 12]))