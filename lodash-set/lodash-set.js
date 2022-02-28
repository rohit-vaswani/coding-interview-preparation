/*
        Source: https://bigfrontend.dev/problem/lodash-set (156_BFE)
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        Solution explained:
            a) Cases to handle
                - if Leaf element does not exist, create it as is.
                - If non-leaf element is not present, create it. (Array or object as per the need)
                - If non-leaf element is present, dive inside
                - If leaf element is array and key is alphabetical, ignore the key.
        TODO_QUESTIONS_ASKED:
            a) For an Array, if key is a string (not index) -> ignore it.
            b) For an Object, if key is an index -> create it
            c) if the path does not exists -> create it (index -> Array, string -> object)
            d) When path is an array, do we expect bracket access specifier
        TODO_STANDARD_PROBLEM: YES
        TODO_LEARNING:
            a) Property access expressions: dot, square bracket
            b) When any problem is given, try to identify sub problem into it (normalising the path into single format and expression)
            c) To Access array element, if index if string. It will work normal as int.
            d) When solving any problem/manipulation, try to put expected output against each step, helps better visualize the problem.
            e) we do have replaceAll as string prototype.
            f) Always identify the case first. Handle them one-by-one. This makes the problem easy.
            g) Always complete the main flow using helper function.
        TODO_NEED_PRACTICE: YES

*/


// Sub problem
const getNormalizedPath = (path) => {


    if (Array.isArray(path)) {
        return path
    }

    return path.replaceAll('[', '.').replaceAll(']', '').split('.')

    // const newPath = path.split('.')                         // a, b, c[1]
    //
    // return newPath.reduce((result, key = '') => {
    //     let paths = []
    //     if (key.includes('[')) {
    //         const index = key.indexOf('[')
    //         paths.push(key.slice(0, index))
    //         paths.push(key.slice(index + 1, key.length - 1))
    //     } else {
    //         paths.push(key)
    //     }
    //
    //     result.push(...paths)
    //     return result
    //
    // }, [])

}

const getClone = (obj) => ({...obj}) // can change the def


const set = (_object = {}, path, value) => {


    let obj = getClone(_object)
    let newObj = obj
    const normalizedPath = getNormalizedPath(path)
    let i = 0;

    while (i < normalizedPath.length) {

        let key = normalizedPath[i]
        let isLastKey = i === normalizedPath.length - 1
        i++;

        /* --- handle terminal cases */

        if (isLastKey) {
            if (Array.isArray(obj[key]) && typeof key === 'string') {
                continue;
            }
            obj[key] = value
        }

        // Does not Exist
        else if (obj[key] === undefined) {

            // Number
            if (String(Number(normalizedPath[i])) === normalizedPath[i]) { // TODO_REMEMBER: To distinguish `01` from `1`
                obj[key] = []
            } else {
                obj[key] = {}
            }
            obj = obj[key]
        } else {
            obj = obj[key]
        }


    }

    return newObj


}

const obj = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    }
}

// console.log(getNormalizedPath('a.b.d[2]'))
// console.log(getNormalizedPath('a.b.d.2'))
// console.log(getNormalizedPath(['a', 'b', 'c']))


// const ans1 = set(obj, 'a.b.c', 'BFE')
// const ans2 = set( obj, 'a.b.c.0', 'BFE')
// const ans3 = set(obj, 'a.b.c[1]', 'BFE')
// const ans4 = set( obj, ['a', 'b', 'c', '2'], 'BFE')
// const ans5 = set(obj,  'a.b.c[3]', 'BFE')
// const ans6 = set(obj, 'a.c.d[0]', 'BFE')
const ans7 = set(obj, 'a.c.d.01', 'BFE')


console.log(ans7)

