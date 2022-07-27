/*
    TODO_SOURCE:
    Difficulty: Medium
*/


/*
        Source: https://leetcode.com/problems/decode-ways/
        Solution link: ?
        Difficulty: TODO_DI_HARD
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
            a) Identify if this is a recursive problem.
            b) Identify the sub/base problems: a) 1+remaining b) 2+remaining
            c) Identify the solution for the simplest/base problem in an example way: For 1 char & 2 char (using dry run) - IMP*
            d) Always fool yourself that the recursive function will give the proper answer*
            e) Aggregate the solution to solve a bigger problem
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


/*

    TODO_REMEMBER:

    decode(6) -> BASE
        -> F

    decode(26) -> BASE
        -> 2 + 6 -> BF
        -> 26 -> Z

    decode(226)
        -> 2 + decode(26)
            - 2 + 2 + 6 -> BBF
            - 2 + 26 -> BZ
        -> 22 + decode(6)
            - 22 + 6 -> VF
 */

function decodeStr(str){

    let allChars = [...str];

    // TODO_REMEMBER: How to split str into the chars
    let [firstChar , secondChar , ...remainingChars] = allChars;
    let remaningFirstChars = allChars.slice(1);
    let combinedChars = firstChar&&secondChar ? firstChar+secondChar : undefined;

    //Base conditiom: One char array
    if(allChars.length <= 1){
        return allChars;
    };

    //Base condition: Two char array with valid value
    if(allChars.length === 2){
        let result = [ [...allChars] ];
        combinedChars<='26' && result.push(combinedChars);
        return result;
    }

    let firstCharArr = decodeStr(remaningFirstChars.join('')).map( val => [firstChar].concat(val) );
    let secondCharArr = decodeStr(remainingChars.join('')).map( val => [combinedChars].concat(val) );

    firstCharArr.push(secondCharArr.flat(Infinity));
    return firstCharArr;

}

let input = '226';



// const decodeChar = (no) => no >= 26 ? null : String.fromCharCode(64 + no)
//
// const decodeStr = (str = '') => {
//
//
//     const [firstChar, secondChar] = [...str]
//
//
//     TODO_REMEMBER: TO convert a string into the number
//     const firstCharDec = [decodeChar(+firstChar)]
//     const twoCharsDec = [
//         decodeChar(+firstChar) + decodeChar(+secondChar),
//         decodeChar(+`${firstChar}${secondChar}`)
//     ].filter(str => str !== null)
//
//     if (str.length === 1) {
//         return firstCharDec
//     }
//
//     if (str.length <= 2) {
//         return twoCharsDec
//     }
//
//
//     const firstCharDecStr = decodeStr(str.slice(1)).map( val => `${firstCharDec}${val}`)
//     const secondCharDecStr = decodeStr(str.slice(2)).map( val => twoCharsDec.concat(val)).flat(Infinity)
//
//     return [
//         ...firstCharDecStr,
//         ...secondCharDecStr
//     ]
//
//
// }


// console.log(decodeStr('26'))
console.log(decodeStr('226'))

/*


let input = [1, 2, 3, 4, 5];
let output = [120, 60, 40, 30, 24]

120 / 2 = 60


Before: [ 1  , 1 , 2 , 6 , 24 ]
After:  [ 120 , 60 , 20 , 5 , 1 ]
Result: [120 ,60 , 40 , 30 , 24]

*/

// let getMultipliedArr = (arr) => {
//     let lastMultipliedVal = 1;
//     return arr.reduce( (resultArr, val) => {
//         resultArr.push(lastMultipliedVal);
//         lastMultipliedVal *= val;
//         return resultArr;
//     } , []);
// }
//
// let getBothMultipliedArr = (arr1,arr2) => arr1.map( (val,i) => val*arr2[i]);
//
// function getMappedAnser(arr){
//
//     let beforeMultipliedArr = getMultipliedArr(arr);
//     let afterMultipliedArr = getMultipliedArr(arr.reverse()).reverse();
//     let bothMultipliedArr = getBothMultipliedArr(beforeMultipliedArr , afterMultipliedArr);
//     return bothMultipliedArr;
//
// }
//
// let input1 = [1, 2, 3, 4, 5];
// let output = getMappedAnser(input1);
// console.log( 'Output : ' , output );
//


// function getMappedArray(arr){

//     let multipliedValue = arr.reduce( (mult , val) => mult*val , 1 );
//     return arr.map( val => (multipliedValue/val));
// }