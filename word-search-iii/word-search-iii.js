/*
        Source: https://leetcode.com/problems/word-search-ii/
        Solution link: OWN
        Difficulty: TODO_DI_HARD
        Algorithm: ?
        Company: ?
        DataStructure: TODO_DS_RECURSION
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
            a) Solved part of the problem, rest is simple.
*/


const board = [
    ["o", "a", "a", "n"],
    ["e", "t", "a", "e"],
    ["i", "h", "k", "r"],
    ["i", "f", "l", "v"]
]
const words = ["oath", "pea", "eat", "rain"]


const isWordPresent = (board, i, j, word, charIndex = 0) => {


    if(i >= board.length || board[i][j] === undefined) {
        return false
    }

    if(charIndex >= word.length) {
        return false
    }

    if (word[charIndex] !== board[i][j]) {
        return false
    }

    if (charIndex === word.length - 1) {
        return true
    }


    // TODO_REMEMBER: The cases on which u need to navigate to.
    return [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ].map(coOrds => isWordPresent(board, i + coOrds[0], j + coOrds[1], word, charIndex + 1)).some(isPresent => isPresent === true)

}

console.log(isWordPresent(board, 1, 3, "eath", 0))