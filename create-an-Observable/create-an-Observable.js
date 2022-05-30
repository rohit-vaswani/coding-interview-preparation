/*
        Source: https://bigfrontend.dev/problem/create-an-Observable [57_BFE
        Solution link: ?
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
            a) Understand the problem better by defining the API of the class and understand the responsibility of each function
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


class Observable {
    constructor(executorFn) {
        this.subscribersMap = new Map()
        this.executorFn = executorFn
    }

    subscribe(subscriber) {

        const newId = this.subscribersMap.size

        // TODO_REMEMBER: Creating a wrapper function to override the exisiting behaviour is the Best
        const subscriberWrapper = {
            unsubscribed: false,
            next: function (value) {
                // TODO_REMEMBER: this in normal function refers to the objects which is calling them
                if (!this.shouldExecute()) {
                    return false
                }
                return subscriber.next(value)
            },
            error: function () {
                if (!this.shouldExecute()) {
                    return false
                }
                return subscriber.error()
            },
            shouldExecute: function () {
                return this.unsubscribed !== true
            },
            complete: function () {

                if (!this.shouldExecute()) {
                    return false
                }

                this.unsubscribed = true
                return subscriber.complete()
            }
        }

        this.subscribersMap.set(newId, subscriberWrapper)
        this.executorFn(subscriberWrapper)

        return {
            unsubscribe: () => {
                this.unsubscribe(newId)
            }
        }

    }

    unsubscribe(newId) {
        this.subscribersMap.delete(newId)
    }
}

const observer = {
    next: (value) => {
        console.log('we got a value', value)
    },
    error: (error) => {
        console.log('we got an error', error)
    },
    complete: () => {
        console.log('ok, no more values')
    }
}

const observable = new Observable((subscriber) => {
    subscriber.next(1)
    subscriber.next(2)
    setTimeout(() => {
        subscriber.next(3)
        subscriber.next(4)
        subscriber.complete()
    }, 100)
})

const sub = observable.subscribe(observer)
setTimeout(() => {
    // ok we only subscribe for 100ms
    sub.unsubscribe()
}, 100)