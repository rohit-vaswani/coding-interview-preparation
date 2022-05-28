/*
        Source: ?
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_MEESHO
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) We understood the problem better using positive, negative, simple example
            b) We understood the problem better by knowing what ultimately we have to do after each loop
            c)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) To solve this problem, you exactly need to
                - Find the right section to converge to
                - Ultimately you have to find a section to converge to
*/


const input1 = [0, 0, 0, 0, 1, 1, 1, 1]
const input2 = [1, 1, 1, 1, 1]
const input3 = [0, 0, 0, 0, 0, 0, 1]
const input4 = [0, 0, 0, 0, 0, 0, 1]

const FAILED_COMMIT_ID = 1

const firstFailedCommit = (input = []) => {


    let start = 0
    let end = input.length - 1
    let pivot = Math.floor((end - start) / 2)

    while (true) {

        pivot = start + Math.floor((end - start) / 2) // TOOD_REMEMBER: Always add the base to converge to the limits

        if (input[start] === FAILED_COMMIT_ID) {
            return start
        }

        if (start === pivot || start>= input.length) {
            return -1
        }

        if(input[pivot] === FAILED_COMMIT_ID) {
            end = pivot
        } else {
            start = pivot + 1
        }


    }

}

const ans = firstFailedCommit(input4)
console.log(ans)
