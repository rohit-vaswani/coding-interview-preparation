/*
        Source: https://bigfrontend.dev/problem/write-your-own-instanceof (90_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
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
            a) If C extends B extends A
                - b.__proto__ === B.prototype === A
                - b.__proto__.__proto === A.prototype
                - c.__proto__.__proto__.__proto__ === Object
                - c.__proto__.__proto__ === B
            b) obj has __proto__, while Class has .prototype
        TODO_SOLUTION:
            a) object's `__proto__` is recursively checked if it equates to Class `prototype` -> yes
            b) Otherwise, No
            c) Meaning: Object's prototype is matching with the class ptototype protoypal chain
*/

const myInstanceOf = (obj, Class) => {


    let proto = obj.__proto__
    let classPrototype = Class.prototype
    let isInstanceOf = false

    while(proto !== null) {
        if(proto === classPrototype) {
            return true
        }
        proto = proto.__proto__
    }

    return isInstanceOf

}

class A {}
class B extends A {}

const b = new B()
console.log(myInstanceOf(b, B) === true) // true
console.log(myInstanceOf(b, A) === true) // true
console.log(myInstanceOf(b, Object) === true) // true

function C() {}
console.log(myInstanceOf(b, C) === false) // false
C.prototype = B.prototype
console.log(myInstanceOf(b, C) === true) // true
C.prototype = {}
console.log(myInstanceOf(b, C) === false) // false