/*
    Source: https://leetcode.com/problems/maximum-depth-of-binary-tree/
    Solution: https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/
    Difficulty: TODO_DI_EASY

*/


let arr = [3,9,20,null,null,15,7];
let depth = getDepth(arr , 0);
console.log('Depth : ' , depth);

function getDepth(arr , parentIndex){

    let len = arr.length;
    let leftChildIndex = 2*parentIndex + 1;
    let rightChildIndex = leftChildIndex + 1;

    //Base condition
    if(parentIndex>len || !arr[parentIndex]){return 0};

    //Recurstion and Aggregation
    return 1 + Math.max(
        getDepth(arr , leftChildIndex),
        getDepth(arr , rightChildIndex)
    )

}


/*

    Source: https://leetcode.com/problems/balanced-binary-tree/
    Solution: https://www.youtube.com/watch?v=qIdVVH1tKM4
    Difficulty: TODO_DI_EASY
*/

let arr1 = [1,2,2,3,3,null,null,4,4];
let isBalanced = isheightBalancedBinaryTree(arr1 , 0);
console.log('Is balanced : ' , isBalanced);
function isheightBalancedBinaryTree(arr , parentIndex){

    let len = arr.length;
    let leftChildIndex = 2*parentIndex + 1;
    let rightChildIndex = leftChildIndex + 1;

    let leftDepth = leftChildIndex<len ? getDepth(arr , leftChildIndex) : 0;
    let rightDepth = rightChildIndex<len ? getDepth(arr , rightChildIndex) : 0;

    let difference = Math.abs(rightDepth - leftDepth);
    return difference<=1;

}