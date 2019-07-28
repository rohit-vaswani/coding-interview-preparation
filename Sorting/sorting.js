/*

    Source: https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5
    Type: Inserion Sort
    Complexity: 
        1. Worst and avg. case: O(n^2)
        2. Best case: O(n)

*/


// let a = [ 30 , 20 , 28 , 12 , 7 , 4 , 1 ];
// let output = insertionSorting(a);
// console.log('Output : Sorted array : ' , output);

// function insertionSorting(arr){

//     let len = arr.length, i , j, value ;

//     for( i=0; i<len; i++ ){
//         value = arr[i];
//         for( j=i-1; j>-1 && arr[j]>value; j--){
//             arr[j+1] = arr[j];
//         }
//         arr[j+1] = value;
//     }

//     return arr;

// }


/*

    Source: https://brilliant.org/wiki/quick-sort/
    Type: Quick Sort


*/


// const arr = [ 30 , 20 , 28 , 12 , 7 , 4 , 1 ];
// const output = quickSort(arr);
// console.log(output);

// function quickSort(arr){

//     //Divide
//     let pivot = arr[0];
//     let less = [], more = [];
//     let pivotList = [];

//     //Base condition
//     if(arr.length<=1){return arr};

//     //Conquer
//     arr.forEach(element => {
//         if(element<pivot){less.push(element)}
//         else if(element>pivot){more.push(element)}
//         else{pivotList.push(element)};
//     });

//     //Combine
//     return [...quickSort(less) , pivotList , ...quickSort(more)].flat(Infinity);

// }


/*

    Source: https://medium.com/basecs/heapify-all-the-things-with-heap-sort-55ee1c93af82
    Type: Heap Sort
    Approach:
        1. Transform an unsorted array into max heap data format. Can be done through `buildMaxHeap`
        2. Step 1 ensures that the value of each parent node is always greater than it's child node. Also, the root node has the largest value.
        3. Swap root node with the last value.
        4. Heapify the tree again till be remain with the one node which is the first element of an array.
        
*/


const sourceArr = [ 30 , 20 , 28 , 12 , 7 , 4 , 1 ];;
const heapSortedArray = performHeapSort(sourceArr);
console.log( 'Output : Sorted array : ' , heapSortedArray );

function performHeapSort(arr){

    //Build max heap
    buildMaxHeap(arr);

    let lastElem = arr.length - 1;

    while(lastElem>=0){

        swap(arr , 0 , lastElem);

        heapify(arr , 0 , lastElem);

        lastElem--;
    }

    return arr;

}

function buildMaxHeap(arr){

    let len = arr.length;
    let index = len/2;//Parent is half of left child. Sufficient!
    index = Math.floor(index);

    //Build heap out of an array
    while(index>=0){
        heapify(arr , index , len);
        index--;
    }

}

function heapify(heap , i , max){


    while(i<max){

        let index = i;//parent
        let leftChild = 2*index;
        let rightChild = leftChild+1;

        //Check the bounds
        if(leftChild<max && heap[leftChild]>heap[index]){
            index = leftChild;
        }
        if(rightChild<max && heap[rightChild]>heap[index]){
            index = rightChild;
        }

        if(index === i){
            return;
        }

        swap(heap , i , index);

        i = index;

    }

}

function swap(arr , s , t){
    let temp = arr[s];
    arr[s] = arr[t];
    arr[t] = temp;
}