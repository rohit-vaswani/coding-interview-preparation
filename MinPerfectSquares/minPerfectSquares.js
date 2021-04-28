/*
    Source: https://leetcode.com/problems/perfect-squares/
    Difficulty: Medium
    Approach: Recursion | DP
    Similar: Rod Cutting
 */


const sqrt = n => Math.sqrt(n)

const numSquares = function (n) {

    const squareRoot = sqrt(n)
    const flooredSqrt = Math.floor(squareRoot)

    // Base Condition
    if (flooredSqrt === squareRoot) {
        return 1
    }

    let minPerfectSquares = Infinity;
    for (let i = flooredSqrt; i >= 1; i--) {
        const noPerfectSquare = numSquares(n - i * i)
        minPerfectSquares = noPerfectSquare < minPerfectSquares ? noPerfectSquare : minPerfectSquares
    }

    return 1 + minPerfectSquares


};

const n = 34
console.log(numSquares(n))