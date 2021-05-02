/*

    Source: https://runzhuoli.me/2018/09/06/count-inversions-in-an-array.html#:~:text=We%20can%20determine%20how%20%E2%80%9Cout,number%20of%20inversions%20it%20has.

    Source 2: https://mail.google.com/mail/u/3/#label/Interview%2FDaily+Coding+question/FMfcgxwLtZpqXkTFXBtkmdJSwsgxFvjq

    Difficulty: Medium
    Asked in: Google

*/


const findInversions = (arr) => {
    let [i, j] = [0, 1]
    let inversions = []
    let len = arr.length
    let isSorted = false

    while(i !== len - 1) {
        isSorted = true
        while(j !== len - 1) {
            let source = arr[i]
            let target = arr[j]
            if(target <= source){
                inversions.push([source, target])
                isSorted = false
            }
            j++
        }
        if(isSorted) {
            break
        }
        i++
        j = i + 1
    }
    return inversions
}

const arr = [2, 4, 1, 3, 5]


console.log(findInversions(arr))