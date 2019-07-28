/*
    Source: https://www.interviewbit.com/problems/largest-number/
    Asked in: Goggle, Amazon , Goldman Sachs


*/


//Approach: We're joining a sorted array as per the custom logic of comparing prefilled eqilength values.
const largestNumber = (arr) => {

    const maxCharLength = arr.reduce( (acc , val) => {
        const len = (val+'').length;
        return len > acc ? len : acc;
    } , -Infinity);

    return arr.sort( (a,b) => {

        const [ aNewVal , bNewVal ] = [a , b].map( val => {
            const fills = maxCharLength - (val+'').length;
            return val+Array(fills).fill('0').join('');
        });

        if(bNewVal === aNewVal){
            return (b+'').length < (a+'').length ? 1 : -1;
        }

        return bNewVal>aNewVal ? 1 : -1;

    }).join('');
}

const inputArray = [3, 30, 34, 5, 9];
const output = largestNumber(inputArray);
console.log('Answer : ' , output);