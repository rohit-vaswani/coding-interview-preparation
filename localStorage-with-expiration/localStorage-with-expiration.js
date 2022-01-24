
/*
        Source: https://bigfrontend.dev/problem/localStorage-with-expiration (135_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_MUST_SOLVE: NO
        TODO_INTERESTING: NO
        TODO_QUESTIONS:
            a) API methods should I define - setItem, getItem, removeItem, clear? - Defina ll
            b) what if expiryTime is not defined, default value? - Persist lifeTime
            c) What if expiryTime is 0? - Do not set
            d) Can I use built-in window.localStorage?
        TODO_LEARNING:
            a) In arrow functions, this refers to the object defined that function. In normal function, this refers to the ref to the object invoking that function.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Approach 1, delete the entry from the registry on the expiry.
            b) Downside, a callback is added to the event queue.
            c) Approach 2, while set - also add expiry time to it and set it in LS
            d) Approach 3, while get - if expired, remove and return null. Otherwise return value's data part.
            e) Used IFFY to maintain local variables.
*/


// // Approach 1
// const myLocalStorage = {
//     storage: {},
//     getItem(key) {
//         return this.storage[key]
//     },
//     removeItem(key){
//       delete this.storage[key]
//     },
//     setItem: function (key, value, ttl){
//         this.storage[key] = value
//         ttl > 0 && setTimeout(() => {
//             this.removeItem(key)
//         }, ttl)
//     }
// }


// Approach 2
window.myLocalStorage = (() => {

    return {
        setItem(key, value, maxAge) {

            let dataValue = {
                data: value
            }

            if(maxAge <= 0) {
                return null
            }

            if(maxAge > 0) {
                dataValue.expiryTime = Date.now() + maxAge
            }


            window.localStorage.setItem(key, JSON.stringify(dataValue))

        },
        getItem(key) {

            let {data, expiryTime} = JSON.parse(window.localStorage.getItem(key))

            if(expiryTime < Date.now()){
                this.removeItem(key)
                return null
            }

            return data
        },
        removeItem(key) {
            window.localStorage.removeItem(key)
        },
        clear() {
            window.localStorage.clear()
        }
    }
})()


// myLocalStorage.setItem('a', '123', 2000)
// myLocalStorage.setItem('b', '456')
//
// console.log('1: ', myLocalStorage.getItem('a'))
// setTimeout(() => {
//         console.log('2: ', myLocalStorage.getItem('a'))
// }, 1000)
//
// setTimeout(() => {
//     console.log('3: ', myLocalStorage.getItem('a'))
// }, 3000)
//
// console.log('4: ', myLocalStorage.getItem('b'))



myLocalStorage.setItem('a', '123', 2000)
myLocalStorage.setItem('b', '456')

console.log('1: ', myLocalStorage.getItem('a'))
setTimeout(() => {
    console.log('2: ', myLocalStorage.getItem('a'))
}, 1000)

setTimeout(() => {
    console.log('3: ', myLocalStorage.getItem('a'))
}, 3000)

console.log('4: ', myLocalStorage.getItem('b'))

