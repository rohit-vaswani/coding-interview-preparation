/*
        Source: https://bigfrontend.dev/problem/create-lazyman (130_BFE)
        Solution link: https://bigfrontend.dev/problem/create-lazyman/discuss/472
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) Using setTimeOut, you ensured all the actions are queued before the execution starts
        TODO_SOLUTION:
            a) Define actionTypes and actionHandlers against case.
            b) Queue the actions into normal and urgent queue.
            c) Process them one by one
*/

class LazyMan {

    constructor(name, loggerFn) {
        this.name = name
        this.logger = loggerFn
        this.actionTypes = {
            greet: 'greet',
            eat: 'eat',
            sleep: 'sleep'
        }


        this.normalTask = []
        this.urgentTask = []
        this.greet(name)

        // TODO_REMEMBER: TO ensure the chained functions are called before we execute the tasks/urgentTasks
        setTimeout(() => {
            this.handleAction()
        }, 0)

    }


    greet(name) {
        this.normalTask.push([this.actionTypes.greet, name])
        return this
    }

    eat(product) {
        this.normalTask.push([this.actionTypes.eat, product])
        return this
    }

    sleep(timeInterval) {
        this.normalTask.push([this.actionTypes.sleep, timeInterval * 1000])
        return this
    }

    sleepFirst(timeInterval) {
        this.urgentTask.push([this.actionTypes.sleep, timeInterval * 1000])
        return this
    }

    log(val) {
        this.logger(val)
    }

    handleAction() {

        let task;

        task = this.urgentTask.shift()

        if(!task) {
            task = this.normalTask.shift()
        }

        if(!task) {
            return null
        }

        const [action, params] = task

        switch (action) {
            case this.actionTypes.greet:
                this.log(`Hi, I'm ${params}`)
                this.handleAction()
                break;
            case this.actionTypes.eat:
                this.log(`Eat ${params}`)
                this.handleAction()
                break
            case this.actionTypes.sleep:
                setTimeout(() => {
                    this.log(`Wake up after ${params}`)
                    this.handleAction()
                }, params)
                break
            default:
                break
        }

    }


}

// const inst = new LazyMan('Jack', console.log)
// new LazyMan('Jack', console.log).eat('banana').eat('apple')
// new LazyMan('Jack', console.log).eat('banana').sleep(3).eat('apple').sleep(1)
new LazyMan('Jack', console.log).eat('banana').sleepFirst(2).eat('apple').sleep(1)


