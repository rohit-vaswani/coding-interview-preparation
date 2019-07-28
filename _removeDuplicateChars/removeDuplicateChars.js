/*
    Source: https://leetcode.com/problems/remove-duplicate-letters/
    Difficulty: TODO_DI_HARD
    

*/

let str = 'cbacdcbc';
let output = getSmallestResult(str);
console.log('Output: Smallest result : ' , output);

function getSmallestResult(str){
    
    let chars = [...str];
    let smallestIndex = getSmallestCharIndex(chars);
    let existPostSmallerCharMap = getPostDetailsMap(chars , smallestIndex);
    return removeDuplicates(chars , existPostSmallerCharMap , smallestIndex);

}

function removeDuplicates(chars , existPostSmallerCharMap , smallestIndex){
    let isMinCrossed = false;
    let isVisited = {};
    return chars.reduce( (accStr , char , index) => {
        if(isVisited[char] || (existPostSmallerCharMap[char] && !isMinCrossed) ){return accStr};
        if(index === smallestIndex){isMinCrossed = true;}        
        accStr += char;
        isVisited[char] = 1;
        return accStr;        
    } , '');
}

function getPostDetailsMap(chars , smallestIndex){
     return chars.reduce( (map , char , index) => {
         let existPost = index>smallestIndex;
         map[char] = existPost;
         return map;
     } , {});
}


function getSmallestCharIndex(chars){
    let smallestChar = 'z';
    return chars.reduce( (smallestIndex , char , index) => {
        let isCharSmaller = char < smallestChar;
        if(isCharSmaller){smallestChar = char};
        return isCharSmaller ? index : smallestIndex;        
    }, -1);
}