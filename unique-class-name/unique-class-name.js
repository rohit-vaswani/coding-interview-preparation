/*
        Source: https://bigfrontend.dev/problem/unique-class-name/
        Solution link: https://bigfrontend.dev/problem/unique-class-name/discuss/6898
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) String.fromCharCode converts a code to char
            b) 65: A, 6: displacement, 26: chars, 97: a
        TODO_SOLUTION:
            a) Create a charSet representing all the Chars [a-zA-Z] // 52 chars
            b) num%id -> target character;
            c) num/id -> To recursively calculate it for the previous characters. [Sub-problem, problem repeats itself]
            d) e.g 53rd char -> aa 53 = 53 ( becomes 0) + 0 -> aa
*/


/*
    1 > a
    52 > Z
    53 (52 + 1) > a,a
    54 (52 + 2) > a,b

 */

// TODO_REMEMBER
const charSet = 26
const upperCaseStart = 65
const lowerCaseStart = upperCaseStart + charSet + 6


const getADataSet = (startIndex) => new Array(charSet).fill('').map((_, index) => String.fromCharCode(startIndex + index)).join('')

const getCharsDataSet = () => {


    const smallDataSet = getADataSet(lowerCaseStart)
    const largeDataSet = getADataSet(upperCaseStart)

    return `${smallDataSet}${largeDataSet}`


}


const getUniqueClassName = (() => {

    let id = 0
    const charStr = getCharsDataSet()

    const fn = () => {
        let className = ''
        let num = id++
        while (num >= 0) {
            className = charStr[num % charStr.length] + className
            num = Math.floor(num / charStr.length) - 1
        }
        return className
    }


    fn.reset = () => {
        id = 0
    }

    return fn

})()


console.log(getUniqueClassName())
console.log(getUniqueClassName())

console.log(new Array(100).fill('').map((_, index) => getUniqueClassName()))
