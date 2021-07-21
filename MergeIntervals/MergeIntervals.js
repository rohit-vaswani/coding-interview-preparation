/*

        Source: https://leetcode.com/problems/merge-intervals/
        Difficulty: TODO_DI_MEDIUM
        Approach: Iteration and Recursion
        Solution: ?
        Detailed Approach: ?
        Asked in: ?
        Type: TODO_TYPE_INTERESTING

 */

const getMergedIntervalArray = (arr) => {

    let mergedIntervals = [], i = 0;

    while (i <= arr.length - 1) {
        let [startValue, endValue] = arr[i]
        let mergedEndIndex = determineMergedEndIndex(arr, endValue, i + 1)
        mergedIntervals.push([startValue, arr[mergedEndIndex][1]])
        i = mergedEndIndex + 1
    }

    return mergedIntervals

}

const determineMergedEndIndex = (arr, endValue, index) => {

    if (!arr[index]) {
        return index - 1
    }

    const [targetStartValue, targetEndValue] = arr[index]

    if (targetStartValue < endValue) {
        return determineMergedEndIndex(arr, targetEndValue, index + 1)
    }

    return index - 1

}


const intervals = [[1, 3], [2, 6], [7, 10], [15, 18]]
const output = getMergedIntervalArray(intervals) // [[1,6],[8,10],[15,18]]
console.log(output)