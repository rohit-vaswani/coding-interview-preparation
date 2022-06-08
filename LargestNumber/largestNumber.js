/*
        Source: https://www.interviewbit.com/problems/largest-number/
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_GOOGLE, TODO_CO_AMAZON
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Complete the flow using helper functions
            b) keep the SIMPLE example in front to better understand
            c) KEEP THE EXAMPLE IN FRONT OF YOU, TO BETTER UNDERSTAND WHAT YOU NEED tO WRITE.
            d) ALWAYS SOLVE THE PROBLEM with true as the outcome. It keep your mind in right direction
        TODO_REMEMBER:
            a) Multi conditions in for loop can be written with logical operator. Check below
            b) return statement in the for loop takes the control out of it.
        TODO_SOLUTION:
            a)
*/

// Helper function
const isBBigger = (a, b) => {

    a = String(a)
    b = String(b)

    let maxLength = Math.max(a.length, b.length)
    for (let i = 0; i < maxLength; i++) {
        const aVal = a[i] ?? Infinity
        const bVal = b[i] ?? -Infinity
        if (+bVal < +aVal) {
            return false
        }
    }

    return true

}


// 34, 3 -> false // 34 bigger
// 3, 30 -> false // 3 bigger
// 31, 3 -> true // 3 bigger


console.log(isBBigger(30, 3))
//
// const largestNumber = (arr) => {
//
//     // Sort the array basis custom sort condition
//     let sortedArr = arr.sort((a, b) => {
//
//         if (a === b) {
//             return 0
//         }
//
//         console.log(a, b, isBBigger(a, b))
//         return isBBigger(a, b) ? 1 : -1
//     })
//
//     console.log()
//     console.log(sortedArr)
//
//
//     // Join the array to get the result
//     return sortedArr.join('')
//
// }
//
// const inputArray = [3, 30, 34, 5, 9];
// const output = largestNumber(inputArray);
// console.log('Answer : ', output);

