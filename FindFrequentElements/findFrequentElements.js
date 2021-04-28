
/*

        Source: https://leetcode.com/problems/top-k-frequent-elements/solution/
        Difficulty: Medium
        Approach: Heap approach to find max K elements
        Data Structure: HashMap and Array


 */

const findFreqElements = (nums = [], k) => {

    // 1. Build Hash map of "Element -> Its frequency"
    const freqMap = nums.reduce((map, no) => {
        map[no] = map[no] || 0
        map[no]++
        return map
    }, {})


    // Build array of key representing frequency of its element
    const freqArray = Object.keys(freqMap).reduce((arr, no) => {
        const freq = freqMap[no]
        arr[freq] = arr[freq] || []
        arr[freq].push(no)
        return arr
    }, []).filter(elem => !!elem)

    // Create output array
    return freqArray.flat().slice(-k)
}


const nums = [1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 5]
const k = 2


console.log(findFreqElements(nums, k))
