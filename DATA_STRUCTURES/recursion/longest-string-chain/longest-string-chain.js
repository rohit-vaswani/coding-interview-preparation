/*
        Source: https://leetcode.com/problems/longest-string-chain/
        Solution link: OWN
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_GOOGLE
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        Solved: July, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) KEEP AN EXAMPLE IN FRONT OF YOU.
            b) WRITE COMMENT AGAINST EACH LINE TO BETTER COMPREHEND THE FLOW.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/

const longestStrChain = function (words) {


    let minLevel = Infinity
    let maxLevel = -Infinity

    // Create a Map with key as the frequency
    const map = words.reduce((map, word) => {
        const len = word.length
        map[len] = map[len] ?? []
        map[len].push(word)
        minLevel = Math.min(len, minLevel)
        maxLevel = Math.max(len, maxLevel)
        return map
    }, {})


    console.log(map)

    const maxLevels = Math.max.apply(null, map[minLevel].map(word => getLargestLevel(map, minLevel, maxLevel, word)))
    return maxLevels - minLevel + 1
};

const isPredecessor = (smaller, larger) => {
    const largerLen = larger.length


    if (smaller.length + 1 !== largerLen) {
        return false
    }

    let smallerIndex = 0
    let largerIndex = 0
    let offChars = 0

    while (largerIndex < largerLen) {
        if (smaller[smallerIndex] === larger[largerIndex]) {
            smallerIndex++
            largerIndex++
        } else if (offChars <= 1) {
            largerIndex++
            offChars++
        } else {
            return false
        }
    }

    return true

}


const getLargestLevel = (wordMap, currentLevel = 1, maxLevel, previousWord) => {


    if (currentLevel === maxLevel) {
        return currentLevel
    }

    // Base condition - More Level is not present [return level]
    let maxLevelAnswer = -Infinity
    let nextLevelWords = wordMap[currentLevel + 1] ?? []
    for (let i = 0; i < nextLevelWords.length; i++) {
        if (isPredecessor(previousWord, nextLevelWords[i])) {
            const currentLevelMax = getLargestLevel(wordMap, currentLevel + 1, maxLevel, nextLevelWords[i])
            maxLevel = Math.max(currentLevelMax, maxLevelAnswer)
        } else {
            return currentLevel
        }
    }

    return maxLevel
}


// console.log(longestStrChain(["a","ba","bca","bda","bdca"]))
console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]))
