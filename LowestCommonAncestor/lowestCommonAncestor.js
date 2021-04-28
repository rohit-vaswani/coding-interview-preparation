/*

    Source: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
    Difficulty: Medium
    Approach: Recursive | DFS Traversal
    Data structure: Tree (Array representation)
    Solution: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/
    Learning:
        1. A recursive function is returning multiple dataType of the value using an object input argument.

 */


const lowestCommonAncestor = (tree, p, q) => {
    let answer = {
        value: undefined
    }
    recurseTree(tree, 0, p, q, answer)
    return answer.value
}


const recurseTree = (tree, targetIndex, p, q, answer = {}) => {


    // Base Condition
    if (tree[targetIndex] === undefined) {
        return false
    }

    // Non base conditions
    const left = recurseTree(tree, 2 * targetIndex + 1, p, q, answer) ? 1 : 0

    const right = recurseTree(tree, 2 * targetIndex + 2, p, q, answer) ? 1 : 0

    const mid = (p === tree[targetIndex] || q === tree[targetIndex]) ? 1 : 0

    if ((left + right + mid) >= 2) {
        answer.value = tree[targetIndex]
        return answer
    }

    return (left + right + mid) > 0

}


const tree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log(lowestCommonAncestor(tree, 9, 11))
