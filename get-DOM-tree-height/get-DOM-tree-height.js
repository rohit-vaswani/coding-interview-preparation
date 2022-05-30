/*
        Source: ?
        Solution link: ?
        Difficulty: TODO_DI_EASY | TODO_DI_MEDIUM | TODO_DI_HARD
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


const getHeight = (tree = {}, level = 1) => {

    let maxHeight = -Infinity
    let childrenNodes = tree.children ?? [];


    // Base condition
    if(childrenNodes.length === 0) {
        return level - 1
    }

    [...childrenNodes].forEach(childNode => {
        const cHeight = getHeight(childNode, level + 1)
        maxHeight = Math.max(maxHeight, cHeight)
    })

    return maxHeight

}

const onLoad = () => {
    const elem = document.getElementById('body')
    console.log(getHeight(elem))
}

document.addEventListener('DOMContentLoaded', onLoad)