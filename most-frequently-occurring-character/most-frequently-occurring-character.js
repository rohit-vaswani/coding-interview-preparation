/*
        Source: https://bigfrontend.dev/problem/most-frequently-occurring-character (145_BFE)
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_INTERESTING_PROBLEM: YES
        TODO_MUST_SOLVE: NO
        TODO_LEARNING:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


const count = (str = '') => {

    const freqMap = {}

    let maxFreq = -1
    let arr = [...str]

    arr.forEach((val, index) => {
        freqMap[val] = freqMap[val] || 0
        freqMap[val]++
        maxFreq = Math.max(freqMap[val], maxFreq)
    })

    const ans = Object.keys(freqMap).reduce((ans = [], key) => {
        freqMap[key] === maxFreq && ans.push(key)
        return ans
    }, [])

    return ans.length > 1 ? ans : ans[0]


}

console.log(count('abbccc'))
console.log(count('abbcccddd'))