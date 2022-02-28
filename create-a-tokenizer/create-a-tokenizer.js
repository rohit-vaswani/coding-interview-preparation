/*
        Source: https://bigfrontend.dev/problem/create-a-tokenizer (119_BFE)
        Solution link:
            a) https://bigfrontend.dev/problem/create-a-tokenizer/discuss/12347
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
            a) yield:
              - Pause the execution of the function, returns the corresponding value to the called function.
              - Think of it as a return statement for generator functions
              - It can only be called from the generator function.
              - Return type: {value: return value, done: boolean}
           b) Set
              - Constructor: Create the unique key/value of the arguments.
              - has: to check if the value is present in the set
              - Constructor: new Set('12345567890'). has check: set.has('9'): true
        TODO_SOLUTION:
            a) Create three sets, digitsSet, paransSet, operandsSet
            b) Iterate over the elements. Ignore spaces.
            c) yield parans and operands.
            d) yields nos.
*/


const numberSet = new Set('1234567890')
const paransSet = new Set('()')
const operandsSet = new Set('+-*/')


function* tokenize(str) {

    for (let i = 0; i < str.length; i++) {
        let val = str[i]
        if(val === " ") continue

        if (paransSet.has(val) || operandsSet.has(val)) {
            yield val
        } else {

            let no = ''
            let j = i
            while (numberSet.has(str[j])) {
                no += str[j++]
            }
            i = j - 1
            yield no
        }
    }

}


const tokens = tokenize(' 1 * (20 -   300      ) ')


while(true) {
    let token = tokens.next()
    if(token.done) {
        break
    }
    console.log(token.value)
}


//
//
// while (true) {
//     let token = tokens.next()
//     if (token.done) {
//         break
//     }
//     console.log(token.value)
// }