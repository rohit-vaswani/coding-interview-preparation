/*
        Source: https://bigfrontend.dev/problem/remove-duplicate-letters-in-a-string (112_BFE)
        Solution link: https://bigfrontend.dev/problem/remove-duplicate-letters-in-a-string/discuss/942
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Try to understand what kind of transformation/steps, you need to perform to transform the input to output.
            b) Write each Pass, put it in front of you. Visualise it. Convert that into javascript.
            c) When dealing with string related problems, write it how each iteration/pass should look like from problem to intermediate to solution.
        TODO_REMEMBER:
            a) Set has API -> .add, .has, .entries, .delete, .clear
            b) Map has API -> .set, .has, .entries, .delete, .get, .clear
        TODO_SOLUTION:
            a) Create a map maintaining last index of the chat
            b) Everytime you push a char, check last char is greater than current char and last char with higher end index is present in the map.
                i) yes, keep removing
                b) no, add the current char.
*/

/*


    Input: xyzabcxyzabc


    Map:
    {a: 3, b:4, c:5, x:6, y:7, z:8}

    Stack:
        x
        xy
        xyz
        a
        ab
        abc
        abcx
        abcxy
        abcxyz
 */


function smallestUniqueSubstr(str) {

    const stack = []
    const map = new Map()


    // Construct last index map
    let chars = [...str]
    chars.forEach((char, index) => {
        map.set(char, index)
    })

    chars.forEach( (char, index) => {


        let lastCharInStack = stack.slice(-1)[0]


        while (lastCharInStack > char && map.get(lastCharInStack) > index && stack.length) {
            stack.pop()
        }

        if(!stack.includes(char)) {
            stack.push(char)
        }

    })

    return stack.join('')

}

const ans = smallestUniqueSubstr('xyzabcxyzabc')
console.log(ans)