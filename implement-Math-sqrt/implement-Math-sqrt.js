/*
        Source: https://bigfrontend.dev/problem/implement-Math-sqrt (103_BFE)
        Solution link: https://bigfrontend.dev/problem/implement-Math-sqrt/discuss/7716
        Difficulty: TODO_DI_MEDIUM
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
            a) Keep the ref example in my mind
        TODO_REMEMBER:
            a) Remember the solution
            b) Only Object.is(NaN, NaN) is true. Otherwise NaN == NaN is false
        TODO_SOLUTION:
            a) Define the bounds and narrow down to the answer through binary search almost
            b) start=1 and end=x/2
            c) update start=mid+1 or end=mid-1 till mid is the answer
            d) The answer cannot be greater than half of the value. Initial bound.
        TODO_ITERATION:
            a) 25
                > start=1 & end=13 & mid=7 & sqValue=49
                > start=1 & end=6 & mid=3 && sqValue=9
                > start=4 & end=6 & mid=5 && sqValue=16

*/

const isSpecialCase = no => no === 0 || no === Infinity || Object.is(NaN, no)

function mySqrt(no) {


    if (isSpecialCase(no)) {
        return no
    }

    let start = 1
    let end = Math.ceil(no / 2)

    while (start <= end) {
        let mid = start + Math.floor((end - start)/2)
        console.log(mid)
        let sqValue = mid * mid

        if (sqValue === no) {
            return mid
        } else if (sqValue > no) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }

    return start - 1

}


console.log(mySqrt(25))