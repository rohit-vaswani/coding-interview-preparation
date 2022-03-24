/*
        Source: https://bigfrontend.dev/problem/create-an-interval [83_BFE]
        Solution link: https://bigfrontend.dev/problem/create-an-interval/discuss/3995
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: YES [Typical interview question]
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) interval can be achieved using setTimeOut recursively
            b) onTimeOut, call itself
                - call the function
                - clear the past timeout
                - Re-register timeout
                - Update the timerMap with previous timerId as the key
*/


const timerMap = new Map()

const mySetInterval = (fun, delay, period) => {


    let count = 0
    let timerId = null

    const registerTimeOut = () => {
        fun(delay + (period * count))
        clearTimeout(timerMap.get(timerId))
        const newTimerId = setTimeout(registerTimeOut, delay + (period * count++))
        timerId = timerId || newTimerId
        timerMap.set(timerId, newTimerId)
        return timerId
    }

    return registerTimeOut()

}

const myClearInterval = (timerId) => {
    clearTimeout(timerMap.get(timerId))
    timerMap.delete(timerId)
}

const fn = (timeDelay) => {
    console.log(timeDelay)
}


const timerId = mySetInterval(fn, 100, 200)


setTimeout(() => {
    myClearInterval(timerId)
}, 2000)