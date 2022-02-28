/*
        Source: https://bigfrontend.dev/problem/implement-Math-pow
        Solution link: ?
        Difficulty: TODO_DI_EASY
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
            a)
        TODO_REMEMBER:
            a) negative power means 1/base^n, while positive power means base^n.
        TODO_SOLUTION:
            a)
*/


const pow = (base, power) => {

    let times = Math.abs(power)
    let ans = base
    for (let i = 1; i < times; i++) {
        ans *= base
    }


    return power < 0 ? (1 / ans) : ans

}


console.log(pow(2,2))
console.log(pow(2,3))
console.log(pow(7,-3))