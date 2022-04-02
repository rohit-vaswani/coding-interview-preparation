const addDigit = (arr, index = arr.length - 1) => {


    // Base condition of all 9's
    if(arr.every(val => val ===9)) {
        return [1, ...new Array(arr.length).fill(0)]
    }

    // Base condition of <9
    if (arr[index] < 9) {
        arr[index]++
        return arr
    }

    // Base condition of index 0
    if(index === 0) {
        arr.unshift(1)
        return arr
    }

    // Non base condition
    return addDigit(arr, index - 1)

}

console.log('ANS: ', addDigit([9, 9, 9]))