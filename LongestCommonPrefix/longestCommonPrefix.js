/*

    Source: https://www.interviewbit.com/problems/longest-common-prefix/
    Approach: Recusrive
    Asked in: TODO_CO_Google

*/


const longestCommonPrefix = (input) => {

    return checkCommonPrefix(input , input[0] , 1);//TODO_TAKEAWAY: Have defined a recusrive function

    function checkCommonPrefix(input , refString , endIndex){
        
        let prefixToCheck = refString.slice(0 , endIndex);
        let prefixMatches = input.every( arr => arr.startsWith(prefixToCheck) );
        
        return prefixMatches ? 
            checkCommonPrefix(input , refString , endIndex+1) : 
            refString.slice(0 , endIndex-1);
    };
}

const input = ["abcdefgh" , "abefghijk" , "abcefgh"];
const output = longestCommonPrefix(input);
console.log(output);