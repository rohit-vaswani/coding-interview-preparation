/*
        Source: https://leetcode.com/problems/container-with-most-water/
        Solution link: OWN
        Difficulty: TODO_DI_MEDIUM
        Algorithm: TODO_APPROACH_TWO_POINTER
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


// const arr = [1,8,6,2,5,4,8,3,7]
const maxArea = (arr) => {


    let leftIndex = 0
    let rightIndex = arr.length - 1
    let maxWater = -Infinity

    while (true) {
        if (leftIndex >= rightIndex) {
            break
        }


        let minWallHeight = Math.min(arr[rightIndex], arr[leftIndex])
        let currentWaterUnit = minWallHeight * (rightIndex - leftIndex)
        maxWater = Math.max(maxWater, currentWaterUnit)

        if (arr[rightIndex] < arr[leftIndex]) {
            rightIndex--
        } else {
            leftIndex++
        }


    }

    return maxWater

}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))