/*
        Source: Shared by Avinash
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: TODO_APPROACH_SLIDING_WINDOW
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) Understand the problem better by understanding the example
            b) Understand the problem better by understanding the cases to handle
            c) Understand the problem better by understanding the DS to use
        TODO_SOLUTION:
            a)
*/


const str = "abdsfghaijkl"


const fn = (str) => {


    let i = 0, j = 1;
    let set = new Set([str[i]])
    let maxChars = str[i]

    while (true) {

        let char = str[j]

        // Base Terminating condition
        if (j === str.length) {
            return maxChars
        }

        // When the char is present | SHRINK THE WINDOW
        if (set.has(char)) {
            set.delete(str[i])
            i++
        }
        // When the char is not present
        else {
            set.add(char)
            let targetChars = str.slice(i, j + 1)
            maxChars = maxChars.length > targetChars.length ? maxChars : targetChars
            j++
        }

    }


}


console.log(fn(str))