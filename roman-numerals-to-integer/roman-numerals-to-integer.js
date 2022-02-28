/*
        Source: https://bigfrontend.dev/problem/roman-numerals-to-integer (133_BFE)
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_LEARNING:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) If the next symbol value is greater than the current symbol value, subtract it.
            b) From Left to right, Symbols are listed from highest to lowest
*/


const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}

const romanToInteger = (roman = '') => {

    const noArr = [...roman].map(val => map[val])
    const noArrWithSign = noArr.map((val, index) => (noArr[index + 1] !== undefined && noArr[index + 1] > val) ? -val : val)
    return noArrWithSign.reduce((sum, val) => sum + val, 0)

}


console.log('1: ', romanToInteger('CXXIII'))
console.log('2: ', romanToInteger('MCMXCIX'))
console.log('3: ', romanToInteger('MMMCDXX'))