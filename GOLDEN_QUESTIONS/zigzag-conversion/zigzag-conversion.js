/*
        Source: https://leetcode.com/problems/zigzag-conversion/
        Solution link: OWN
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: YES
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: YES
        Solved: June, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) ALWAYS KEEP THE EXAMPLE IN FRONT OF YOU
            b) Take OUTPUT FIRST APPROACH, derive meanings out of it [numRows, numColumns, Each I does, diagonalSize]
            c) Think How each iteration looks like
            d) Declare and keep variables in front of you
            e) Try to communicate in English before jumping to the solution.
            f) Write the comments against the variable to understand the problem
            g) Identify the sub problem to better tackle it
            h) Try to conclude in terms of the pattern  ---->  colIndex*totalSize + rowIndex
            i) Identify the pattern and convert that into formula
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Understand a few derived values: noOfRows, noOfColumns, totalSize, diagonalSize
            b) Iterate over noOfRows & noOfColumns
            c) Establish translation of rowIndex, colIndex to pick the right character and push into the output array.
*/


/*


Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I

 */


const convert = (str, numRows) => {


    let len = str.length // 14
    let numColumns = 0      // 3
    let diagonalSize = numRows - 2  // 2
    let totalSize = numRows + diagonalSize // 6

    let len2 = len
    while (len2 > 0) {
        len2 -= totalSize // 8
        numColumns++
    }


    const ans = []
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
            const index = (j * totalSize) + i // TODO_REMEMBER: Pattern you identified to converge to the answer.
            if(index % totalSize === 0) {
                // ans.push(...str.slice(index - diagonalSize, index + 1))
            }

            ans.push(str[index])

        }
    }

    return ans.join('')

}

const s = "PAYPALISHIRING", rows = 4
const ans = convert(s, rows)
console.log(ans)