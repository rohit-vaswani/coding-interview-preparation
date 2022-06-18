/*
        Source: https://www.geeksforgeeks.org/largest-area-possible-after-removal-of-a-series-of-horizontal-vertical-bars/
        Solution link: OWN
        Difficulty: TODO_DI_MEDIUM
        Algorithm: TODO_APPROACH_SLIDING_WINDOW
        Company: ASKED IN MIRO
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


const removedSlots = [1, 2, 5, 6, 7]
const noOfSlots = 8

/*

  startIndex=0, endIndex=1

*/



[1,2,3]


const findMaxConSlots = (removedSlots) => {


    let startIndex = 0
    let endIndex = startIndex + 1
    let max = -Infinity

    if(removedSlots.length === 1) {
        return 2
    }

    while (endIndex < removedSlots.length) {


        let startValue = removedSlots[startIndex]
        let diff = endIndex - startIndex
        let requiredValue = startValue + diff
        let currentValue = removedSlots[endIndex]

        if (requiredValue === currentValue) {
            endIndex++
            max = Math.max(max, diff) // TODO_REMEMBER: Capture window length
        } else {
            startIndex = endIndex
            endIndex = startIndex + 1
        }

    }

    return max + 2

}

const getMaxPrisonArea = (noOfHorBars, noOfVerBars, horBarsRemoved, verBarsRemoved) => {
    const maxHor = findMaxConSlots(horBarsRemoved)
    const maxVer = findMaxConSlots(verBarsRemoved)
    return maxHor * maxVer
}

const matrix = [
    [1,0,0,0,1],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [1,0,0,0,1],
    [1,0,0,0,1],
]

const n = 4, m = 3, h = [1,2,8,9,10,11, 15], v = [1, 2]
// console.log(findMaxConSlots(noOfSlots, removedSlots))
console.log(getMaxPrisonArea(n, m, h, v))