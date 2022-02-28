/*
<<<<<<< HEAD
    Source: https://bigfrontend.dev/problem/jest-assertion (161_BFE)
=======
    Source: https://bigfrontend.dev/problem/jest-assertion
>>>>>>> 93be01396548bd4f98d63e2817ad59cb8b7225aa
    Difficulty: TODO_DI_MEDIUM
    Algorithm: ?
    Company: ? TODO_CO_AMAZON | TODO_CO_FACEBOOK | TODO_CO_UBER | TODO_CO_GOOGLE
    DataStructure: ? TODO_DS_STACK | TODO_DS_GRAPH | TODO_DS_MAP | TODO_DS_QUEUE
    Solution explained: https://www.youtube.com/watch?v=Rs6ox8biWHE
    TODO_TAKEAWAY:
        a) Function that behave like an object, with get function.
        b) Always think first from input and output
        c) Take advantage of closure to access the enclosed data.
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