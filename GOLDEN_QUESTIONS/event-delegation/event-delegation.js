/*
        Source: https://bigfrontend.dev/problem/event-delegation (117_BFE)
        Solution link: https://bigfrontend.dev/problem/event-delegation/discuss/9066
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
            a) Callback of an event gives event object containing {target, parentElement}
            b) Stop propagation and stopImmediate propagation is registered on the event object.
            c) addEventListener and removeEventListener are used to register/un-register event
            d) Window.addEventListener('DOMConentLoaded', () => {})
        TODO_SOLUTION:
            a) Register an event on the rootNode.
            b) Maintain the map of key as rootNode and eventhandlers as value of the Map.
            c) When an event happens, iterate over the event target and it's parentElement. process all the registered event handlers whose predicate is true.

*/



let eventHandlersMap = new Map()

function onClick(rootNode, predicate, eventHandler) {

    if (eventHandlersMap.has(rootNode)) {
        eventHandlersMap.get(rootNode).push({eventHandler, predicate})
        return eventHandlersMap.get(rootNode)
    }


    let stopPropagation = false
    let stopImmediatePropagation = false

    const runEvents = (element, event, eventHandlers) => {

        for (let {predicate, eventHandler} of eventHandlers) {
            if (predicate(element)) {
                eventHandler.call(element, event)
                if (stopImmediatePropagation) break;
            }
        }

    }

    eventHandlersMap.set(rootNode, [{eventHandler, predicate}])


    rootNode.addEventListener('click', (event) => {

        let eventHandlers = eventHandlersMap.get(rootNode)

        event.stopPropagation = () => {
            stopPropagation = true
        }

        event.stopImmediatePropagation = () => {
            stopImmediatePropagation = true
        }

        // TODO_REMEMBER: TO ITERATIVELY MOVE UPWARDS
        let targetElem = event.target
        while ((targetElem || targetElem === rootNode) && !stopPropagation) {
            runEvents(targetElem, event, eventHandlers)
            targetElem = targetElem.parentElement
        }
    })
}


window.addEventListener('DOMContentLoaded', (event) => {

    console.log('event')
    onClick(document.getElementById("parent1"), el => el.tagName.toLowerCase() === "div", function(event) {
        console.log('EVENT DETAILS', this)
    })
});
