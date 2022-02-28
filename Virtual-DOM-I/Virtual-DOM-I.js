/*
        Source: https://bigfrontend.dev/problem/Virtual-DOM-I
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: YES
        TODO_MEMORIZE: NO
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_LEARNING:
            a) To simplify, you breakdown the problem statement into sub-problems.
            b) For render, you identified -> create Node, add ClassName, add Children, add props
        TODO_REMEMBER:
            a) Object.entries(obj) ==> for(let [key, value] of Object.entries(obj))
            b) new Set('abc') ==> for(let [key, value] of set.entries())
            c) let m = new Map();m.set(1, 'a') ==> for(let [key, value] of m.entries())
            d) let arr = [1,2,3, 9]; for(let value of arr) {console.log(value)}
            e) Virtualize: It deserialize the element into the object literal.
            f) render: It serialize the object literal into dom tree.
        TODO_SOLUTION:
            a)
*/


/*



    TODO_REMEMBER: DOM API


    Create
        document.createElement(tagName)
        document.createTextNode(textStr)

    Add
        node.append(childNode)
        node.classList.add(className)


    Set
        node.setAttribute(name, value)

    Check
        node.hasAttributes()
        node.hasChildNodes()

    Get
        node.tagName
        node.attributes
        node.childNodes

    NodeType
        node.nodeType


 */


const render = (json) => {


    let {type, props: {className, children, ...restProps}} = json || {}

    // Create Node
    const elem = document.createElement(type)

    // Add ClassName
    elem.classList.add(className)

    // Add Attributes
    for (let [key, value] of Object.entries(restProps)) {
        elem.setAttribute(key, value)
    }

    // Add Children
    let childNodes = !Array.isArray(children) ? [children] : children
    childNodes.forEach(childNode => {
        if (typeof childNode === "string") {
            elem.append(document.createTextNode(childNode))
        } else {
            elem.append(render(childNode))
        }
    })

    return elem

}


const virtualize = (parentNode) => {

    if (typeof parentNode === "string") {
        return parentNode
    }

    // tag Name
    const tagName = parentNode.tagName.toLowerCase()

    let htmlProps = {}
    if (parentNode.hasAttributes()) {
        for (let {name, value} of parentNode.attributes) { // TODO_REMEMBER {} of node.attributes
            htmlProps[name === 'class' ? 'className' : name] = value
        }
    }

    htmlProps.children = []
    if (parentNode.hasChildNodes()) {
        for (let childNode of parentNode.childNodes) {
            if (childNode.nodeType === 1) {
                htmlProps.children.push(virtualize(childNode))
            } else if (childNode.nodeType === 3) {
                htmlProps.children.push(childNode.textContent)
            }
        }
    }

    return {
        type: tagName,
        props: htmlProps
    }

}


const json = {
    type: 'div',
    props: {
        children: [
            {
                type: 'h1',
                props: {
                    children: ' this is '
                }
            },
            {
                type: 'p',
                props: {
                    className: 'paragraph',
                    children: [
                        ' a ',
                        {
                            type: 'button',
                            props: {
                                children: ' button '
                            }
                        },
                        ' from',
                        {
                            type: 'a',
                            props: {
                                href: 'https://bfe.dev',
                                children: [
                                    {
                                        type: 'b',
                                        props: {
                                            children: 'BFE'
                                        }
                                    },
                                    '.dev'
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
}

window.addEventListener('load', () => {

    // const objectLiteral = virtualize(document.getElementById('parent'))
    // console.log(objectLiteral)

    let elem = render(json)
    document.getElementById("render-parent").append(elem)

})
