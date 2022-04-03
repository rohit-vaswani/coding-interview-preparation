/*
        Source: https://bigfrontend.dev/problem/find-available-meeting-slots [82_BFE]
        Solution link: ?
        Difficulty: TODO_DI_EASY
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
            a)
        TODO_SOLUTION:
            a) *NOT THE PERFECT ANSWER*
*/

const findMeetingSlots = (schedules) => {

    const dailyHours = new Array(24).fill(1) // 1 represents availability


    schedules.forEach(memberSchedules => {
        memberSchedules.forEach(([startIndex, endIndex]) => {
            for (let i = startIndex + 1; i <= endIndex; i++) {
                dailyHours[i] = 0
            }
        })
    })

    const ans = []
    let count = 0
    let startIndex = 0

    // TODO_REMEMBER: This is same as condensing the string
    for (let i = 0; i < dailyHours.length; i++) {

        let isAvailable = dailyHours[i] === 1

        if (!isAvailable && count === 0) {
            startIndex = i
            continue
        }


        if (isAvailable) {
            count++
        } else {
            ans.push([startIndex , startIndex + count ])
            startIndex = startIndex + count
            count = 0
        }


    }

    ans.push([startIndex , startIndex + count ])

    return ans

}


const schedules = [
    [[13, 15], [11, 12], [10, 13]], //schedule for member 1
    [[8, 9]], // schedule for member 2
    [[13, 18]] // schedule for member 3
]

const ans = findMeetingSlots(schedules)
console.log('ANSWER: ', ans)