/*
        Source: https://bigfrontend.dev/problem/Count-palindromic-substrings (111_BFE)
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
            a)
        TODO_SOLUTION:
            a)
*/


/*

    madam: odd index
    noon: even index
 */


function countPalindromicSubstr(str = '') {


    let palindromes = [...str, str]
    let isEven = str.length % 2 === 0
    let pivot = Math.floor((str.length - 1) / 2)

    let startIndex = !isEven ? pivot - 1 : pivot
    let endIndex = pivot + 1

    while (startIndex > 0) {
        if(str[startIndex] === str[endIndex]) {
            palindromes.push(str.slice(startIndex, endIndex + 1))
            startIndex--
            endIndex++
        } else {
            break
        }
    }

    return palindromes


}

// function countPalindromicSubstr(str) {
//
//     let palindromes = [...str]
//
//     const pushSubPalindrome = (left, right) => {
//
//         if(left >= 0 && str[left] === str[right]) {
//             palindromes.push(str.slice(left, right + 1))
//             pushSubPalindrome(--left, ++right)
//         } else {
//             return
//         }
//
//     }
//
//     const isEven = str.length % 2 === 0
//     let middle = Math.floor((str.length - 1) / 2)
//     if(!isEven) {
//         pushSubPalindrome(middle - 1 , middle + 1)
//     } else {
//         pushSubPalindrome(middle , middle + 1)
//     }
//
//
//     return palindromes
//
// }

const ans1 = countPalindromicSubstr('madam')
const ans2 = countPalindromicSubstr('noon')


console.log({
    ans1,
    ans2
})
