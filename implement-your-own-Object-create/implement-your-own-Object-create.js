/*
        Source: https://bigfrontend.dev/problem/implement-your-own-Object-create (94_BFE)
        Solution link: ?
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
            a) Object.create() creates a new object using the prototype of the object.
            b) More about prototype
                - Every object in JavaScript has a built-in property, which is called its prototype
                - Can be accessed using Object.getPrototypeOf(obj) OR obj.__proto__ Or Object.prototype
                -  If you try to access an property, and if it is not found in the object itself, then the prototype object is searched for that property.
                - The prototype is itself an object, so the prototype will have its own prototype, making what's called a `prototype chain`
                - The chain ends when we reach a prototype that has null for its own prototype.
                - prototypal chain: myDate -> Date -> Object -> null
                - Object.hasOwnProperty(key) -> To check if the property is owned by the object itself or it's prototype
             c) In arrow function, this refers to the object that defined the function. While it refers to the invoking object for normal functions.
        TODO_SOLUTION:
            a)
*/


const myObjCreate = (proto) => {

    if(proto === null || typeof proto !== "object") {
        throw new Error('')
    }

    const obj = {}
    obj.__proto__ = proto
    return obj

}

let sampleObj = {
    isHuman: false,
    logDetails(){
        console.log(`My name is ${this.name} & I am ${this.isHuman}`)
    }
}

const me = myObjCreate(sampleObj)
me.name = "Rohit"
me.logDetails()

