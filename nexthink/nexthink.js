console.log('hey you')


const getMAlignedvalues = (set, value, min, max, m) => {

    const mAlignedValues = []

    let maxPotentialValue = value
    while (maxPotentialValue <= max) {
        maxPotentialValue += m
        if (set.has(maxPotentialValue)) {
            mAlignedValues.push(maxPotentialValue)
        }
    }

    let minPotentialValue = value
    while (minPotentialValue >= min) {
        minPotentialValue -= m
        if (set.has(minPotentialValue)) {
            mAlignedValues.push(minPotentialValue)
        }
    }


    return mAlignedValues

}


function solution(arr, m) {
    // write your code in JavaScript (Node.js 8.9.4)


    // const map = {
    //     '-2': [1, 7],
    //     // '-3': [0],
    //     '1': [-2, 7],
    //     '0': [-3],
    //     // '8': [],
    //     '7': [1, -2]
    // }


    const arrSet = new Set(arr)
    const min = Math.min.apply(null, arr)
    const max = Math.max.apply(null, arr)

    const map = arr.reduce((map, value) => {
        map.set(value, getMAlignedvalues(arrSet, value, min, max, m))
        return map
    }, new Map())

    const freqMap = arr.reduce((map, value) => {
        const freq = map.get(value) || 0
        map.set(value, freq + 1)
        return map
    }, new Map())
    console.log(freqMap)

    console.log(map)


    let maxSetSize = -Infinity
    for (let [key, value] of map.entries()) {
        const currentSet = getMaxSubSet(map, key, new Set())
        const currentSetActualSize = [...currentSet.keys()].reduce((sum, key) => {
            const freq = freqMap.get(key)
            sum += freq
            return sum
        }, 0)
        maxSetSize = Math.max(maxSetSize, currentSetActualSize)
    }

    return maxSetSize

}


const getMaxSubSet = (map, key, set) => {


    if (set.has(key)) {
        return set
    }


    set.add(key)


    const adjacentKeys = map.get(key)

    for (let i = 0; i < adjacentKeys.length; i++) {
        const nextKey = adjacentKeys[i]
        getMaxSubSet(map, nextKey, set)
    }


    return set


}


console.log(solution([-3, -2, 1, 0, 8, 7, 1], 3))