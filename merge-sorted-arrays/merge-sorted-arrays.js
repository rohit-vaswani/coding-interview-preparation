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
            a)
        TODO_REMEMBER:
            a) Identify the total times you should iterate by summing the length of individual array.
        TODO_SOLUTION:
            a) Use the Map to maintain the latest indices against each array index
            b) Write a helper function to identify the min among the arr
            c) Push the value into an array
*/


const merge = (...arr) => {

    // TODO_REMEMBER: Identify the total times you should iterate by summing the length of individual array
    const length = arr.reduce((len, subArr) => len + subArr.length, 0)
    const indicesMap = arr.reduce((map, subArr, index) => {
        map.set(index, 0)
        return map
    }, new Map())


    const getNextValue = () => {
        let lowestValue = Infinity
        let lowestIndexValue = Infinity
        let lowestIndexArr = -1

        // Identify the Arr with Lowest Index
        for (let [arrIndex, valueIndex] of indicesMap.entries()) {
            if (arr[arrIndex][valueIndex] <= lowestValue ) {
                lowestValue = arr[arrIndex][valueIndex]
                lowestIndexValue = valueIndex
                lowestIndexArr = arrIndex
            }
        }


        // Update the index in the Map
        if (arr[lowestIndexArr][lowestIndexValue + 1] !== undefined) {
            indicesMap.set(lowestIndexArr, lowestIndexValue + 1)
        } else {
            indicesMap.delete(lowestIndexArr)
        }

        return lowestValue

    }


    const answerArr = []
    for (let i = 0; i < length; i++) {
        const value = getNextValue()
        answerArr.push(value)
    }

    return answerArr

}

const ans = merge(
    [1, 1, 1, 100, 1000, 10000],
    [1, 2, 2, 2, 200, 200, 1000],
    [1000000, 10000001],
    [2, 3, 3]
)

console.log('ANSWER', ans)

