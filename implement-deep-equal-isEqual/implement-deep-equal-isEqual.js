/*
        Source: https://bigfrontend.dev/problem/implement-deep-equal-isEqual [69_BFE]
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
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
            a) Understand the problem using the cases to handle.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Not 100% completed solution.
*/


const isEqual = (a, b) => {


    const typeOfA = typeof a
    const typeOfB = typeof b


    if (typeOfA !== typeOfB) {
        return false
    }

    // Ref & primitive value check.
    // Does not do primitive value check.
    if (a === b) {
        return true
    }


    if (Array.isArray(a)) {
        return a.every((val, index) => isEqual(val, b[index]))
    }

    if (typeOfA === "object") {

        if(Object.keys(a).length !== Object.keys(b).length) {
            return false
        }

        for(let [key, value] of Object.entries(a)) {
            if(!isEqual(value, b[key])) {
                return false
            }
        }
    }

    return true

}


const c = [1, {a: 1, b: 2}, '4']
const d = [1, {a: 1,b:2}, '4']
const a = {a: 'bfe', b: [c]}
const b = {a: 'bfe', b: [d]}



// const d = {self: {self: a}}
// const e = {self: {self: b}}

console.log(isEqual(a, b)) // true
// console.log(isEqual(a, c)) // true
// console.log(isEqual(a, d)) // true
// // isEqual(a, e) // true
// console.log(isEqual(b, c)) // true
// console.log(isEqual(b, d)) // true
// // isEqual(b, e) // false
// console.log(isEqual(c, d)) // true
// isEqual(c, e) // true
// isEqual(d, e) // true