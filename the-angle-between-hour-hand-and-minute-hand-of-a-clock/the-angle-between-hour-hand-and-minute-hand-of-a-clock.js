
/*
        Source: https://bigfrontend.dev/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock (132_BFE)
        Solution link: https://bigfrontend.dev/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock/discuss/640
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_LEARNING:
            a) parseInt takes the second argument as base
        TODO_REMEMBER:
            a) parseInt takes the second argument as base
            b) minAngle / 12 gives the displaced hour hand.
        TODO_SOLUTION:
            a) Take 0 as ref, find the angle of min hand and hour hand at per unit. (12 for hour or 60 for mins hand)
            b) Find the diff in angle. The lowest one.
*/

const angle = (time = '') => {

    const [hour, mins] = time.split(':').map(val => Number(val))

    const h = (hour % 12)
    const m = mins

    const minAngle = (m / 60) * 360
    const hourAngle = (h / 12) * 360 + minAngle / 12


    const angle = Math.abs(hourAngle - minAngle)
    const finalAngle = angle > 180 ? 360 - angle : angle
    return Math.floor(finalAngle)


}

console.log(angle('12:00')) // 0
console.log(angle('11:30')) // 165