
/*
    source: https://www.interviewbit.com/problems/max-sum-contiguous-subarray/
    TODO_LEARNING_IMP:
        a) For an approach having time complexity of 0(n^3), we will be finding all the combinations (different sizes) and consider the highest one. - //Brute force approach.
        b) Optimized approach to be checked

*/

//Complexity: O(n^2)
//Approach: Brute forrce approach in an optimized way(Sum calculation)
function maxSubArray(arr){


    const len = arr.length;
    let i,j,sum = 0,  maxSum = -Infinity, comb = [];

    for(i = 0 ; i<len ; i++){
        
        j = i+1, 
        sum = arr[i] , 
        currentComb = [ arr[i] ];

        while(j<len){

            sum += arr[j];//TODO_TAKEAWAY: You can just add A[j] to the sum you have already calculated in the previous loop from i to j-1. This will reduce the complexity from o(n^3) to o(n^2)
            currentComb.push(arr[j]);

            if(sum > maxSum){
                maxSum = sum;
                comb = [...currentComb];
            }

            j++;
        }

    }

    return comb;

}


//Complexity: O(n)
//Approach: Keeping on adding. Stop when ans<0. Consider when tempSum>ans
function maxSubArrayOptimized(arr){


    const len = arr.length;
    let i;
    let ans = -Infinity, tempSum = 0;

    for(i = 0 ; i<len ; i++){
        
        val = arr[i];
        tempSum += val;
    
        if(tempSum<0){
            tempSum = 0;
        }
        if(tempSum>ans){
            ans = tempSum;
        }

    }

    return ans;

}


const input = [-2,1,-3,-6,4,-9,14,-1,2,1,-5,8];
// const output = maxSubArray(input);
const output = maxSubArrayOptimized(input);
console.log('Answer :' , output);