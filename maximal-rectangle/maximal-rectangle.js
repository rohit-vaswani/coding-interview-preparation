/*
        Source: https://leetcode.com/problems/maximal-rectangle/
        Solution link: OWN
        Difficulty: TODO_DI_HARD
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
            a) ALWAYS FIND A HELPER FUNCTION (isRectangle) to help you solve the problem
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/

const isRectangle = (arr, i, j, noRows = 1, noColumns = 1) => {


    let maxRowIndex = i + noRows
    let maxColIndex = j + noColumns

    for(let k=i;k<maxRowIndex;k++) {

        if(arr[k] === undefined) {
            return false
        }

        for(let l=j;l<maxColIndex;l++) {
            if(arr[k][l] !== "1" || arr[k][l] === undefined) {
                return false
            }
        }
    }

    return true

}


const maximalRectangle = (matrix) => {

    let maxRectangle = -Infinity
    let firstRow = matrix[0]
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < firstRow.length; j++) {
            const currentRectangleSize = getRectangleSize(matrix, i, j, 1, 1, 1)
            maxRectangle = Math.max(maxRectangle, currentRectangleSize)
            console.log(i, j, currentRectangleSize)
        }
    }

    return maxRectangle
}


const getRectangleSize = (matrix, i, j, numRows = 1, numColumns = 1, validSize = 1) => {


    if(!isRectangle(matrix, i, j, numRows, numColumns)) {
        return validSize
    }

    // TODO_REMEMBER: Helps you to find whether possible options are rectangle or not
    const verticalRectangle = getRectangleSize(matrix, i, j, numRows + 1, numColumns, numRows * numColumns)
    const horRectangle = getRectangleSize(matrix, i, j, numRows, numColumns + 1, numRows * numColumns)
    const bothRectangle = getRectangleSize(matrix, i, j, numRows + 1, numColumns + 1, numRows * numColumns)

    return Math.max(
        verticalRectangle,
        horRectangle,
        bothRectangle
    )


}

const matrix = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
]


const ans = maximalRectangle(matrix)
console.log(ans)
