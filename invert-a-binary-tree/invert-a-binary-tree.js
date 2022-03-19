/*
        Source: https://bigfrontend.dev/problem/invert-a-binary-tree (91_BFE)
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) To better visualise the problem, identify if it is a recursive problem. If yes, identify base and non-base for the easiest example
        TODO_REMEMBER:
            a) [a,b] = [b,a] => Best way to swap two variables
        TODO_SOLUTION:
            a) Swap the left node with the right node
            b) Do this recursively for the left-subtree & right-sub tree.
*/


const invert = (rootNode) => {

    // Base condition
    if(rootNode === null) {
        return null
    }

    // Non base condition
    [rootNode.left, rootNode.right] = [rootNode.right, rootNode.left]
    invert(rootNode.left)
    invert(rootNode.right)

    return rootNode
}

class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

const tree = new Node(
    1,
    new Node(2, new Node(4, new Node(6), new Node(7, null, new Node(9)))),
    new Node(3, null, new Node(5, new Node(8, null, null))),
)

console.log('Inverted BT: ', invert(tree))