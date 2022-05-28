/*
        Source: https://bigfrontend.dev/problem/merge-sorted-arrays [81_BFE]
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
            a) Ultimately you have to find a right target arr Index and it's correct index which we have to push
        TODO_REMEMBER:
            a) Identify the total times you should iterate by summing the length of individual array.
        TODO_SOLUTION:
            a) Use the Map to maintain the latest indices against each array index
            b) Write a helper function to identify the min among the arr
            c) Push the value into an array
*/


const getAndUpdateIndex = (arr, indexMap) => {

    let minIndex = 0
    let minValue = Infinity

    arr.forEach((targetArr, targetArrIndex) => {
        const cIndex = indexMap.get(targetArrIndex) ?? 0
        if (targetArr[cIndex] < minValue) {
            minIndex = targetArrIndex
            minValue = targetArr[cIndex]
        }
    })

    const val = arr[minIndex][indexMap.get(minIndex) ?? 0]
    indexMap.set(minIndex, (indexMap.get(minIndex) ?? 0) + 1)
    return val

}


const merge = (arr) => {


    const res = []
    const indexMap = new Map()
    const itemsCount = arr.reduce((len, arr) => len + arr.length, 0)

    for (let i = 0; i < itemsCount; i++) {
        res.push(getAndUpdateIndex(arr, indexMap))
    }

    return res

}


const ans = merge(
    [
        [1, 1, 1, 100, 1000, 10000],
        [1, 2, 2, 2, 200, 200, 1000],
        [1000000, 10000001],
        [2, 3, 3]
    ]
)

console.log('ANSWER', ans)

