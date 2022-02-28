/*
        Source: https://bigfrontend.dev/problem/previous-left-sibling (158)
        Difficulty: TODO_DI_MEDIUM
        Algorithm: TODO_AL_RECURSION | TODO_AL_ITERATION
        Company: ?
        DataStructure: TODO_DS_QUEUE
        TODO_SOLUTION:
            a) Remove one node from the start, push it's child node at the end. Do this one at a time (<1 condition) - BFS
            b) Keep the reference of the previously *removed node* from the start.
            c) Link: https://bigfrontend.dev/problem/previous-left-sibling/discuss/4231
        TODO_TAKEAWAY:
            a) value and children is the representation of multi-node tree. [children is an array].
            b) Root node is an object.
            c) shift and unshift are equivalent to pop/push on the first node.
            d) BFS on the tree helps to find it's sibling node.
            e) DFS on the tree helps to find it's common ancestor
        TODO_STANDARD_PROBLEM: YES
            a) Standard BFS traversal
            b) Representation of the tree
*/


/**
 * @param {Element} root
 * @param {Element} target
 * @return {Elemnt | null}
 */


const eleventhNode = {
    value: 11,
    children: []
}

const treeStructure = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {
                    value: 5,
                    children: [
                        {
                            value: 9,
                            children: []
                        },
                    ]
                },
                {
                    value: 6,
                    children: [
                        {
                            value: 10,
                            children: []
                        },
                    ]
                },
            ]
        },
        {
            value: 3,
            children: [
                {
                    value: 7,
                    children: []
                },
            ]
        },
        {
            value: 4,
            children: [
                {
                    value: 8,
                    children: [
                        eleventhNode,
                        {
                            value: 12,
                            children: []
                        },
                    ]
                },
            ]
        },
    ]
}


const previousLeftSibling = (root, target) => {

    let q = [root]

    while (q.length) {

        let n = q.length
        let prev = null

        for (let i = 0; i < 1; i++) { // Always remove 1 node,

            const curr = q.shift()
            if (curr === target) {
                return prev
            }
            q.push(...curr.children)
            prev = curr
        }

    }
}


// [1]
// [2,3,4]
// [3,4,5,6] (Removed 2, added 5,6) -> current is 2
// [4,5,6,7]
// [5,6,7,8]
// [6,7,8,9] (removed 5)
// [7,8,9,10]
// [8,9,10]
// [9,10,11,12]
// [10,11,12] (removed 9, added none)
// [11,12] (Removed 10, added none) -> current 10
// [12] (removed 11, current 11, prev 10) --> ANSWER


const output = previousLeftSibling(treeStructure, eleventhNode)
console.log(output)