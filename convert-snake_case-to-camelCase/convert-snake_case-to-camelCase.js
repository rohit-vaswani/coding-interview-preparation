/*
        Source: https://bigfrontend.dev/problem/convert-snake_case-to-camelCase [79_BFE]
        Solution link: OWN
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Understand the
                - CASES [Many cases: starts empty, ends empty, middle empty]
                - Steps [Split, Transformation, join
                - Examples [Took simpler example]
                - Output comments [To better understand]
        TODO_REMEMBER:
            a) Understanding terminologies:  _abc: Leading underscore; abc_: Trailing underscore.
        TODO_SOLUTION:
            a)
*/


const toUpperWord = (word = '') => `${word[0].toUpperCase()}${word.slice(1)}`

// is_flag_on

// isFlagOn
const snakeToCamel = (str = '') => {


    const splitArr = str.split('_') // ['is', 'flag', 'on']
    const lastIndex = splitArr.length - 1
    const firstWordIndex = splitArr.findIndex(word => word !== '')

    const transformedArr = splitArr.map((word, index) => {


        const isEmptyWord = word === ""


        if(index <= firstWordIndex && isEmptyWord) {
            return '_'
        } else if(index <= firstWordIndex) {
            return word
        } else if (index === lastIndex && isEmptyWord) {
            return '_'
        } else if (isEmptyWord) {
            return '__'
        } else {
            return splitArr[index - 1] === '' ? word : toUpperWord(word)
        }


    })

    return transformedArr.join('')


}

console.log(snakeToCamel('snake_case'))
console.log(snakeToCamel('is_flag_on'))
console.log(snakeToCamel('is_IOS_or_Android'))
console.log(snakeToCamel('_first_underscore'))
console.log(snakeToCamel('last_underscore_'))
console.log(snakeToCamel('_double__underscore_'))