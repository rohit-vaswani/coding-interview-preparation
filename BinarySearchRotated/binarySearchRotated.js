/*


    


*/


//Pass1
low=0,high=10,pivot=5

function performBinarySearch(arr , target){


    let low = 0, high = arr.length-1,pivot;

    while(high!=low || high<low){

        pivot = (low+high)/2;
        pivot = Math.floor(pivot);
        let lowVal = arr[low];
        let highVal = arr[high];
        let pivotVal = arr[pivot];

        let isLowSorted = lowVal<pivotVal;
        if(pivotVal === target){return true};
        if(low===pivot){return false};

        if(isLowSorted){
            if(target<pivotVal && target>lowVal){
                high = pivot;
            }else{
                low = pivot;
            }
        }
        else{
            if(target>pivotVal && target<highVal){
                low = pivot;
            }else{
                high = pivot;
            }        
        }


    }

    return false;

}


let arr = [ 15 , 16 , 18 , 19 , 1 , 2 , 3 , 6  , 8 , 9 , 10 , 12];
let output = performBinarySearch(arr , 9);
console.log('Output : ' , output);


