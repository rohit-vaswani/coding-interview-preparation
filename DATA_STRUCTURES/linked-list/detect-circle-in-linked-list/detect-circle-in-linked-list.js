/*
        Source: https://bigfrontend.dev/problem/detect-circle-in-linked-list (100_BFE)
        Solution link: https://bigfrontend.dev/problem/detect-circle-in-linked-list/discuss/1268
        Difficulty: TODO_DI_EASY
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
            a)
        TODO_REMEMBER:
            a) To iterate single LL, we use while loop till next is not null
            b) Even class instance, can be used as a key of the set
            c) Set is used to maintain/track the uniqueness.
        TODO_SOLUTION:
            a)
*/

class Node {
    constructor(val, next) {
        this.value = val
        this.next = next
    }
}


const isCircularLL = (headNode) => {


    const registry = new Set()
    let currentNode = headNode
    while(currentNode.next !== null) {

        if(registry.has(currentNode)) {
            return true
        }
        registry.add(currentNode)
        currentNode = currentNode.next
    }

    return false


}

const node3 = new Node(3, null)
const node2 = new Node(2, node3)
const headNode = new Node(1, node2)
console.log('ANSWER', isCircularLL(headNode))