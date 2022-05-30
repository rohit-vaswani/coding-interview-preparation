/*
        Source: ?
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


const backspacingStr = (str) => {
    return [...str].reduce((outputStr, char, index) => {
        const shouldEscape = str[index + 1] === '#'
        return !shouldEscape && str[index] !== '#' ? `${outputStr}${char}` : outputStr
    }, '')
}

const main = (s1, s2) => {
    const s11 = backspacingStr(s1)
    const s21 = backspacingStr(s2)
    return s11 === s21
}

const s1 = "axx#bb#c"
const s2 = "axbd#c#c"
console.log(main(s1, s2))
