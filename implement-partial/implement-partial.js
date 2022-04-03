/*
        Source: https://bigfrontend.dev/problem/implement-partial (139_BFE)
        Solution link: Own
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_BENCHMARK: YES
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_TAKEAWAY:
            a) Symbol is a built-in object whose constructor returns a symbol primitive. More here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
            b) Symbol and typeof val === "symbol" can be used for special char recognition
            c) AT THE END OF THE DAY, YOU NEED LIST OF ARGUMENTS TO INVOKE A FUNCTION.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/







const partial = (func, ...args) => {
    return function partialFunc(...args2) {
        let context = this
        let firstArrArgs = args.map( val => typeof val === "symbol" ? args2.shift() : val)
        return func.apply(context, [...firstArrArgs, ...args2])
    }
}







function func(a, b, c, d) {
    console.log(a,b,c,d)
    return [...arguments]
}
const func123New = partial(func, 1, Symbol(), 8)
const ans2 = func123New(2, 4)
console.log('ANS2: ', ans2)
