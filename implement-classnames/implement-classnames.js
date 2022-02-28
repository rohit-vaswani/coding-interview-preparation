/*
        Source: https://bigfrontend.dev/problem/implement-classnames (125_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Identify the Input and output first
            b) Define the cases, base and non-base. Handle them one-by-one.
        TODO_REMEMBER:
            a) Iterate over the Map through forEach map.forEach((val, key) => undefined)
            b) Iterate over the Map through for(var [key, value ] of map.entries())
            c) typeof => string, undefined, object(array, null, Date), bigint(1n), number, Symbol(), boolean, function
            d) instanceof => const m = new Map(); m instanceof Map
        TODO_SOLUTION:
            a) Handle each of the datatype separately
*/


const classNames = (...args) => {


    let ansArr = []


    args.forEach((val, index) => {

        // string
        const dt = typeof val

        if (dt === 'string') {
            ansArr.push(val)
        } else if (dt === "undefined") {

        } else if (dt === 'number') {
            ansArr.push(val)
        } else if (val === null) {

        } else if (dt === "bigint") {

        } else if (dt === "function") {

        } else if (dt === "boolean") {

        }

        // object
        else if (Array.isArray(val) && dt === "object") {
            val.forEach(value => {
                ansArr.push(classNames(value))
            })
        } else if (val instanceof Map && dt === "object") {
            val.forEach((value, key) => {
                !!value && ansArr.push(key)
            })
        }

        // Array
        else if (dt === "object") {
            const str = Object.keys(val).reduce((str, key) => {
                !!val[key] && str.push(key)
                return str
            }, []).join(" ")
            ansArr.push(str)
        }

    })

    return ansArr.join(' ')


}


// const ans = classNames('BFE', 'dev', 100)
// console.log(ans)


// const ans = classNames(null, undefined, Symbol(), 1n, true, false)
// console.log(ans)


const obj = new Map()
obj.set('cool', '!')

// const ans = classNames({BFE: [], dev: true, is: 3}, obj)
// console.log(ans)


const ans = classNames(['BFE', [{dev: true}, ['is', [obj]]]])
console.log(ans)



