
/*

    Source: https://www.geeksforgeeks.org/lexicographic-permutations-of-string/
    Asked in: Amazon to me personally
    Difficult level: Medium


*/


let getOutOfOrderIndex = (chars) => {

    let lastChar = 'A';
    return chars.findIndex( char => {
        if(char>lastChar){lastChar = char;return false};
        return true;
    } );

}

let getInOrderChar = (outOfOrderChar , remainingChars) => {
    return remainingChars.reduce ( (nextPossChar , char) => (char < nextPossChar && char>outOfOrderChar) ? char : nextPossChar ,  remainingChars[0]);
}

let getAscRemainingChars = (outOfOrderChar , remainingChars , nextInOrderChar) => {
    let targetArray = remainingChars.filter(char => char!=nextInOrderChar)
    targetArray.push(outOfOrderChar);
    return targetArray.sort( (b,a) => a<b?-1 : 1 );
}


//TODO_TAKEAWAY: Think about the driver function with an example to make it easy to understand
function getNextPermutation(word){

    let chars = [...word];
    let outOfOrderIndex = getOutOfOrderIndex(chars);//1
    let initialChars = chars.slice(0,outOfOrderIndex);//[S]
    let remainingChars = chars.slice(outOfOrderIndex+1);//[T,R,O]
    let outOfOrderChar = chars[outOfOrderIndex];//P
    let nextInOrderChar = getInOrderChar(outOfOrderChar , remainingChars);//R
    let ascRemComb = getAscRemainingChars(outOfOrderChar , remainingChars , nextInOrderChar);//[T,P,O]
    return [...initialChars , nextInOrderChar , ...ascRemComb];//[S , R , T , P ,O]

} 


const word = 'SPTRO';
const nextPermutation = getNextPermutation(word);
console.log('Output : ' , nextPermutation);