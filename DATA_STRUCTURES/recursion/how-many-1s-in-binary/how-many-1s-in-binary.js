/*
        Source: https://bigfrontend.dev/problem/how-many-1s-in-binary (96_BFE)
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) Binary number from decimal number can be created using no/2 & no%2 iteratively
            b) Refer below to understand the carry forward to the next iteration
        TODO_SOLUTION:
            a)
*/


// TODO_REMEMBER: How you carry forward the partial answer to the next recursion.
const countOne = (no, count = 0) => {

    if (no === 0) {
        return count
    }

    return countOne(Math.floor(no / 2), no % 2 === 1 ? ++count : count)
}


console.log(countOne(257799))