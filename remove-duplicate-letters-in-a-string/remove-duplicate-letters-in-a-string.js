/*
        Source: https://bigfrontend.dev/problem/remove-duplicate-letters-in-a-string
        Solution link: https://bigfrontend.dev/problem/remove-duplicate-letters-in-a-string/discuss/942
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_MEMORIZE: NO
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Convert the problem statement into the english statements of what to be done.
            b) Write that into javascript.
            c) When dealing with string related problems, write it how each iteration should look like from problem to intermediate to solution.
        TODO_REMEMBER:
            a) Set has API -> .add, .has, .entries, .delete
            b) Map has API -> .set, .has, .entries, .delete, .get
        TODO_SOLUTION:
            a) Create a map maintaining last index of the chat
            b) Everytime you push a char, check last char is greater than current char and last char with higher end index is present in the map.
                i) yes, keep removing
                b) no, add the current char.
*/

/*


    1. xyzabcxyzabc


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




/*

function smallestUniqueSubstr(str) {
    const stack = [];
    const inStack = new Set();
    const lastIndex = new Map();
    for (let i = 0; i < str.length; i++) {
        lastIndex.set(str[i], i);
    }
    for (let i = 0; i < str.length; i++) {
        while (str[i] < stack[stack.length - 1] && lastIndex.get(stack[stack.length - 1]) > i) {
            inStack.delete(stack.pop());
        }
        if (!inStack.has(str[i])) {
            stack.push(str[i]);
            inStack.add(str[i]);
        }
    }
    return stack.join('');
}


 */