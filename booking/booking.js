console.log('Hey')

/*

    abzx -> 1226#24%
    aabccc -> a(2)23(3)

 */


const getEncodedChar = (word = '') => {

}


// const frequency = (s) => {
//
//
//     let i=0;
//     let len = s.length
//
//     let encodedStr = ''
//     while (i < len) {
//
//
//         let char = str[i]
//         let targetChars = ''
//
//         // Continuous chars
//         let end = i
//         while(s[i] === st)
//
//         // Non continuous chars
//     }
//
//     return encodedStr
// }


// 1(2)23(3)
// 2110#(2) -> 2

const getStartIndex = (arr, startIndex) => {
    return arr[startIndex - 1] === '#' ? startIndex - 3 : startIndex - 1
}

const getEndIndex = (arr, startIndex) => arr.indexOf(')', startIndex)

function frequency(s) {


    const arr = s.split('')
    const result = new Array(26).fill(0)


    for (let i = 0; i < arr.length; i++) {
        const char = arr[i]

        if (char === '(') {
            const startIndex = getStartIndex(arr, i)
            const endIndex = getEndIndex(arr, i)
            console.log(startIndex, endIndex)
            for (let j = startIndex; j <= endIndex; j++) {
                arr[j] = '$'
            }

            const word = s.slice(startIndex, endIndex + 1)
            const arrIndex = Number(word.length === 3 ? word[0] : word.slice(0, 2))
            const freq = Number(word[word.length - 2])
            result[arrIndex - 1] = result[arrIndex - 1] + freq

        }

    }

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i]

        if (char === '#') {
            const startIndex = i - 2
            for (let j = startIndex; j <= i; j++) {
                arr[j] = '$'
            }

            const arrIndex = Number(s.slice(startIndex, startIndex + 2))
            result[arrIndex - 1]++
        }
    }


    for(let i=0;i<arr.length;i++) {
        if(arr[i] !== '$') {
            const arrIndex = Number(+arr[i])
            result[arrIndex - 1]++
        }
    }


    return result

}


function updateResult(input, result) {
    for (let i = 1; i <= input.length; i++) {
        const targetString = input.substr(-i, 1) // last char
        if (targetString === ")") {
            const targetCount = Number(input.substr(-i - 1, 2).substr(-2, 1)) // (3) => 3
            const subTargetString = input.substr(-i - 3, 1) // 1(3) =>  1
            if (subTargetString === '#') {
                const targetIndex = Number(input.substr(-i - 5, 2)) // 12#(3) => 12
                i = i + 5;
                result[targetIndex - 1] = result[targetIndex - 1] + targetCount
            } else {
                const targetIndex = Number(input.substr(-i - 3, 1)) // 12(3) => 2
                i = i + 3;
                result[targetIndex - 1] = result[targetIndex - 1] + targetCount
            }
        } else if (targetString === '#') {
            const targetIndex = Number(input.substr(-i - 2, 2))
            i = i + 2;
            result[targetIndex - 1]++
        } else {
            const targetIndex = Number(targetString)
            result[targetIndex - 1]++
        }
    }
    return result

}

function frequency2(s) {
    const result = new Array(26).fill(0)
    return updateResult(s, result)
}


console.log(frequency("211#10#(2)"))
console.log(frequency2("211#10#(2)"))






/*



    // const result = new Array(26).fill(0)
    // for (let i = 1; i <= s.length; i++) {
    //     const targetString = s.substr(-i, 1)
    //     if (targetString === '#') {
    //         const targetIndex = Number(s.substr(-i - 2, 2))
    //         if (!isNaN(targetIndex)) {
    //             i = i + 2
    //             result[targetIndex - 1]++
    //         }
    //     } else {
    //         const targetIndex = Number(targetString)
    //         if (!isNaN(targetIndex)) {
    //             result[targetIndex - 1]++
    //         }
    //     }
    // }
    // return result


    // const result = new Array(26).fill(0)
    // for (let i = 1; i <= input.length; i++) {
    //     const targetString = input.substr(-i, 1) // last char
    //     if (targetString === '#') {
    //         const targetIndex = Number(input.substr(-i-2, 2))
    //         if (!isNaN(targetIndex)) {
    //             i = i + 2;
    //             result[targetIndex - 1]++
    //         }
    //     } else {
    //         const targetIndex = Number(targetString)
    //         if (!isNaN(targetIndex)) {
    //             result[targetIndex - 1]++
    //         }
    //     }
    // }
    // return result

 */