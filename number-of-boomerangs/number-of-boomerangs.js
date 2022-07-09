/*
        Source: https://leetcode.com/problems/number-of-boomerangs
        Solution link: OWN
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_GOOGLE
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
            a) Steps:
                - Find all the combinations
                - Determine distance of i with j, and i with k. Define a helper function to get distance between nodes.
                - Increment the counter
                -
*/


const getDistance = (source, target) => {
    return [
        target[0] - source[0],
        target[1] - source[1]
    ].map(val => Math.abs(val))
}

const isFormingBoomerang = (i, j, k) => {
    const [hor1, ver1] = getDistance(i, j)
    const [hor2, ver2] = getDistance(i, k)
    return hor1 === hor2 && ver1 === ver2
}

//
const numberOfBoomerangs = (points = []) => {

    const len = points.length
    let totalBoomerang = 0
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {
                if (k !== i && k !== j && j !== i && j !== k) {
                    const [iPoint, jPoint, kPoint] = [points[i], points[j], points[k]]
                    const isBoomerang = isFormingBoomerang(iPoint, jPoint, kPoint)
                    isBoomerang && totalBoomerang++
                }
            }
        }
    }

    return totalBoomerang


}


// console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]))
console.log(numberOfBoomerangs([[1,1],[2,2],[3,3]]))