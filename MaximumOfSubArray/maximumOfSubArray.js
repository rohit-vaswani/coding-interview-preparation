/*

    Source: https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/
    Asked in: TODO_CO_GOOGLE
    Approach: Sliding window problem
    Can be seen: GMAIL (Daily Coding Problem: Problem #18 [Hard])
    Difficulty: TODO_DI_HARD

*/


let arr =   [ 10, 5, 2, 7, 8, 7];
let k = 3;
let answer = getMaxArray(arr, k);

function getMaxArray(arr , k){

    let len = arr.length;
    let low = 0, high = 0;

    while(low!=(len-k+1)){

        let isWindowPerfect = (high-low+1) === k;
        let shouldExpand = (high-low)<k;        
        
        if(isWindowPerfect){
            let slicedArray = arr.slice( low , high+1);
            console.log( Math.max.apply( Math , slicedArray ) );//TODO_PENDING: I have to do this with maxHeapify, but not able to do that.
        }

        shouldExpand ? high++ : low++;

    }

}

function maxHeapify(arr , index , max){


    while(index<max){

        let parent = index;
        let leftChild = 2*parent+1;
        let rightChild = leftChild+1;

        if(leftChild<max && arr[leftChild]>arr[parent]){
            index = leftChild;
        }
        if(rightChild<max && arr[rightChild]>arr[parent]){
            index = rightChild;
        }

        if(parent === index){break}

        swap(arr , index , parent);
        index = parent;

    }

}

function swap(arr , sIndex , tIndex){
    let t = arr[sIndex];
    arr[sIndex] = arr[tIndex];
    arr[tIndex] = t;
}