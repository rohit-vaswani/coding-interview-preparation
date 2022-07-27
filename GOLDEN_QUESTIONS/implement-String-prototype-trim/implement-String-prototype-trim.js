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
        TODO_TAKEAWAY: [THREE QUESTIONS TO ASK YOURSELF]
            a) AT THE END OF THE DAY, you need two indices to solve the problem
            b) ALWAYS KEEP THE MINIMAL EXAMPLE IN FRONT OF YOU
            c) IS THIS A RECURSIVE PROBLEM
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) sol1: Find startIndex and endIndex, slice the string
            b) sol2: Run forward or loop from the backward to find startIndex and endIndex (i++ and j--)
*/


// TODO_REMEMBER
const WHITESPACES = [" ", "", "\s", "\t", "\n", "\u3000"];





const trim = (str = '') => {


    let firstCharIndex = str.length - 1
    let lastCharIndex = 0
    const strArr = [...str]

    strArr.forEach( (char, index) => {


        if(char !== " ") {
            firstCharIndex = Math.min(firstCharIndex, index)
            lastCharIndex = Math.max(lastCharIndex, index)
        }
    })

    return str.slice(firstCharIndex, lastCharIndex + 1)

}

console.log('_.' + trim('     ') + '._')