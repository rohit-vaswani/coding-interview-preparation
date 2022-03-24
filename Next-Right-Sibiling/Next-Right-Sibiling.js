/*
        Source: https://bigfrontend.dev/problem/Next-Right-Sibiling [89_BFE]
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
            a) Node = {value: String, childNodes: Array<Node>}
        TODO_SOLUTION:
            a)
*/


const nextRightSibling = (rootNode, targetNode) => {

    let q = [rootNode]
    while (q.length) {
        let node = q.shift()
        if(node !== null) {
            q.push(...node.childNodes)
        }

        if(node === targetNode) {
            break
        }
    }

    return q[0] || null

}

class Node {
    constructor(value, ...childNodes) {
        this.value = value
        this.childNodes = childNodes
    }
}


const targetNode = new Node('button')
const exampleObj = new Node(
    new Node('div'),
    new Node('div', new Node('p', new Node('a')), new Node('p', new Node('button'))),
    new Node('div', new Node('p', targetNode)),
    new Node('div', new Node('p', new Node('PQR'), new Node('a')))
)

const ans = nextRightSibling(exampleObj, targetNode)
console.log('ANS', ans)