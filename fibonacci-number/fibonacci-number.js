/*
        Source: https://bigfrontend.dev/problem/Generate-Fibonacci-Number-with-recursion
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: TODO_DI_RECURSION
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: YES
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) Fibonacci of nth = fib(n-1) + fib(n-2)
        TODO_SOLUTION:
            a)
*/


let memo = new Map()

const fib = (no) => {

    if(no === 0) { return 0}
    if(no === 1) { return 1}

    if(memo.has(no)) {
        return memo.get(no)
    }


    let value = fib(no - 1) + fib(no - 2)
    memo.set(no, value)
    return value

}

console.log(fib(10))

/*

    1st: 0+1=1
    2nd: 1+1=2
    3rd: 1+2=3
    4th: 3+2=5
    5th: 5+3=8
    6th: 8+5=13 => fib(5) + fib(4)

 */