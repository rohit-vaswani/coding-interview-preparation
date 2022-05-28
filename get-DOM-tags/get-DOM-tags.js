/*
        Source: https://bigfrontend.dev/problem/get-DOM-tags [68_BFE]
        Solution link: ?
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
            a) When it comes to the uniqueness, always prefer `Set`
        TODO_REMEMBER:
            a) Array.from
                - helps you to get array items from array and array like data structure.
                - Array.from(new Set())
                - Array.from(new Map().keys()) => ['a', 'b']
                - Array.from('abc') => ['a', 'b', 'c']
                - Array.from({length: 5}) => [undefined, undefined]
            b) Map/Set Constructor
                - new Map([
                     ['a', 1],
                     ['b', 2]
                  ])
                - new Set([
                     'a',
                     'b'
                  ])
            c) API
                - object.entries(obj); Object.keys(obj); Object.values(obj) [obj = {}]
                - m.entries(); m.keys(); m.values() [m = new Map()]
                - s.entries(); s.keys(); s.values() [s = new Set()]
            d) window events
                - window.addEventListener('DOMContentLoaded')
                - window.addEventListener('ready')
            e) document.createTreeWalker
        TODO_SOLUTION:
            a)
*/



const getTags = (tree, set = new Set()) => {

    for(let node of tree.children) {
        set.add(node.tagName.toLowerCase())
        getTags(node, set) // TODO_REMEMBER: It should set on the existing Set.
    }

    return Array.from(set.keys())

}


const onload = () => {
    const tags = getTags(document.getElementsByTagName('body')[0])
    console.log(tags)
}

window.addEventListener('DOMContentLoaded', onload)