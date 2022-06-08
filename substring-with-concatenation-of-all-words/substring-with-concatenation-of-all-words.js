/*
        Source: https://leetcode.com/problems/substring-with-concatenation-of-all-words/
        Solution link: ?
        Difficulty: TODO_DI_HARD
        Algorithm: ?
        Company: ?
        DataStructure: ?
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
            a) slice also works on the string (i, index+1)
            b) substr works on the string (i, len)
            c) includes is present on string
        TODO_SOLUTION:
            a)
*/

const hasAllWords = (subStr, words) => {


    let targetArr = [...subStr]
    words.forEach((word) => {
        const index = targetArr.join('').indexOf(word)
        if (index !== -1) {
            // TODO_REMEMBER: Standard way to replace a word in the string
            targetArr = [...targetArr.slice(0, index), ...new Array(word.length).fill('X'), ...targetArr.slice(index + word.length)]
        }
    })
    return targetArr && targetArr.every(char => char === 'X')

}

const findSubstring = (str = "", words = []) => {


    let i = 0
    let len = words.reduce((len, word) => len + word.length, 0)
    const indices = []

    // TODO_REMEMBER: Standard way to deal with the conditional iterative approach [i=0, while(true), if{break}]
    while (true) {


        let targetSubStr = str.substr(i, len)

        if (targetSubStr.length < len) {
            break
        }

        if (hasAllWords(targetSubStr, words)) {
            indices.push(i)
        }

        i++

    }


    return indices


}


// const s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
// const s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
const s = "barfoothefoobarman", words = ["foo","bar"]
const ans = findSubstring(s, words)
console.log(ans)



