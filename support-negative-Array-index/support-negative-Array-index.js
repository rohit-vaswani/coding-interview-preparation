/*
        Source: https://bigfrontend.dev/problem/support-negative-Array-index [88_BFE]
        Solution link: https://bigfrontend.dev/problem/support-negative-Array-index/discuss/11049
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
            a) let no="123"; index=+no; -> It means prefix a string with + converts string into the Integer/Float as desired.
            b) Proxy is a object which allows you to redefine the getter/setter of the Array/Object.
                get(obj, key) -> Returns the value
                set(obj, key, value) -> Set and returns true
            c) new Proxy(obj, {get, set})
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Getter:
                -> Positive: returns the value
                -> Negative: Returns length+key
            b) Setter
                -> For Negative: Find pos index and sets the value
                -> For pos, set the value directly
        TODO_METHODOLOGY:
            a) used built-in function, Proxy
            b) This is a case bases problem solving approach
            c) Took the simple example in front to understand how to solve the problem.
*/


function wrap(arr) {


    let handler = {
        get: function (arr, prop) {
            let index = +prop
            if (index < 0) {
                return arr[arr.length + index]
            }
            return arr[prop]

        },
        set: function (arr, prop, value) {
            const index = +prop
            const posIndex = index < 0 ? arr.length + index : index

            // Pos index for number
            arr[prop] = value
            if(typeof posIndex === "number") {
                arr[posIndex] = value
            }

            return true
        }
    };
    let proxyArr = new Proxy(arr, handler);
    return proxyArr;

}


const originalArr = [1, 2, 3]
const arr = wrap(originalArr)

console.log(arr[0]) // 1
console.log(arr[1]) // 2
console.log(arr[2]) // 3
console.log(arr[3])
console.log(arr[-1]) // 3
console.log(arr[-2]) // 2
console.log(arr[-3]) // 1

arr.push(4)
console.log(arr[3]) // 4
console.log(originalArr[3]) // 4

arr.shift()
console.log(arr[0]) // 2
console.log(originalArr[0]) // 2

arr.bfe = 'bfe'
console.log(arr.bfe) // 'bfe'
console.log(originalArr.bfe) // 'bfe'

arr[-1] = 5
console.log(arr) // [2,3,5]
console.log(originalArr) // [2,3,5]

originalArr[2] = 6
console.log(originalArr) // [2,3,6]
