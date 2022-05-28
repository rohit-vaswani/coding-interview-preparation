/*
        Source: https://bigfrontend.dev/problem/create-call-method [61_BFE]
        Solution link: ?
        Difficulty: TODO_DI_EASY | TODO_DI_MEDIUM | TODO_DI_HARD
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
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Object(key): Creates an object wrapper for the given value
                - Object('2') === new String('2')
                - Object(true) === new Boolean(true)

*/


Function.prototype.myCall = function (context, ...args) {


    const fn = this
    const thisArg = Object(context) || window
    const key = Symbol()                            // TODO_REMEMBER: Always creates a unique key
    thisArg[key] = fn                               // TODO_REMEMBER: Make it as a part of the object and then call it.
    const res = thisArg[key](...args)
    delete thisArg[key]
    return res


}


const fn = function (a, b, c) {
    return  this.d + a + b + c
}
const context = {d: 4}
console.log(fn.myCall(context, 1, 2, 3))