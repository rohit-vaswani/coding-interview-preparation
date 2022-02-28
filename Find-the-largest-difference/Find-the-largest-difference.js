/*
        Source: https://bigfrontend.dev/problem/Find-the-largest-difference (107_BFE)
        Solution link: https://bigfrontend.dev/problem/Find-the-largest-difference/discuss/1443
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


const largestDiff = (arr = []) => {

    if (arr.length <= 1) {
        return 0
    }

    let obj = {min: Infinity, max: -Infinity}

    arr.reduce((map, value) => {
        map.min = value <= map.min ? value : map.min
        map.max = value >= map.max ? value : map.max
        return map
    }, obj)

    return Math.abs(obj.min - obj.max)

}

console.log('LD1: ', largestDiff([-1, 2,3,10, 9]))
console.log('LD2: ', largestDiff([1]))
console.log('LD3: ', largestDiff([]))