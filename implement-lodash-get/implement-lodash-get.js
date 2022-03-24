/*
        Source: https://bigfrontend.dev/problem/implement-lodash-get [85_BFE]
        Solution link: ?
        Difficulty: TODO_DI_EASY | TODO_DI_MEDIUM | TODO_DI_HARD
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
            a)
        TODO_SOLUTION:
            a)
*/


const getStandardPath = (path) => {

    path = typeof path === "string" ? path.replaceAll('[', '.').replaceAll(']', '') : path
    path = Array.isArray(path) ? path : path.split('.')

    return path

}

const get = (obj, path, defaultValue) => {

    const standardPath = getStandardPath(path)

    for (let i = 0; i < standardPath.length; i++) {
        let key = isNaN(+standardPath[i]) ? standardPath[i] : +standardPath[i]


        if( typeof obj === "object" && (obj[key] !== undefined || Array.isArray(obj))) {
            obj = obj[key]
        } else if(defaultValue) {
            return defaultValue
        }

    }

    return obj

}

const obj = {
    a: {
        b: {
            c: [1,2,3]
        }
    }
}

console.log(get(obj, 'a.b.c')) // [1,2,3]
console.log(get(obj, 'a.b.c.0')) // 1
console.log(get(obj, 'a.b.c[1]')) // 2
console.log(get(obj, ['a', 'b', 'c', '2'])) // 3
console.log(get(obj, 'a.b.c[3]')) // undefined
console.log(get(obj, 'a.c', 'bfe')) // 'bfe'