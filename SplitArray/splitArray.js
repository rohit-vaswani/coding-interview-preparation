/*

    Source and Solve: https://www.geeksforgeeks.org/split-array-two-equal-sum-subarrays/
    Asked in: TODO_CO_FACEBOOK
    Difficulty: Medium
*/


function getSplittedArray(arr){


    let len = arr.length;
    let left = 0;
    let right = len - 1;
    let leftArray = [],
        rightArray = [];
    let leftSum = 0,
        rightSum = 0;


    while(left<right){

        let leftval = arr[left];
        let rightVal = arr[right];
        
        if(leftSum === rightSum && leftSum!=0){
            break;
        }

        else if(leftSum<rightSum){
            leftArray.push(leftval);
            leftSum += leftval;
            left++;
        }

        else {
            rightArray.push(rightVal);
            rightSum += rightVal;
            right--;
        }
    
    }

    return [
        leftArray,
        rightArray
    ]

}

let input = [ 1 , 2 , 3 , 4 , 5 , 5  ];
let output = getSplittedArray(input);
console.log('Output : The two splitted array : '  , output);