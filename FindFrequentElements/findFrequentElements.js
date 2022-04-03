
/*

        Source: https://leetcode.com/problems/top-k-frequent-elements/solution/
        Difficulty: Medium
        Approach: Heap approach to find max K elements
        Data Structure: HashMap and Array


*/


const findFreqElements = (arr = [], freq) => {


    const freqMap = arr.reduce((map, value) => {
        const freq = map.get(value) || 0
        map.set(value, freq + 1)
        return map
    }, new Map())

    let freqArr = []
    for(let [value, freq] of freqMap.entries()) {
        freqArr[freq] = freqArr[freq] || []
        freqArr[freq].push(value)
    }

    freqArr = freqArr.filter(val => !!val)

    return freqArr.flat(Infinity).slice(-freq - 1)
}


const nums = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 5]
const k = 2


console.log(findFreqElements(nums, k))
