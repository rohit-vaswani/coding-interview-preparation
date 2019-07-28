/*
    TODO_SOURCE: https://leetcode.com/problems/decode-ways/
    Difficulty: Medium
    TODO_SOLUTION: and TODO_IMPORTANT
        1. Always think about the signature of the function first.         
        2. For a dynamic program(Recursive problem with the recursive solution), always think about the base conditions first.
        3. Think about the driver function as a logical set of the actions to be performed. Don't think about the implementation of those sub problems.
        4. Whenever any problem is give, think about the approach. Do a dry fun. Make your flow clear. And SIMPLY CONVERT INTO THE DRIVER FUNCTION        
*/


'226'

/*
2 2 6
2 26
22 6
*/

function decodeStr(str){

    let allChars = [...str];
    let [firstChar , secondChar , ...reaminingChars] = allChars;
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
    let secondCharArr = decodeStr(reaminingChars.join('')).map( val => [combinedChars].concat(val) );

    firstCharArr.push(secondCharArr.flat(Infinity));
    return firstCharArr;

}

let input = '226';
// let output = decodeStr(input);
// console.log(`Decoded str are ` , output);



/*


let input = [1, 2, 3, 4, 5];
let output = [120, 60, 40, 30, 24]

120 / 2 = 60


Before: [ 1  , 1 , 2 , 6 , 24 ]
After:  [ 120 , 60 , 20 , 5 , 1 ]
Result: [120 ,60 , 40 , 30 , 24]

*/

let getMultipliedArr = (arr) => {
    let lastMultipliedVal = 1;
    return arr.reduce( (resultArr, val) => {
        resultArr.push(lastMultipliedVal);
        lastMultipliedVal *= val;
        return resultArr;
    } , []);
}

let getBothMultipliedArr = (arr1,arr2) => arr1.map( (val,i) => val*arr2[i]);

function getMappedAnser(arr){

    let beforeMultipliedArr = getMultipliedArr(arr);
    let afterMultipliedArr = getMultipliedArr(arr.reverse()).reverse();
    let bothMultipliedArr = getBothMultipliedArr(beforeMultipliedArr , afterMultipliedArr);
    return bothMultipliedArr;

}

let input1 = [1, 2, 3, 4, 5];
let output = getMappedAnser(input1);
console.log( 'Output : ' , output );



// function getMappedArray(arr){

//     let multipliedValue = arr.reduce( (mult , val) => mult*val , 1 );
//     return arr.map( val => (multipliedValue/val));
// }