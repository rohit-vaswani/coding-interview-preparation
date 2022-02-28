/*
        Source: https://bigfrontend.dev/problem/two-way-binding (154_BFE)
        Solution link: https://bigfrontend.dev/problem/two-way-binding/discuss/3529
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: YES | NO
        TODO_NEED_PRACTICE: NO
        TODO_TAKEAWAY: ?
        TODO_REMEMBER:
            a) Object.defineProperty helps you to attach getter and setter to a property of that object.
            b) While get and set keyword on an object will help to convert a property into the function.
        TODO_SOLUTION:
            a) Parameters are passed by ref, hence mutating will change the original object too.
            b) addEventListener to mutate the state on input change event
            c) defineProperty to mutate the input on setting the state property.
*/


function model(state = {}, $input) {
    // your code here

    $input.value = state.value

    const onChange = (val) => {
        state.value = val.target.value
    }


    Object.defineProperty(state, 'value', {
        get: () => $input.value,
        set: (val) => {
            $input.value = val
        }
    })


    $input.addEventListener('change', onChange)
    $input.dispatchEvent(new Event('change'))

}

const $input = document.getElementById('inp')

let state = {value: 'a'}

// Changing DOM
console.log('val1: ', state.value) // a
model(state, $input)
console.log('val2: ', state.value) // b

// changing state
console.log('val3: ', $input.value)         // b
state.value = 'c'
console.log('val4: ', $input.value)           // c





