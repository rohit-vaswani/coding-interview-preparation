/*
        Source: https://www.youtube.com/watch?v=uQdy914JRKQ
        Solution link: https://www.youtube.com/watch?v=uQdy914JRKQ
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: TODO_CO_GOOGLE
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES [Questions steps]
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a) Seek clarification
             - What if an Array is empty?
             - Can I assume all numbers to be integer and positive
            b) Discuss cases / example / DataStructures / solution / Approach. Do dry run.
             - if last digit is <9
             - if last digit is 9
             - Do a dry run in both the case.
             - Take BASE case example to better visualise the problem
            c) Fix the Approach / Methodology
              - Recursive problem
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/



let input = [1,2,3,4];
let add = 1;
let answer = addDigit(input , add);

console.log('The answer : ' , answer);
function addDigit(arr, index = arr.length - 1) {

    // Base condition of all 9's
    if(arr.every(val => val ===9)) {
        return [1, ...new Array(arr.length).fill(0)]
    }

    // Base condition of <9
    if (arr[index] < 9) {
        arr[index]++
        return arr
    }
    // Non base condition
    return addDigit(arr, index - 1)

}

console.log('ANS: ', addDigit([9, 9, 9]))
