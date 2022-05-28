/*
        Source: https://bigfrontend.dev/problem/remove-duplicates-from-an-array
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
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
            a) Maintain two pointers. Sort the Arr in asc.
            b) If value of i & j are not equals, add the jth value at ith index.
            c) Slice the array from [0, i+1]
*/


const deduplicate = (arr) => {

    let i = 0;
    arr.sort() // TODO_REMEMBER: Sort is performed. [By default asc, mutate the original arr]
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[++i] = arr[j]
        }
    }

    return arr.slice(0, i + 1)

}

const deduplicate2 = (arr = []) => {
    return Array.from(new Set(arr).keys())
}

const arr = [2, 3, 4, 5, 6, 5, 7, 1, 2, 4, 3, 4]
console.log(deduplicate(arr))
console.log(deduplicate2(arr))