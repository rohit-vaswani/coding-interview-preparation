
/*
    Source: Shared by Manish
    Approach: Recursive + Iterative
    Difficulty: Medium

*/

const findMaxSquare = (matrix) => {

    const [firstRow] = matrix
    const noOfColumns = firstRow.length


    let maxUnarySquareLen = -1
    let currentUnarySquareLen = -2
    for(let i =0;i<matrix.length;i++) {
        for(let j=0;j<noOfColumns;j++) {
            currentUnarySquareLen = getMaxSquareSize(matrix, i, j, 1)
            maxUnarySquareLen = currentUnarySquareLen > maxUnarySquareLen ? currentUnarySquareLen : maxUnarySquareLen
        }
    }
    return maxUnarySquareLen

}


const isUnaryMatrix = (matrix, i, j, n) => {
    let isUnary = true
    for(let k=1;k<=n;k++) {
        const targetElems = matrix[i-1+k].slice(j, n + 1)
        if(!targetElems.every( elem => elem === 1 )) {
            isUnary = false;
            break;
        }
    }
    return isUnary
}

const getMaxSquareSize = (matrix, i, j, n) => {


    const isColInBounds = matrix[i].slice(j).length >= n
    const isRowInBounds = i + n <= matrix.length
    const isOutOfBounds = !(isRowInBounds && isColInBounds)

    if(isOutOfBounds) {
        return n - 1
    }

    const isUnary = isUnaryMatrix(matrix, i, j, n)

    if(!isUnary) {
        return n - 1
    }


    return getMaxSquareSize(matrix, i, j, n+1)

}


const matrix = [
    [0,1,1,1,1],
    [0,1,1,1,1],
    [0,1,1,1,1],
    [0,1,1,1,1],
]

console.log(findMaxSquare(matrix))