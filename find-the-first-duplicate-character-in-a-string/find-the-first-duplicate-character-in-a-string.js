/*
        Source: https://bigfrontend.dev/problem/find-the-first-duplicate-character-in-a-string (105_BFE)
        Solution link: https://bigfrontend.dev/problem/find-the-first-duplicate-character-in-a-string/discuss/7874
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
            a) Set is used to maintain/track uniqueness.
*/


const firstDuplicate = (str = '') => {


    let s = new Set()
    for (let i = 0; i < str.length; i++) {
        if(s.has(str[i])) {
            return str[i]
        }
        s.add(str[i])
    }

    return null

}

console.log('Ans1: ', firstDuplicate('abca'))
console.log('Ans1: ', firstDuplicate('abcdefe'))
console.log('Ans1: ', firstDuplicate('abcdef'))
