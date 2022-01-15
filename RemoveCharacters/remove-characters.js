/*

        *** VERY INTERESTING PROBLEM ***

        Source:
            a) https://bigfrontend.dev/problem/remove-characters
            b) https://www.geeksforgeeks.org/remove-a-and-bc-from-a-given-string/
        Difficulty: TODO_DI_MEDIUM

        Approach: Iterative
        DataStructure: Array
        Solution:
            Approach1:
                a) Iterative and Recursive
            Approach3:
                a) Iterate over the elements in an array. Maintain a pointer to input.
                b) If b is encountered, inc by 1.
                c) if ac is encountered, inc by 2.
                d) If a in target str and c in inputStr is encountered, del from target and inc pointer
                e) else, save the char in targetSr
        Detailed Approach: ?
        TODO_LEARNINGS:
            a) slice does not mutate the array. slice(-1) returns last elem.
            b) slice and includes are array and str function.
            c) splice mutates the array and returns spliced part.
            d) Keep things simple


 */


const input = 'cabbaabcca'


// Approach 1
const removeTargetChars = (inputStr = '', charsToRemove = '') => {

    while (inputStr.includes(charsToRemove)) {
        let arr = [...inputStr]
        arr.splice(inputStr.indexOf(charsToRemove), charsToRemove.length)
        inputStr = arr.join('')
    }


    return inputStr

}


const removeChars = (inputStr = '') => {

    // Remove b chars
    inputStr = removeTargetChars(inputStr, 'b')

    // Iteratively remove AC chars
    inputStr = removeTargetChars(inputStr, 'ac')

    return inputStr

}

console.log('OUTPUT: ', removeChars(input))


Appraoch
2


caaaccaac

const removeTargetChars2 = (inputStr, charsToRemove = '') => {


    let i = 0
    let newStr = ''

    while (i <= inputStr.length - 1) {

        let targetChars = `${inputStr[i]}${inputStr[i + 1]}`

        if (targetChars === charsToRemove) {
            i += 2
        } else {
            newStr += inputStr[i++]
        }

    }

    return newStr

}


const removeChars2 = (inputStr = '') => {

    debugger

    // Remove b chars
    inputStr = [...inputStr].filter(char => char !== 'b').join('')


    // Iteratively remove AC chars
    while (inputStr.includes('ac'))
        inputStr = removeTargetChars2(inputStr, 'ac')

    return inputStr

}

console.log('OUTPUT: ', removeChars2(input))





// Approach3

const removeChars3 = (str = '') => {


    let j = 0;
    let newStr = ''


    while (j < str.length) {

        // When ac
        if (str[j] === 'a' && str[j + 1] === 'c') {
            j += 2
        }

        // when b
        else if (str[j] === 'b') {
            j++
        }

        // when future ac
        else if (newStr.slice(-1) === 'a' && str[j] === 'c') {
            newStr = newStr.slice(0, newStr.length - 1)
            j++
        }

        // when otherwise
        else if (str[j]) {
            newStr += str[j++]
        }


    }

    return newStr


}

console.log('OUTPUT: ', removeChars3(input))