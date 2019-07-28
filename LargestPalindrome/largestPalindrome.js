/*

    Source: https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/
    Methodology: Dynamic programming
    Complexity: O(n^2)
    Approach: Fix a centre and expand in both directions (Odd/Even length) for longer palindromes.
    TODO_PENDING: https://www.youtube.com/watch?v=lDYIvtBVmgo

*/


function findLargestPalindrome(str){


    let len = str.length;
    let oddLow,
        oddHigh,
        evenLow,
        evenHigh,
        oddPalindromeObj,
        evenPalindromeObj,
        maxLength = -1,
        maxStartIndex = -1, i;

    for(i = 1;i<len;i++){

        oddLow = i-1;
        oddHigh = i+1;
        oddPalindromeObj = getPalindrome( oddLow , oddHigh , str );

        evenLow = i-1;
        evenHigh = i;
        evenPalindromeObj = getPalindrome( evenLow , evenHigh , str );

        [ oddPalindromeObj , evenPalindromeObj ].forEach( palObj => {

            if(palObj.length<maxLength){return false};

            maxStartIndex = palObj.startIndex;
            maxLength = palObj.length;

        });
        
    }

    return str.slice( maxStartIndex + 1 , maxStartIndex + maxLength  );


}


function getPalindrome( low , high , str ){

    const isEqual = (lowVal , highVal) => lowVal === highVal

    if(!isEqual(str[low], str[high])){
        return {
            startIndex: -1,
            length: 0
        }
    }

    while(str[low] && isEqual(str[low], str[high])){
        low--;
        high++;
    }

    return {
        startIndex: low,
        length: high-low
    }

}


const input = 'forgeeksskeegfor';
const output = findLargestPalindrome(input);
console.log('Longest Palindrome : ' , output);