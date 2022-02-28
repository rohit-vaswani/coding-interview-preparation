/*
        Source: https://bigfrontend.dev/problem/implement-Object.is (116_BFE)
        Solution link: https://bigfrontend.dev/problem/implement-Object.is/discuss/8800
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_MEMORIZE: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) 0 and -0 are equal as per strict equality check are same.
            b) NaN is not equal to itself as per strict equality check.
        TODO_SOLUTION:
            a)
*/


function is(a, b) {


    // NaN is not equal to itself
    if (a !== b) {
        return b !== b
    }

    // Handle 0 and -0
    if (a === 0 && b === 0) {
        return 1 / a === 1 / b
    }

    return a === b

}

is(0, -0)
is(NaN, -NaN)
is(2,2)

