/*
        Source: https://leetcode.com/problems/trapping-rain-water/
        Solution link: ?
        Difficulty: TODO_DI_EASY | TODO_DI_MEDIUM | TODO_DI_HARD
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
            a) NOT SOLVED COMPLETELY
*/


const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] // [2,1,0,1,3]


const getWindowTrappedWater = (i, j, arr) => {

    let leftWallHeight = arr[i]
    let rightWallHeight = arr[j]

    let minWallHeight = Math.min(leftWallHeight, rightWallHeight)

    return arr.slice(i, j + 1).reduce((waterTrappedUnit, wallHeight) => {
        const currentWaterTrapped = minWallHeight - wallHeight
        return currentWaterTrapped > 0 ? currentWaterTrapped + waterTrappedUnit : waterTrappedUnit
    }, 0)


}

const trap = (arr = []) => {


    let i = 0
    let j = i + 1
    let trappedRainWater = 0

    while (true) {




        let leftWallHeight = arr[i]
        let rightWallHeight = arr[j]

        if (rightWallHeight >= leftWallHeight) {
            const currentTrappedWatter = getWindowTrappedWater(i, j, arr)
            trappedRainWater += currentTrappedWatter
            console.log(i, j, currentTrappedWatter)
            i = j
            j = i + 1
        } else {
            j++
        }


        if (j === arr.length) {
            break
        }
    }

    return trappedRainWater

}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const ans = trap(height)
console.log(ans)