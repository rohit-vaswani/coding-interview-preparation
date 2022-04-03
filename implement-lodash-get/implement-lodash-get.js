/*
        Source: https://bigfrontend.dev/problem/implement-lodash-get [85_BFE]
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
            a) Helper function: getStandardPath
            b) Approach: Iterative
            c) Problem type: Logical
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) isNaN to check whether the value is isNaN or not.
            b) const a = [1,2,3] --> a["1"] is 2 --> a[1] -->  2.
            c) Meaning, arr/obj can be accessed using key as string/number
        TODO_SOLUTION:
            a)
*/


const obj = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    }
}


const getStandardPath = (path = '') => {

    if (Array.isArray(path)) {
        return path
    }

    path = path.replaceAll('[', '.').replaceAll(']', '')
    path = path.split('.')

    return path

}


const get = (obj, path, defaultValue) => {
    const standardPath = getStandardPath(path)
    let value = obj
    let i = 0
    while (i < standardPath.length) {
        if (value === undefined) {
            return defaultValue
        }
        value = value[standardPath[i++]]
    }

    return value ?? defaultValue
}

console.log(get(obj, 'a.b.c')) // [1,2,3]
console.log(get(obj, 'a.b.c.0')) // 1
console.log(get(obj, 'a.b.c[1]')) // 2
console.log(get(obj, ['a', 'b', 'c', '2'])) // 3
console.log(get(obj, 'a.b.c[3]')) // undefined
console.log(get(obj, 'a.c', 'bfe')) // 'bfe'
