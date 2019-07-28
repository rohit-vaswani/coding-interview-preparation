/*
    Source: https://www.youtube.com/watch?v=uQdy914JRKQ
    Solve: https://www.youtube.com/watch?v=uQdy914JRKQ
    Asked in: TODO_CO_GOOGLE


*/


let input = [1,2,3,4];
let add = 1;
let answer = performAddition(input , add);
console.log('The answer : ' , answer);

function performAddition(inputArr , valToAdd , index){

    index = index===undefined ? inputArr.length-1 : index;
    let val = inputArr[index];
    let sum = val + valToAdd;
    
    if(index === -1){
        inputArr.unshift(valToAdd);
        return inputArr;
    }

    if(sum<=9){
        inputArr[index] = sum;
        return inputArr;
    }

    let [ carry , toAdd ] = [...String(sum)].map(val => parseInt(val));
    inputArr[index] = toAdd;

    return performAddition(inputArr , carry , index-1);

}
