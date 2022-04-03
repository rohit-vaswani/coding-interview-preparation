/*
        Source: https://bigfrontend.dev/problem/find-median-of-2-sorted-array (136_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: TODO_APPROACH_TWO_POINTER
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_TAKEAWAY:
            a) Considered the minimal example for odd. Solved it easily.
            b) Considered the minimal example for even. solved it.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) For even, find average of = (i + (i+1)) / 2
            b) for even, return ith index
*/



const findMedian = (arr1, arr2) => {


    const totalLen = arr1.length + arr2.length

    const medianIndex = Math.floor((totalLen - 1) / 2)
    let count = medianIndex
    let ind1 = 0, ind2 = 0
    let val1 = Infinity, val2 = Infinity
    let isEven = totalLen % 2 === 0

    while (count >= 0) {

        val1 = arr1[ind1] || Infinity
        val2 = arr2[ind2] || Infinity

        if (val1 < val2) {
            ind1++
        } else {
            ind2++
        }

        count--

    }

    if (!isEven) {
        return Math.min(val1, val2)
    } else {
        let first = Math.min(val1, val2)
        let second = val1 === first ? (arr1[ind1] < val2 ? arr1[ind1] : val2) : (arr2[ind2] < val1 ? arr2[ind2] : val1)
        return (first + second) / 2
    }

}


const arr1 = [1,2] // 4,5,6,7
const arr2 = [3,4]
const ans = findMedian(arr1, arr2)
console.log('ANS: ', ans)