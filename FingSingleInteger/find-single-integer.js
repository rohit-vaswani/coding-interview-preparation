/*
        Source:
            a) https://bigfrontend.dev/problem/find-the-single-integer
            b) https://www.geeksforgeeks.org/find-single-array-2n1-integer-elements/
        Challenge:
            a)
        Difficulty: TODO_DI_EASY
        Algorithm:TODO_AL_ITERATION
        Company: ?
        DataStructure: ?
        Solution explained: ?
        TODO_TAKEAWAY:
            a) XOR of a number with itself results Zero. and XOR of a number with 0 results the number itself.
*/


// Approach 1
const findSingle = function (arr = []) {

    const newMap = arr.reduce((map = {}, val) => {

        if (map[val] === 1) {
            delete map[val]
        } else {
            map[val] = 1
        }

        return map

    }, {})

    return Object.keys(newMap)[0]

}

const arr = [10, 2, 2, 9, 0, 0, 10]
console.log('OUTPUT', findSingle(arr)) // 1


// Approach 2
const findNonRepeat = function (arr) {

    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res = res ^ arr[i]
    }

    return res


}

const arr2 = [10, 2, 2, 9, 0, 0, 10]
console.log('OUTPUT2 : ', findNonRepeat(arr2))

