
/*
        Source: https://bigfrontend.dev/problem/create-your-own-new-operator [60_BFE]
        Solution link: https://bigfrontend.dev/problem/create-your-own-new-operator/discuss/9651
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) Object.setPrototypeOf(obj, B.prototype) takes the obj & prototype to set. // obj.__proto__ = B.prototype
            b) Also, new Operator calls the constructor function.
        TODO_SOLUTION:
            a)

*/


const myNew = function (constructor, ...args) {


    // Sets the prototype
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype) // obj.__proto__ = constructor.prototype

    // Calls the constructor
    const res = constructor.call(obj, ...args)

    if (res && typeof res === "object") {
        return res
    }

    return obj

}



const B = function (p, q) {

    this.p = p
    this.q = q
    return this

}

B.prototype.a = function () {
    return this.p + this.q
}


const bInstance = myNew(B, 1, 2)
console.log(bInstance)
console.log(bInstance.a())