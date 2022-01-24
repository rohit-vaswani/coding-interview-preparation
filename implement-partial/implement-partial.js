/*
        Source: https://bigfrontend.dev/problem/implement-partial (139_BFE)
        Solution link: Own
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_INTERESTING: YES
        TODO_STANDARD_PROBLEM: NO
        TODO_MUST_SOLVE: NO
        TODO_LEARNING:
            a) Symbol is a built-in object whose constructor returns a symbol primitive. More here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


const placeHolder = Symbol()

const getFinalArgs = (args1, args2) => {
    let index = 0
    const newArgs1 = args1.map(a => a === placeHolder ? args2[index++] : a)
    return [...newArgs1, ...args2.slice(index)]
}

const partial = (fn, ...args1) => {
    let context = this
    return (...args2) => {
        return fn.apply(context, getFinalArgs(args1, args2))
    }
}


const func = (a, b, c, d) => a + b + c + d
const func123 = partial(func, 1, 2, 3)
const ans1 = func123(4)
console.log('ANS1: ', ans1)


const func123New = partial(func, 1, placeHolder, 3)
const ans2 = func123New(2, 4)
console.log('ANS2: ', ans2)