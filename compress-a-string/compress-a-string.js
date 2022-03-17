/*
        Source: https://bigfrontend.dev/problem/compress-a-string
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

const compress = (str = '') => {


    let startIndex = 0
    let endIndex = 0
    let currentChar = ''
    let lastChar = str[0]
    let answer = ''

    for (let i = 1; i <str.length; i++) {

        currentChar = str[i]


        let isLastIndex = i == str.length - 1
        if (currentChar === lastChar) {
            endIndex = i
        } else {


            answer += `${lastChar}${endIndex - startIndex + 1}`
            startIndex = i
            endIndex = i
            lastChar = currentChar

        }

        if(isLastIndex) {
            answer += `${lastChar}${endIndex - startIndex + 1}`
        }

    }


    return answer
}

console.log('ANSWER:', compress('aaabbaab'))