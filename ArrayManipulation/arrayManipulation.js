
let getZeroIndex = (arr) => arr.indexOf(0);
let getNonZeroIndex = (arr , fromIndex) => arr.findIndex( (val , i) => i>fromIndex && val!=0);

let arr = [0,1,2,0,3,0];
let output = getManipulatedArray(arr);
console.log('OUTPUT : Shifted Array' , output);

function getManipulatedArray(arr){

    let zeroIndex , nonZeroIndex;
    do{
        zeroIndex = getZeroIndex(arr);
        nonZeroIndex = getNonZeroIndex(arr , zeroIndex);
        nonZeroIndex!=-1 && swap(arr , zeroIndex , nonZeroIndex);
    }
    while(nonZeroIndex!=-1);

    return arr;

}

function swap(arr , s , t){
    let temp = arr[s];
    arr[s] = arr[t];
    arr[t] = temp;
}