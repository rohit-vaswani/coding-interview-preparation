
/*

    Source: https://www.youtube.com/watch?v=FO7VXDfS8Gk&t=3s
    Solve: https://www.youtube.com/watch?v=FO7VXDfS8Gk&t=3s
    Asked in: TODO_CO_GOOGLE
    Type: Dynamic prgramming / Recursive solution
    Approach:
        1. Have a helper function that will determine whether a matrix is 2D
        2. Define base condition - Out-of-bounds and not an 2D array
        3. Define non-base conditions: 1 + Assured 2D matrix-size

*/
let matrix = [
    [1 ,0 ,1 ,0 ,0 ,1],
    [1 ,0 ,1 ,1 ,1 ,1],
    [1 ,1 ,1 ,1 ,1 ,0],
    [1 ,0 ,1 ,1 ,1 ,1],
    [1 ,0 ,1 ,1 ,1 ,1]
]

let maximalSquare = getMaximalSquare(matrix , 1 , 2);
console.log('OUTPUT: Maximal square : ' , maximalSquare);


function getMaximalSquare(matrix , row , col){

    let [firstRow = []] = matrix;
    let maxRowIndices = matrix.length-1;
    let maxColIndices = firstRow.length > 0 ? firstRow.length-1 : 0;
    
    if(row>maxRowIndices || col>maxColIndices){
        return 0;
    }

    let is2DMatrix = is2DMatrixFn(matrix , row , col);

    if(!is2DMatrix){
        return 1;
    }

    let rightMatrix = getMaximalSquare(matrix , row   , col+1);
    let bottomMatrix = getMaximalSquare(matrix , row+1 , col);
    let diagonalMatrix = getMaximalSquare(matrix , row+1 , col+1);
    let matrixSize = rightMatrix && bottomMatrix && diagonalMatrix ? Math.min(rightMatrix,bottomMatrix,diagonalMatrix) : 0;
    
    return 1 + matrixSize;

}



function is2DMatrixFn(matrix , row , col){
    return matrix[row][col] && matrix[row][col+1] && matrix[row+1] && matrix[row+1][col] && matrix[row+1][col+1];
}

