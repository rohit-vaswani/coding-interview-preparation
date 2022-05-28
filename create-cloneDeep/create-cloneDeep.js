/*
        Source: https://bigfrontend.dev/problem/create-cloneDeep [63_BFE]
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
            a)
        TODO_REMEMBER:
            a) structuredClone: Inbuilt function used for deep cloning.
        TODO_SOLUTION:
            a)
*/


const cloneDeep = (val) => {

    if (Array.isArray(val)) {
        return val.map((v, index) => cloneDeep(v))
    } else if (typeof val === "object") {
        return Object.keys(val).reduce((obj, key, index) => {
            obj[key] = cloneDeep(val[key])
            return obj
        }, {})
    }

    return val

}


const obj = {
    a: 1,
    b: 2,
    c: [3, 4, 5],
    d: v => v,
    e: {
        f: {
            g: [1, 2, 3]
        }
    }
}

const clonedObj = cloneDeep(obj)
console.log(clonedObj)
console.log(obj.c === clonedObj.c)