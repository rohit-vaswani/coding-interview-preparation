/*
        Source: https://bigfrontend.dev/problem/validate-parenthesis (102_BFE)
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) NO need to implement Stack DS, Array push and Array pop = Stack
            b) NO need to implement Queue DS, Array push and Array shift = Queue
            c)
        TODO_REMEMBER:
            a) for(let char of str) => Iterate over the chars of the string
            b) let openBracketsSet =new Set('{[(') -> openBracketsSet.has('{')
            c) arr.length-- will shrink the array by 1.
        TODO_SOLUTION:
            a) Open brackets are pushed into the stack.
            b) Closed brackets counter bracket is peek searched. If not, not a valid
            c) If stack becomes empty, valid Paranthesis
*/

class Stack {

    constructor() {
        this.arr = []
    }

    push(elem) {
        this.arr.push(elem)
    }

    pop() {
        // TODO_REMEMBER: To remove last element from an array
        const lastElem = this.peek()
        this.arr.length--
        return lastElem
    }

    peek() {
        if (!this.isEmpty()) {
            return this.arr[this.arr.length - 1]
        }
    }

    isEmpty() {
        return this.arr.length === 0
    }
}


const openBrackets = new Set('{[(')
const closeBrackets = new Set(')]}')

const bracketsMap = {
    '}': '{',
    ']': '[',
    ')': '('
}

const validate = (str) => {

    let isValid = true
    let s = new Stack()
    if (str.length % 2 !== 0) {
        return false
    }

    for (let bracket of str) {

        if (closeBrackets.has(bracket)) {
            if(s.peek() === bracketsMap[bracket]) {
                s.pop()
            } else {
                isValid = false
                break
            }
        } else if (openBrackets.has(bracket)) {
            s.push(bracket)
        }

    }

    return s.isEmpty()

}

console.log(validate('{}[]()'))
console.log(validate('{[()]}'))
console.log(validate('{[}]'))
console.log(validate('{}}'))