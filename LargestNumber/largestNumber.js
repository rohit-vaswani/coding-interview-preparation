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
        TODO_REMEMBER:
            a) Multi conditions in for loop can be written with logical operator. Check beow
        TODO_SOLUTION:
            a)
*/

// Helper function
const isASmaller = (a, b) => {

    let isASmaller = true
    a = String(a)
    b = String(b)

    for (let i = 0; i < a.length && i < b.length; i++) {
        let aVal = a[i]
        if (+aVal > +b[i]) {
            return false
        }
    }


    return isASmaller

}

const largestNumber = (arr) => {


    // Sort the array basis custom sort condition
    let sortedArr = arr.sort((a, b) => {

        if (a === b) {
            return 0
        }

        return isASmaller(a, b) ? 1 : -1
    })


    // Join the array to get the result
    return sortedArr.join('')

}





const inputArray = [3, 30, 34, 5, 49];
const output = largestNumber(inputArray);
console.log('Answer : ', output);

