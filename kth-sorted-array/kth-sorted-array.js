/*
        Source: https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        Solved: June, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


const arr1 = [2, 3, 6, 7, 9]
const arr2 = [1, 4, 8, 10]


/*

    k=1
    i=3, j=2 val=6

 */


const kthElement = (arr1 = [], arr2 = [], k) => {


    let i = 0, j = 0
    let len1 = arr1.length
    let len2 = arr2.length

    if (k >= (len1 + len2)) {
        return -1
    }


    let ans = Infinity
    while (k > 0) {

        let arr1Value = arr1[i] ?? Infinity
        let arr2value = arr2[j] ?? Infinity
        ans = arr1Value <= arr2value ? arr1[i++] : arr2[j++]
        k--

    }


    return ans


}


const k = 5
console.log(
    kthElement(
        [2, 3, 6, 7, 9],
        [1, 4, 8, 10],
        k
    )
)