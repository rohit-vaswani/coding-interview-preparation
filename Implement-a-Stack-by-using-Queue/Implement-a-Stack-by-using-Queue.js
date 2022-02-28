/*
        Source: https://bigfrontend.dev/problem/Implement-a-Stack-by-using-Queue (108_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: YES
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Visualise the passes of q1 and q2 on each insertion/enqueue/dequeue.
            b) Write comments for steps to perform. Complete those steps.
        TODO_REMEMBER:
            a) API of queue: enqueue, dequeue, peek, isEmpty, size
            b) API of stack: push, pop, peek, isEmpty, size
        TODO_SOLUTION:
            a) Maintain two queue
            b) During push of the stack, dequeue q1 to d2. enqueue elem to q1. dequeue q2 to a1.
            c) During pop, dequeue q1

*/


class Queue {

    constructor() {
        this.arr = []
    }


    enqueue(elem) {
        this.arr.push(elem)
    }

    dequeue() {
        return this.arr.shift()
    }

    peek() {
        if (!this.isEmpty()) {
            return this.arr[0]
        }
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.arr.length
    }
}


class Stack {

    constructor() {
        this.q1 = new Queue() // Enqueue
        this.q2 = new Queue() // temp queue, while enqueuing
    }

    push(elem) {


        if (this.q1.isEmpty()) {
            this.q1.enqueue(elem)
            return elem
        }

        // q1=[3,2,1]
        // q2=[]


        // Dequeue q1 to q2
        let s =  this.q1.size()
        for (let i = 0; i < s; i++) {
            this.q2.enqueue(this.q1.dequeue())
        }

        // Enqueue elem to q1
        this.q1.enqueue(elem)

        // dequeue q1 to q2
        let s2 = this.q2.size()
        for (let i = 0; i < s2; i++) {
            this.q1.enqueue(this.q2.dequeue())
        }


        return elem

    }

    pop() {

        if (this.q1.isEmpty()) {
            return null
        }

        return this.q1.dequeue()

    }

    peek() {
        return this.q1.peek()
    }

    isEmpty() {
        return this.q1.isEmpty()
    }

    size() {
        return this.q1.size()
    }
}


const stack = new Stack()
console.log('PUSH: ', stack.push(1))
console.log('PUSH: ', stack.push(2))
console.log('PUSH: ', stack.push(3))
console.log('PEEK: ', stack.peek())
console.log('POP: ', stack.pop())
console.log('POP: ', stack.pop())
console.log('PEEK: ', stack.peek())
console.log('isEmpty: ', stack.isEmpty())
console.log('POP: ', stack.pop())
console.log('PEEK: ', stack.peek())
console.log('isEmpty: ', stack.isEmpty())