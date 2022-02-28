/*
        Source: https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree (110_BFE)
        Solution link: https://bigfrontend.dev/problem/serialize-and-deserialize-binary-tree/discuss/7286
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
            a)
        TODO_REMEMBER:
            a) Multiple elements can be pushed: a.push(2,3,4) -> [1,2,3,4] // a=[1]
        TODO_SOLUTION:
            a) BFS of a tree (serialise)
                 - Push the root node is queue.
                 - Till queue is empty, shift queue, push it's child elements
            b) De-serialize
                - Create a root node from 0th index
                - Recursively create the left and right sub-tree

*/


class Node {
    constructor(val, left, right) {
        this.value = val
        this.left = left
        this.right = right
    }
}

const serialize = (node) => {

    const queue = [node]
    const result = []

    while (queue.length) {
        let n = queue.shift()
        if (n) {
            result.push(n.value)
            queue.push(n.left)
            queue.push(n.right)
        } else {
            result.push('null')
        }
    }

    return result.join('_')
}


const deSerialize = (nodeStr, parentIndex = 0) => {

    const nodesArr = nodeStr.split('_')

    if(nodesArr[parentIndex] === "null") {
        return null
    }
    if(parentIndex >= nodesArr.length) {
        return null
    }

    const node = new Node(nodesArr[parentIndex], null, null)
    node.left = deSerialize(nodeStr, 2 * parentIndex + 1)
    node.right = deSerialize(nodeStr, 2 * parentIndex + 2)

    return node

}

const tree = {
    value: 1,
    left: new Node(
        2,
        new Node(
            4,
            new Node(6, null, null),
            new Node(7, null, new Node(9, null, null))
        ),
        null
    ),
    right: new Node(
        3,
        null,
        new Node(
            5,
            new Node(8, null, null),
            null
        )
    )
}

const str = serialize(tree)
const tree1 = deSerialize(serialize(tree), 0)
console.log(str)
console.log(tree1)