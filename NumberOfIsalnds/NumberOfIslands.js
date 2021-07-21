/*

        Source: https://leetcode.com/problems/number-of-islands/
        Difficulty: TODO_DI_MEDIUM
        Approach: Recursive / Recursion
        DataStructure: Matrix
        Solution: Personal
        Detailed Approach: ?
        Asked in: ?
        Type: ?
        TODO_LEARNINGS: ?
 */

const adjacentElemsDelta = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, -1], // LEFT
    [0, 1] // RIGHT
]


const getNoOfIslands = (grid = [[]]) => {


    const rows = grid.length - 1
    const firstRow = grid[0]
    const cols = firstRow.length - 1
    let i, j;

    let maxIslands = 0;
    for (i = 0; i <= rows; i++) {
        for (j = 0; j <= cols; j++) {
            maxIslands += grid[i][j] === '1' ? 1 : 0
            consumeIsland(grid, i, j)
        }
    }

    return maxIslands
}


const consumeIsland = (grid, i, j) => {

    // Out of Bounds | Already Consumed | Not Consumable
    if (grid[i] === undefined || grid[i][j] === undefined || grid[i][j] === Infinity || grid[i][j] === "0") {
        return
    }

    // Consumed
    grid[i][j] = Infinity

    adjacentElemsDelta.map(elements => {
        const [deltaI, deltaJ] = elements
        consumeIsland(grid, i + deltaI, j + deltaJ)
    })

}

const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

// const grid1 = [
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ]

const noOfIslands = getNoOfIslands(grid)
console.log(noOfIslands)