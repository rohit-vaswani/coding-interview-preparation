
/*
        Source: https://bigfrontend.dev/problem/add-comma-to-number [65_BFE]
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Understand the example better by taking simpler example and writing down the comments
        TODO_REMEMBER:
            a) .slice also works on string.
        TODO_SOLUTION:
            a)
*/



// 2342342342567890.12
const addComma = (num) => {


    const numStr = String(num)
    const [no, precision] = numStr.split('.') // ['2567890', '12']
    const arr = Array.from(no) // ['2', '5', '6', '7', '8', '9', '0']

    const times = Math.ceil(arr.length / 3)

    let formattedNo = ""
    for (let i = 1; i <= times; i++) {
        const last3Digits = arr.slice(-3).join('')
        const separator = i !== 1 ? ',' : ''
        arr.length = arr.length > 3 ? arr.length - 3 : arr.length   // TODO_REMEMBER: Reducing the arr length helps you to cut the elements
        formattedNo = `${last3Digits}${separator}${formattedNo}` // 2,567,890
    }

    return precision.length ? `${formattedNo}.${precision}` : formattedNo


}

console.log(addComma('1012342342342567890.12'))