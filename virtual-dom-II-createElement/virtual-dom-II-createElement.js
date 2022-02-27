/*
        Source: https://bigfrontend.dev/problem/virtual-dom-II-createElement (118_BFE)
        Solution link:
            https://bigfrontend.dev/problem/virtual-dom-II-createElement/discuss/2407
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_MUST_SOLVE: NO
        TODO_MEMORIZE: NO
        TODO_INTERESTING: NO
        TODO_QUESTIONS:
            a)
        TODO_LEARNING:
            a)
        TODO_REMEMBER:
            a) Entries
                i) object:
                     - setting: let obj = {a:1, b:2}
                     - reading: [...Object.entries(obj)].forEach(([key, value]) => console.log(key, value))
                ii) Set
                     - setting: let set = new Set('abc')
                     - reading: [...set.entries()].forEach(([key, value]) => console.log(key, value))
                iii) Map
                     - creating: let map = new Map()
                     - setting: map.set('a', 1) .. map.set('b', 2)
                     - reading: [...map.entries()].forEach(([key, value]) => console.log(key, value))
             b) iterator
                 - for(let [key, value] of map.entries()) {console.log(key, ':', value)}
                 - Applicable for map, set and object.
           b) Document API
                i) document.createElement -> To create dom element
                ii) domElem.appendChild(elem) -> To append child elem into the dom ref object
                iii) domElem[key] = value -> To add object properties into the dom node.
                iV) document.createTextNode -> To
        TODO_SOLUTION:
            a) Create a node, add properties, append to parent node.
            b) create a textnode for string node handling
*/


const createElement = (type, props, ...childrenNodes) => ({
    type,
    props,
    childrenNodes
})

const render = (json) => {

    if(typeof json === "string") {
        return document.createTextNode(json)
    }


    let {type, props = {}, childrenNodes = []} = json


    let node = document.createElement(type)
    let objectArr = [...Object.entries(props)]
    objectArr.forEach(([key, value]) => {
        node[key] = value
    })

    childrenNodes.forEach((childNode) => {
        node.append(render(childNode))
    })

    return node

}

const h = createElement

const finalNode = render(h(
    'div',
    {},
    h('h1', {}, ' this is '),
    h(
        'p',
        { className: 'paragraph' },
        ' a ',
        h('button', {}, ' button '),
        ' from ',
        h('a',
            { href: 'https://bfe.dev' },
            h('b', {}, 'BFE'),
            '.dev')
    )
))

console.log(finalNode)