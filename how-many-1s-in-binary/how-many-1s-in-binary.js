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
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


const getBinary = (no) => {

    let num = no
    let binaryNo = ""

    while (num !== 0) {
        binaryNo += num % 2
        num = Math.floor(num / 2)
    }

    return binaryNo

}

const countOne = (no) => {

    const binary = getBinary(no)
    return [...binary].filter(no => no === "1").length

}

console.log(countOne(257799))