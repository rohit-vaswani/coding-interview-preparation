/*
    Source: https://bigfrontend.dev/problem/jest-assertion (161_BFE)
    Difficulty: TODO_DI_MEDIUM
    Algorithm: ?
    Company: ?
    DataStructure: ?
    Solution explained: https://www.youtube.com/watch?v=Rs6ox8biWHE
    TODO_TAKEAWAY:
        a) Function that behave like an object, with get function.
        b) const obj = {
            get a() {return 2},
            b: 3
        }
        obj.a ==> 2; obj.b ==> 3

*/



const myExpect = (input) => {
    let isReversed = false

    const matcher = {
        toBe: (data) => {
            return !isReversed && data === input || isReversed && data !== input
        },
        get not() {
            isReversed = !isReversed
            return this
        }
    }
    return matcher
}

const ans1 = myExpect(3).toBe(3) // true
const ans2 = myExpect(4).toBe(3) // false
//
//
const ans3 = myExpect(3).not.toBe(3) // false
const ans4 = myExpect(4).not.toBe(3) // true


console.log({
    ans1,
    ans2,
    ans3,
    ans4
})