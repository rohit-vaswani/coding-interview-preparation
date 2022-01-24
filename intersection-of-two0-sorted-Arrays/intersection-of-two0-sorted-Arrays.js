/*
        Source: https://bigfrontend.dev/problem/intersection-of-two0-sorted-Arrays (138_BFE)
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: TODO_APPROACH_TWO_POINTER
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_MUST_SOLVE: NO
        TODO_LEARNING:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


const arr1 = [1, 2, 2, 3, 4, 4]
const arr2 = [2, 2, 4, 5, 5, 6, 2000]


const intersect = (arr1 = [], arr2 = []) => {

    let i = 0, j = 0
    let [len1, len2] = [arr1.length, arr2.length]
    let ans = []

    while (i < len1 && j < len2) {

        if(arr1[i] === arr2[j]) {
            ans.push(arr1[i])
            i++
            j++
        } else if(arr1[i] < arr2[j]) {
            i++
        } else if(arr2[j] < arr1[i]) {
            j++
        }

    }

    return ans

}

const ans = intersect(arr1, arr2)
console.log('ANS: ', ans)