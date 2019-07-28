

//Approach: using Bubble k times
const getKLargest = (arr , k) => {

    let currentElem , targetElem;
    const { length : len } = a;
    for(let i=0; i<k;i ++){
        
        currentElem = arr[i];

        for(let m=(i+1); m<len; m++){
            targetElem = a[m];
            if(targetElem>currentElem){
                swap(a , i , m);
            }
        }

    }

    console.log(arr.slice(0 , k));



}

const inputArray = [1, 23, 12, 9, 30, 2, 50];
getKLargest(inputArray);


/*

TODO_LEARNING:
1. To use the bubble sort

*/