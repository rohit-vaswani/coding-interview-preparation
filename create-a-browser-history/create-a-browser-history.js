/*
        Source: https://bigfrontend.dev/problem/create-a-browser-history [59_BFE]
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a) What happens when a user tries to go back, when no page to pop
            b) Does this mean goBack & goForward does not push/pop the arr. It simply shows the content of the page.
            c) I remember, the back and forward button gets disabled. As an extended API, we will implement canGoBack and canGoForward
        TODO_TAKEAWAY:
            a) Always define the class construct and the data model first, before jumping to the implementation part.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


class BrowserHistory {


    constructor() {
        this.pages = []
        this.activePageIndex = -1
    }

    _hasForward() {
        if (this.activePageIndex <= this.pages.length - 1) {
            return true
        }
    }

    _hasBackward() {
        return this.activePageIndex > 0
    }


    goBack() {
        if (this._hasBackward()) {
            return this.pages[--this.activePageIndex]
        }
    }

    forward() {
        if (this._hasForward()) {
            return this.pages[++this.activePageIndex]
        }
        return null
    }

    visit(pageId) {

        this.pages.length = this.activePageIndex + 1
        this.pages.push(pageId)
        this.activePageIndex++
    }


}


const bh = new BrowserHistory()
bh.visit('A')
console.log(bh.pages, bh.activePageIndex)
bh.visit('B')
console.log(bh.pages, bh.activePageIndex)
bh.visit('C')
console.log(bh.pages, bh.activePageIndex)
bh.goBack()
console.log(bh.pages, bh.activePageIndex)
bh.goBack()
console.log(bh.pages, bh.activePageIndex)
bh.forward()
console.log(bh.pages, bh.activePageIndex)
bh.goBack()
console.log(bh.pages, bh.activePageIndex)
bh.visit('D')
console.log(bh.pages, bh.activePageIndex)