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
*/



const findMaxConsecutive = (str) => {

    if(str.length == 0) {
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


        // Fast forward the loop, till you reach i as 0
        if(arr[i] !== 0) {
            i++
            j = i + 1;
            continue;
        }

        // Case1: When it's 0
        if(arr[j] === 0) {
            j++
        }

        // Case2: When it's not 0
        else {
            let len = j - i
            maxLength = Math.max(maxLength, len)
            i = j
            j = i + 1
        }

    }

}
const input = "10000011010000"
const output = findMaxConsecutive(input)
console.log(output)
