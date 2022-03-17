/*
        Source: https://bigfrontend.dev/problem/implement-basic-throttle (4_BFE)
        Solution link: https://bigfrontend.dev/problem/implement-basic-throttle/discuss/774
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: YES
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) Spreading arguments: const fn = (...args) => {} // fn(1,2,3)
                -> args: [1,2,3]
                -> ...args: 1,2,3
                -> [...args]: [1,2,3]
            b) throttle calls the function immediately and wait until the delay expires before making another call
            c) throttle also immediately calls the function once the timeout expires.
        TODO_SOLUTION:
            a) If timerId is null,
                - call the func.
                - Register the timeout
                - Once timeout expires, call with the last saved args.
            b) if timerId is not null
                - Save the args as last args
*/



const throttle = (func, delay) => {

    let timerId = null
    let lastArgs = null

    return (...args) => {
        if(timerId === null) {
            func(...args)
            timerId = setTimeout(() => {
                func(...lastArgs) // TODO_REMEMBER: Call with the last invoked args, as soon as the time expires
                clearTimeout(timerId)
                timerId = null
            }, delay)
        } else {
            lastArgs = args
        }
    }
}

const sum = (...args) => {
    const ans = [...args].reduce((sum, val) => sum + val, 0)
    console.log(...args, ans)
}

const throttledFn = throttle(sum, 3000)

throttledFn(1,2)
throttledFn(3,4)
throttledFn(5,6)

setTimeout(() => {
    throttledFn(7,8)
}, 4000)

setTimeout(() => {
    throttledFn(9,10)
}, 5000)