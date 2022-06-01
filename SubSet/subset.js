/*
    TODO_PENDING: https://leetcode.com/problems/combination-sum/discuss/16502/A-general-approach-to-backtracking-questions-in-Java-(Subsets-Permutations-Combination-Sum-Palindrome-Partitioning)
    Ref: https://stackoverflow.com/questions/42773836/how-to-find-all-subsets-of-a-set-in-javascript
    Problem statement: https://leetcode.com/problems/subsets/

*/


// TODO_REMEMBER: TO find all the subset combination of the given array.
const getAllSubsets =  theArray => theArray.reduce( (subsets, value) => {
    return subsets.concat(subsets.map(set => [value, ...set]))
}, [[]] );

const output = getAllSubsets([1,2,3]);
console.log(output);