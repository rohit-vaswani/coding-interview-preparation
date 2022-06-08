/*
        Source: https://leetcode.com/problems/substring-with-concatenation-of-all-words/
        Solution link: ?
        Difficulty: TODO_DI_HARD
        Algorithm: ?
        Company: ?
        DataStructure: TODO_DS_STRING_ARRAY
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: YES
        Solved: June, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) slice also works on the string (i, index+1)
            b) substr works on the string (i, len)
            c) includes is present on string
            d) arr.splice(index, len) would have deleted the total len items starting at index i of the original array
        TODO_SOLUTION:
            a) Process window size as total words length
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





    min = 1
    max = 2
    nonPositive = 1
    len = 3



    const arr = [1,2,0]
    const sum = 3
    const min = 1
    const max = 2
    const expectedSum = 3


        const arr = [3,4,-1,1]
        const min = 1
        const max = 4
        const sum = 8
        const expected = 10
        const diff = 2

    const arr = [7,8,9,11,12]
    min = 7
    max = 12


    const arr = [1,2,0]
    const min = 3