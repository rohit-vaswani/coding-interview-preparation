/*
        Source: https://bigfrontend.dev/problem/get-DOM-tree-height [58_BFE]
        Solution link: https://bigfrontend.dev/problem/get-DOM-tree-height/discuss/2608
        Difficulty: TODO_DI_MEDIUM
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
            a)
        TODO_SOLUTION:
            a)
*/



// TODO_REMEMBER: Iterative way of performing the recursive function. AKA: BFS
const getHeight = (tree = {}) => {


    if(!tree) {
        return 0
    }

    const queue = [[tree, 1]]
    let maxHeight = -Infinity

    while (queue.length > 0) {
        const [node, level] = queue.shift()
        const {children = []} = node ?? {}
        maxHeight = Math.max(maxHeight, level)
        const childNodes = [...children]
        childNodes.forEach( cn => queue.push([cn, level + 1]))
    }

    return maxHeight - 1

}


// Recursive way of solving the fun. AKA. DFS
const getHeight = (tree, level = 1) => {


    const children = [...tree.children] ?? []


    if (children.length === 0) {
        return level - 1
    }

    return Math.max.apply(null, children.map(childNode => getHeight(childNode, level + 1)))
}

// const getHeight = (tree = {}, level = 1) => {
//
//     let maxHeight = -Infinity
//     let childrenNodes = tree.children ?? [];
//
//
//     // Base condition
//     if(childrenNodes.length === 0) {
//         return level - 1
//     }
//
//     [...childrenNodes].forEach(childNode => {
//         const cHeight = getHeight(childNode, level + 1)
//         maxHeight = Math.max(maxHeight, cHeight)
//     })
//
//     return maxHeight
//
// }


const onLoad = () => {
    const elem = document.getElementById('body')
    console.log(getHeight(elem))
}

document.addEventListener('DOMContentLoaded', onLoad)