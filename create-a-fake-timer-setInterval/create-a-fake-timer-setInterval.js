/*
        Source: https://bigfrontend.dev/problem/create-a-fake-timer-setInterval [84_BFE]
        Solution link: https://bigfrontend.dev/problem/create-a-fake-timer-setInterval/discuss/8752
        Difficulty: TODO_DI_EASY | TODO_DI_MEDIUM | TODO_DI_HARD
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: YES
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) *** Always understand the problem, input, output clearly. Understand what each function is expected to do***
            b) Defining a class with methods install, uninstall is a good step to solve the problem
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) install: It will re-define 3 functions
                - setInterval: Enqueue the task(fn, args) into custom queue
                - clearInterval: Dequeue the task from the queue
                - now: Override with the current time as 0
            b) tick
               - Execute all the task in the queue (reset the current time to task's time)
               - Also, schedule the task with updated time.
*/


class FakeTimer {


    constructor() {
        this.setIntervalNative = window.setInterval
        this.dateNow = Date.now
        this.clearInterval = window.clearInterval
        this.myEventQueue = []
        this.currentTime = 0
        this.id = 0
    }

    scheduleTask(task) {
        task.time = this.currentTime + task.interval
        this.myEventQueue.push(task)
        this.myEventQueue.sort((a,b) => b.time - a.time)
    }

    install() {


        // Define setInterval
        window.setInterval = (fn, interval, args) => {

            const task = {fn, interval, args, time: this.currentTime, id: this.id}
            this.scheduleTask(task)
            return this.id++
        }

        window.clearInterval = (id) => {
            this.myEventQueue = this.myEventQueue.filter(task => task.id !== id)
        }

        window.Date.now = () => this.currentTime


    }

    uninstall() {
        window.setInterval = this.setIntervalNative
        window.Date.now = this.dateNow
        window.clearInterval = this.clearInterval
    }

    tick() {
        while (this.myEventQueue.length) {
            let task = this.myEventQueue.pop()
            this.currentTime = task.time
            this.scheduleTask(task)
            task.fn(task.args)
        }

    }
}

const timer = new FakeTimer()
timer.install()

let count = 0
const timerId = window.setInterval(() => {

    if(count > 2) {
        clearInterval(timerId)
    }

    console.log('Executing at Time: ', Date.now())
    count++

}, 1000)


timer.tick()

timer.uninstall()