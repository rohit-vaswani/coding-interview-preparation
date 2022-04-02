/*
        Source: https://bigfrontend.dev/problem/compress-a-string (97_BFE)
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: TODO_APPROACH_TWO_POINTER
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

const compress = (str) => {


    let answer = ''
    let startIndex = 0
    let currentValue = ''
    let len = str.length
    let i

    for (i = 0; i < len; i++) {
        currentValue = str[i]


        // Same Char
        if(currentValue === str[startIndex]) {
            continue
        }

        // Different Char
        answer += `${str[startIndex]}${i - startIndex}`
        startIndex = i

    }

    // Last Char
    answer += `${str[startIndex]}${i - startIndex}`

    return answer

}


console.log('ANSWER:', compress('aaabbaab'))