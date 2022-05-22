/*
        Source: Asked in Quizizz
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_QUIZIZZ
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Always write the expected output as example against the helper function.
            b) While formulating the approach, always break down the problem into steps to perform to solve the problem
                - One thing is for sure that you have to iterate over the elements. Even if it is a recursive solution.
            c) Here, setting the value in a nested manner is a recursive problem. In Max-connected-boxes, finding connected boxes was recursive
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


/*


    Step1: Understand the input. Understand the edge-cases
        - Can we have square bracket accessor - YES
        - Can we have key as index - YES
    Step2: Understand the output
        - It is a nested object
    Step3: Understand the approach you take to move from input to output [Non recursive]
        - Solved using steps Approach
        - Iterate over the keys of an object one by one
        - In each iteration, normalise the key to path
        - For non-ending keys, go and access to the target nested object
        - Set the value to the last key
        - Please note in every iteration, you need to hold a ref to the parent object


 */

const input = [
    ['address.name', 'address.pinCode', 'address.houseNo', 'address.type.home', 'personName'],
    ['Omi Sai residency', '421004', '301', 'true', 'Rohit Vaswani']
]

const output = {
    address: {
        name: 'Omi Sai residency',
        pinCode: '421004',
        houseNo: '301',
        type: {
            home: 'true'
        }
    }
}




const getNormalisedPath = (key) => {
    return key.replaceAll('[', '.').replaceAll(']', '').split('.') // ['address', 'name']
}

const createObject = (input = [[]]) => {


    const [keys, values] = input
    const outputObj = {}


    keys.forEach((key, index) => {


        const normalisedPath = getNormalisedPath(key) // ['address', 'name']
        const initialKeys = normalisedPath.slice(0, normalisedPath.length - 1)
        const lastKey = normalisedPath.slice(-1)[0]

        let ref = outputObj
        initialKeys.forEach(key => {
            if (!ref[key]) {
                ref[key] = +lastKey >= 0 ? [] : {}
            }
            ref = ref[key]
        })
        ref[lastKey] = values[index]

    })

    return outputObj


}


// Solution 2: Recursive
const setValue = (path, value, obj) => {
    const cKey = path.shift() // TODO_REMEMBER: Very smart way to deal with the problem

    // Last key
    if (path.length === 0) {
        obj[cKey] = value
        return
    }

    // Non last key
    obj[cKey] = obj[cKey] ?? {}
    setValue(path, value, obj[cKey])

}

const createObject2 = (input) => {


    const [keys, values] = input ?? []
    const outputObject = {}

    keys.forEach((key, index) => {
        const normalisedPath = getNormalisedPath(key)
        setValue(normalisedPath, values[index], outputObject)
    })

    return outputObject


}


const ans = createObject2(input)
console.log(ans)