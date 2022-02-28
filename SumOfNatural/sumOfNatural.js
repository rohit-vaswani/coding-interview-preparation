

/*

    Source: https://projecteuler.net/problem=1
    Asked in: Dummy Google question
    TODO_TAKEAWAY: Such a crisp code and a great functional way of writing the code with functional paradign ES6.

*/

let getNumberUpto = no => [...new Array(no)].map( (_,i) => i );
let isNumberDivisbleBy = (no = 0, divisibleBys = []) => divisibleBys.some( divisibleBy => ! (no%divisibleBy) );
let sumOfNatural = (number, divisbleBy) => getNumberUpto(number).reduce( (sum , no) => sum += isNumberDivisbleBy(no , divisbleBy) ? no : 0, 0);

const output = sumOfNatural(1000 , [3,5]);
console.log(output);