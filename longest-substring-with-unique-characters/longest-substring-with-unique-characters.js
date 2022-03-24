/*
        Source: https://bigfrontend.dev/problem/longest-substring-with-unique-characters [87_BFE]
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: TODO_APPROACH_TWO_POINTER
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) Set is used to check the uniqueness.
        TODO_SOLUTION:
            a) Two pointer problem
            b) When char is present in the set
                - slice the substring
                - consider it as ans, only if's length is more than ans length
                - reset indices (start++,end=start+1)
                - clear the set
                - add first chat
            c) When char is not present in the set
                - end++
                - add char into the set
*/

const longestUniqueSubstr = (str) => {

    let start = 0
    let end = start + 1
    let set = new Set()
    let ans = ""
    set.add(str[start])


    while (end < str.length) {

        let char = str[end]

        if (set.has(char)) {
            let targetStr = str.slice(start, end)
            ans = ans.length > targetStr.length ? ans : targetStr
            start = start + 1
            end = start + 1
            set.clear()
            set.add(str[start])
        } else {
            end++
            set.add(char)
        }


    }

    return ans


}


const ans = longestUniqueSubstr("abcapmsdc")
console.log("ANSWER: ", ans)

/*
        abcabc

            s:0;e:1;ans=ab
            s0;e:2;ans=abc
            s:1;e:2;ans=bc
            s:1;e:3;ans=bca
            s:3;e:5;ans=abc

 */