/*
    Source: https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
    Difficulty: medium
    

*/


function sherlockValidString(inputStr){

    if(typeof inputStr !== 'string'){return 'NO'};

    const answerMap = Array.from(inputStr).reduce(  (acc , val , index ) => {

        acc.data[val] = acc.data[val] || 0;
        acc.data[val]++;

        acc.max = acc.data[val] > acc.max ? acc.data[val] : acc.max ;
        acc.min = acc.data[val] < acc.min ? acc.data[val] : acc.min ;

        return acc;

    } , {
        data:{},
        min: Infinity,
        max: -Infinity
    })


    answerMap.min = Object.keys(answerMap.data).reduce( (acc , char) => {
        let occurence = answerMap.data[char];
        return acc = occurence<acc ? occurence : acc;
    } , Infinity);

    return (answerMap.max-answerMap.min)<=1 ? 'YES' : 'NO';

}

var input = 'aabbcd';
var output = sherlockValidString(input);
console.log(output);