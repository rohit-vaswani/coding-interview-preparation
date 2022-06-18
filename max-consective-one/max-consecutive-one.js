/*
        Source: https://docs.google.com/document/d/1r14nuKfHWL7M1UxWFnKhzyOQwbz6xmz1pAkkKSPK4QA/edit [1]
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_GOOGLE
        DataStructure: TODO_APPROACH_SLIDING_WINDOW
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Understand the problem better by taking positive/negative example [00101, 100100001, 1100000]
            b) Understand the problem better by identifying cases to handle.
            c) Understand the problem better by taking DSA to use
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)


       Example: 00111101
           DRY RUN:
            a) When j is 0 -> j++
            b) When j is 1
                a) capture length
                b) Reset i & j
            c) when i is 0
                a) fast forward i
            d) When j = length -1
                a) Capture length

*/


// const input = "10000011010000"
const findMaxConsecutive = (str) => {

    if (str.length === 0) {
        return -1
    }

    const len = str.length
    let i = 0, j = 0, maxLength = -Infinity


    while (j < len) {


        // TODO_REMEMBER: Fast forward the loop, till you reach i as 0 [Or Back resetting the index j]
        if (str[i] !== '0') {
            i++
            j = i;
            continue;
        }

        // Case1: When it's 0 | EXPAND THE WINDOW
        if (str[j] === '0') {
            j++
            maxLength = Math.max(maxLength, j - i) // TODO_REMEMBER: KEEP CAPTURING THE WINDOW AT THE RIGHT TIME [To meet last elem condition]
        }

        // Case2: When it's not 0 | RESET THE WINDOW
        else {
            i = j + 1
            j = i
        }

    }

    return  maxLength

}
const input = "100001"
const output = findMaxConsecutive(input)
console.log(output)


/*

const findMaxConsecutive = (str) => {

    if(str.length === 0) {
        return -1
    }

    const arr = [...str].map(val => parseInt(val))
    const len = str.length
    let i=0,j=0, maxLength = -Infinity



    while(true) {

        if(j === len) {
            let len = j - i
            maxLength = Math.max(maxLength, len)
            return maxLength
        }


        // TODO_REMEMBER: Fast forward the loop, till you reach i as 0 [Or Back resetting the index j]
        if(arr[i] !== 0) {
            i++
            j = i + 1;
            continue;
        }

        // Case1: When it's 0 | EXPAND THE WINDOW
        if(arr[j] === 0) {
            j++
        }

        // Case2: When it's not 0 | RESET THE WINDOW
        else {
            let len = j - i
            maxLength = Math.max(maxLength, len)
            i = j
            j = i + 1
        }

    }

}

 */