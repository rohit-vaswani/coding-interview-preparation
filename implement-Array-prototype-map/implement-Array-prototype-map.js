/*
        Source: https://bigfrontend.dev/problem/implement-Array-prototype-map (151_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: TODO_AL_RECURSION | TODO_AL_ITERATION
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_MUST_SOLVE: YES
        TODO_LEARNING:
            a) Arrow functions does not hav argument binding. (Access to closest normal functions arguments)
            b) Arrow function does not have their own this. They have this of the nearest normal function/object
            c) Arrow functions are only callable, not constructible.
            d) Arrow functions does not allow duplicate arguments
            e) this keyword carry the ref to the invoking object not for arrow functions
            f) this in arrow function refers to the object that defined the function, while it refers to that called the function. (invoking object / context)***
        TODO_REMEMBER:
            a) Syntax: .map( (val, index, arr) => mapperFn(), contextObj)
        TODO_SOLUTION: a)
*/


function myMap(mapperFn, thisObj = null) {

    let arr = this
    let newArr = []
    arr.forEach((val, index) => newArr.push(mapperFn.call(thisObj, arr[index], index, arr)))
    return newArr


}


Array.prototype.myMap = myMap

let arr = [1, 2, 3]

const ans = arr.myMap(val => val * 2)
console.log(ans)
