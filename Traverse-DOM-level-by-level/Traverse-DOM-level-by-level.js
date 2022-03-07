/*
        Source: https://bigfrontend.dev/problem/Traverse-DOM-level-by-level (104_BFE)
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
            a) Representation of the tree - rootNode, childNodes
            b) [1,2,3].push(...[4,5,6]) -> multi push in an array -> [1,2,3,4,5,6]
        TODO_SOLUTION:
            a) Take root of tree as a seed value of queue
            b) shift it, push it's childNodes instead in the queue. Process the rootNode.
*/

class Node {

    constructor(rootNode, ...childNodes) {
        this.rootNode = rootNode
        this.childNodes = childNodes
    }
}

const flatten = (tree) => {


    let q = [tree]
    const ansNodes = []


    while (q.length) {

        let node = q.shift()

        if(node) {
            ansNodes.push(node.rootNode)
            q.push(...node.childNodes)
        }

    }

    return ansNodes

}


const tree = {
    rootNode: 'div',
    childNodes: [
        new Node(
            'p',
            new Node('button')
        ),
        new Node(
            'p',
            new Node('a', new Node('img'))
        ),
        new Node(
            'div',
            new Node('p'),
            new Node('div', new Node('p', new Node('button')))
        )
    ]
}


const ans = flatten(tree)
console.log(ans)