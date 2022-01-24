/*
        Source: https://bigfrontend.dev/problem/find-median-of-2-sorted-array (136_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: TODO_APPROACH_TWO_POINTER
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_MUST_SOLVE: NO
        TODO_INTERESTING: NO
        TODO_LEARNING:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/



const median = (arr1 = [], arr2 = []) => {


    const [len1, len2] = [arr1.length, arr2.length]
    let isOdd = ((len1 + len2) % 2 !== 0)
    let targetIndex = Math.floor((len1 + len2) / 2)

    let i = 0, j = 0
    while (i < len1 || j < len2) {


        let currentIndex = i + j

        let val1 = arr1[i] || Infinity
        let val2 = arr2[j] || Infinity

        if((currentIndex === targetIndex && isOdd)) {
            return val1 < val2 ? val1 : val2
        } else if((!isOdd && currentIndex === targetIndex -1)) {
            let a = val1 < val2 ? val1 : val2
            if(val1< val2) {
                i++
            } else {
                j++
            }
            let b = (arr1[i] || Infinity) < (arr2[j] || Infinity) ?  arr1[i] : arr2[j]
            return ((a+b)/2)
        }

        if(val1 < val2) {
            i++
        } else if(val2 < val1) {
            j++
        } else {
            i++
        }


    }




}


const arr1 = [1,2] // 4,5,6,7
const arr2 = [3,4]
const ans = median(arr1, arr2)
console.log('ANS: ', ans)