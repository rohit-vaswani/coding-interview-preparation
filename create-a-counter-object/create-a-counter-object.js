/*
        Source: https://bigfrontend.dev/problem/create-a-counter-object (148_BFE)
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_TAKEAWAY:
            a) setter and getter function cannot be written using arrow functions
            b) const obj = {get count(){}, set count() {}}
            c) const Object.defineProperty(obj, "count", {get(){}, set(_){}})
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


const createCounter = () => {


    let val = 0
    const countObj = {}
    Object.defineProperty(countObj, "count", {
        get() {
            return val++
        },
        set(_val){
            return val
        }
    })

    return countObj



}

// const createCounter = () => {
//
//
//     let v = 0
//
//     const counter = {
//         set count(val) {
//             return v
//         },
//         get count() {
//             return v++
//         }
//
//     }
//
//     return counter
//
// }


const counter = createCounter()
console.log(counter.count)
console.log(counter.count)
console.log(counter.count)

counter.count = 100

console.log(counter.count)




