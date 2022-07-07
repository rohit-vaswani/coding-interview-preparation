// /*
//         Source: https://bigfrontend.dev/problem/create-an-interval [83_BFE]
//         Solution link: https://bigfrontend.dev/problem/create-an-interval/discuss/3995
//         Difficulty: TODO_DI_MEDIUM
//         Algorithm: ?
//         Company: ?
//         DataStructure: ?
//         TODO_STANDARD_PROBLEM: NO
//         TODO_NEED_PRACTICE: NO
//         TODO_NEED_REVISION: NO
//         TODO_BENCHMARK: YES [Typical interview question]
//         TODO_QUESTIONS:
//             a)
//         TODO_TAKEAWAY:
//             a)
//         TODO_REMEMBER:
//             a) install, uninstall & constructor as TimerAPI for cleaner code
//             b) Define an inner function, and invoke it at entry
//         TODO_SOLUTION:
//             a) interval can be achieved using setTimeOut recursively
//             b) onTimeOut, call itself
//                 - call the function
//                 - clear the past timeout
//                 - Re-register timeout
//                 - Update the timerMap with previous timerId as the key
// */
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const timerMap = new Map()
//
// const mySetInterval = (fun, delay, period) => {
//
//
//     let count = 0
//     let timerId = null
//
//     const registerTimeOut = () => {
//         fun(delay + (period * count))
//         clearTimeout(timerMap.get(timerId))
//         const newTimerId = setTimeout(registerTimeOut, delay + (period * count++))
//         timerId = timerId || newTimerId
//         timerMap.set(timerId, newTimerId)
//         return timerId
//     }
//
//     return registerTimeOut()
//
// }
//
// const myClearInterval = (timerId) => {
//     clearTimeout(timerMap.get(timerId))
//     timerMap.delete(timerId)
// }
//
// const fn = (timeDelay) => {
//     console.log(timeDelay)
// }
//
//
// const timerId = mySetInterval(fn, 100, 200)
//
//
// setTimeout(() => {
//     myClearInterval(timerId)
// }, 2000)
//
//
//
//
//
// /*
//
//
//
// class CustomInterval {
//
//     constructor() {
//         this.setIntervalNative = window.setInterval
//         this.clearIntervalNative = window.clearInterval
//     }
//
//
//     install() {
//
//         let count = 0
//         let delay = 0
//         let map = new Map()
//
//         window.setInterval = (fn, interval, period, ...args) => {
//
//             const onTimeOut = () => {
//                 count && fn(...args)
//                 delay = interval + (period * count++)
//                 const newTimerId = setTimeout(onTimeOut, delay)
//                 map.set(timerId, newTimerId)
//                 return timerId
//             }
//
//             const timerId = onTimeOut()
//             map.set(timerId, timerId)
//             return timerId
//         }
//
//
//         window.clearInterval = (timerId) => {
//             clearInterval(map.get(timerId))
//         }
//     }
//
//     uninstall() {
//         window.setInterval = this.setIntervalNative
//         window.clearInterval = this.clearIntervalNative()
//     }
// }
//
//  */


class TimerAPI {


    constructor() {
        this.backupInterval = window.setInterval
        this.backupClearInterval = window.clearInterval
        this.id = 0
        this.expoTimeOutCount = 0
        this.timerMap = {}
    }

    install() {
        window.setInterval = (fn, delay, expoDelay) => {
            const registerTimeout = (originalTimerId) => {
                const expoDelayVariable = ((this.expoTimeOutCount++) * expoDelay)
                const timerId = setTimeout(() => {
                    fn(expoDelayVariable)
                    this.timerMap[originalTimerId] = registerTimeout(originalTimerId)
                }, delay + expoDelayVariable)
                originalTimerId = originalTimerId ?? timerId
                this.timerMap[originalTimerId] = timerId
                return this.timerMap[originalTimerId]
            }
            return registerTimeout() // TODO_REMEMBER: For recursive functions, as the entry point.
        }


        window.clearInterval = (timerId) => {
            console.log('Reached', this.timerMap, timerId)
            const currentTimerId = this.timerMap[timerId]
            clearTimeout(currentTimerId)
        }
    }

    uninstall() {
        window.setInterval = this.backupInterval
        window.clearInterval = this.backupClearInterval
    }
}


const timerAPI = new TimerAPI()
timerAPI.install()
const fn = (timeDelay) => {
    console.log(timeDelay)
}


const timerId = setInterval(fn, 100, 200)

setTimeout(() => {
    clearInterval(timerId)
}, 2000)