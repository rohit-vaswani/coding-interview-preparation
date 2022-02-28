/*
        Source: https://bigfrontend.dev/problem/count-function (155_BFE)
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        Solution explained: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_REMEMBER:
            a) A function is an object, and can have properties attached to it.
            b) IFFY is created to create the state and keep track of the invocations.
        TODO_NEED_PRACTICE: NO
*/


const count = (() => {

    let counter = 0

    const inner = () => {
        return ++counter
    }

    inner.reset = () => {
        counter = 0
    }

    return inner

})()

console.log(count())
console.log(count())
console.log(count())

count.reset()

console.log(count())
console.log(count())
console.log(count())
