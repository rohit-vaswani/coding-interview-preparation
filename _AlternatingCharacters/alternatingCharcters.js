/*
    Source: https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings


*/


function getAlternatingChars(inputStr){
    return [ ...inputStr].filter( (val,ind , arr) => val!=arr[ind+1] ).join('');
}

var input = 'AABABBB';
var output = getAlternatingChars(input);
console.log(output);