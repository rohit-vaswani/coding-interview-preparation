/*
        Source: https://bigfrontend.dev/problem/Find-two-numbers-that-sum-up-to-0
        Solution link: ?
        Difficulty: TODO_DI_EASY
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


const findTwo = (arr = []) => {

    // Create Map
    let map = new Map()
    arr.forEach((value, index) => {
        map.set(value, index)
    })

    const ans = []

    arr.forEach((value, index) => {

        const negatedValueIndex = map.get(-1 * value)

        if (value === 0) {
            ans.push([index, index])
        }

        if (map.has(-1 * value) && value !== 0) {
            ans.push([index, negatedValueIndex])
        }

        map.delete(value)
        map.delete(-value)
    })

    return ans.length ? ans : null

}

console.log('Ans1: ', findTwo([1, 2, 3, -1]))
console.log('Ans2: ', findTwo([1, 2, 3, -1, -2, 0]))
console.log('Ans3: ', findTwo([1, 2, 3, 4]))