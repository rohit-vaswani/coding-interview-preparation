
/*
        Source: https://leetcode.com/problems/maximum-gap/
        Solution: https://leetcode.com/problems/maximum-gap/discuss/50643/bucket-sort-JAVA-solution-with-explanation-O(N)-time-and-space
        Difficulty: TODO_DI_HARD
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: YES
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


//Approach1: Bucket Sort
let arr = [3,6,9,15,1];
let maxGap = getMaxGap(arr);
console.log('Output : Max-gap : ' , maxGap);

function getMaxGap(arr){


    let maxGap = 0;
    if(!arr || arr.length<2){return maxGap};

    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let len = arr.length;
    let gap = Math.ceil((max-min)/(len-1));

    let MIN_VALUE = -Infinity;
    let MAX_VALUE = Infinity
    let MAX_BUCKET = [...new Array(len)].fill(MIN_VALUE);
    let MIN_BUCKET = [...new Array(len)].fill(MAX_VALUE);

    //Put the elemnents in a right Bucket
    arr.forEach(element => {
        let bucketIndex = Math.floor((element - min)/gap);
        MAX_BUCKET[bucketIndex] = Math.max(MAX_BUCKET[bucketIndex] , element);
        MIN_BUCKET[bucketIndex] = Math.min(MIN_BUCKET[bucketIndex] , element);
    });

    for(let i=1;i<len;i++){
        if(MIN_BUCKET[i]!=MAX_VALUE && MAX_BUCKET[i-1]!=MIN_VALUE){
            gap = Math.max(gap , MIN_BUCKET[i] - MAX_BUCKET[i-1]);
        }
    }

    return gap;

}


//Approach2: Maintaining some DS to know it's prev and next element
// {
//     3:[1,6],
//     6:[3,9],
//     9:[6, undefined],
//     1:[undefined,3]
// }