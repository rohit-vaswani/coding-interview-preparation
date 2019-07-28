/*

    Source: https://leetcode.com/problems/count-of-smaller-numbers-after-self/
    Difficulty: Hard
    Status: 14 of 16 TC passed.

*/


const smallerNumber = (input) => {

    let map = {};

    input.forEach(val => {
        updateMapFrequency(val);
        map[val] = 0;
    });

    return input.map( val => map[val] );

    function updateMapFrequency(inputVal){
        Object.keys(map).forEach( key => {
            if(key<inputVal){return};
            map[key]++;
        });

    }

}


const input = [5,2,6,1];
const output = smallerNumber(input);
console.log(output);
