/*
        Source: https://bigfrontend.dev/problem/implement-String-prototype-trim (95_BFE)
        Solution link: https://bigfrontend.dev/problem/implement-String-prototype-trim/discuss/3678
        Difficulty: TODO_DI_MEDIUM
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
            a) sol1: Find startIndex and endIndex, slice the string
            b) sol2: Run forward or loop from the backward to find startIndex and endIndex (i++ and j--)
*/


// TODO_REMEMBER
const WHITESPACES = [" ", "", "\s", "\t", "\n", "\u3000"];

const trim = (str = '') => {


    let startIndex = 0
    let endIndex = str.length
    let isCharStarted = false
    let arr = [...str]
    arr.forEach((char, index) => {


        if(char === ' ' && !isCharStarted) {
            startIndex = index
        }

        if(char !== ' ') {
            isCharStarted = true
            endIndex = index
        }

    })

    return str.slice(startIndex + 1, endIndex + 1)

}

console.log('_.' + trim('  A    ') + '._')