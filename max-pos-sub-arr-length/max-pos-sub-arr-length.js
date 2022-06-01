/*
        Source: Asked in Amazon
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: TODO_APPROACH_SLIDING_WINDOW
        Company: TODO_CO_AMAZON_PERSONAL
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Understand the problem better by writing the cases to handle.
            b) Understand the problem better by keeping the example in front of you.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


const isPositiveArray = (arr) => {
    const finalVal = arr.reduce((ans, val) => ans * val, 1)
    return finalVal > 0
}

// Approach 1: Recursive
function maxSubarrayLength1(badges, i = 0, j = i, MAX_SUB_ARR_LENGTH = -Infinity) {

    if (i === badges.length - 1 && j >= badges.length - 1) {
        return MAX_SUB_ARR_LENGTH
    }

    const subArr = badges.slice(i, j + 1)
    const isPosArr = isPositiveArray(subArr)
    MAX_SUB_ARR_LENGTH = isPosArr ? Math.max(MAX_SUB_ARR_LENGTH, (j + 1 - i)) : MAX_SUB_ARR_LENGTH


    if (j === badges.length - 1) {
        i++
        j = i
    } else {
        j++
    }

    return maxSubarrayLength(badges, i, j, MAX_SUB_ARR_LENGTH)
}


// Approach2: Iterative
const maxSubarrayLength2 = (badges = []) => {
    let MAX_SUB_ARR_LENGTH = -Infinity

    let len = badges.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            const subArr = badges.slice(i, j + 1)
            const isPosArr = isPositiveArray(subArr)
            MAX_SUB_ARR_LENGTH = isPosArr ? Math.max(MAX_SUB_ARR_LENGTH, (j + 1 - i)) : MAX_SUB_ARR_LENGTH
        }
    }

    return MAX_SUB_ARR_LENGTH
}

// Approach3: Sliding window





/*

    const input = [1, -1, -1, -1, 1, 1]


    i=0,j=1 // cVal=-1
    i=0,j=2 // cVal=1

    TODO_REMEMBER: Cases to handle, by keeping example in front of you.
    // handle if val positive, try saving max length
    // handle j=length, reset i & j [reset val completely]
    // handle i,j=length, terminate
    // inc j, otherwise []
 */

const maxSubarrayLength = (badges = []) => {


    let i=0,j=1
    let currentVal = badges[i]
    let maxLength = -Infinity

    // Terminating condition
    while (i !== badges.length && j !== badges.length) {

        currentVal = currentVal * badges[j]

        // When the overall value is positive
        if(currentVal > 0) {
            maxLength = Math.max(maxLength, (j - i + 1))
        }

        j++

        // Reset it on the bounds
        if(j === badges.length) {
            i++
            currentVal = badges[i]
            j = i + 1
        }
    }

    return maxLength

}

const ans = maxSubarrayLength([1, -1, -1, 1, -1, 1]) // 4 [1 * -1 * -1 * 1]
console.log(ans)