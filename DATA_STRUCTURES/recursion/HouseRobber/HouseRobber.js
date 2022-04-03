/*

        Source: https://leetcode.com/problems/house-robber/
        Difficulty: TODO_DI_MEDIUM (Very Difficult to understand)
        Approach: Recursive / Recursion
        DataStructure: Map
        Solution: https://leetcode.com/problems/house-robber/discuss/156523/From-good-to-great.-How-to-approach-most-of-DP-problems.
        Detailed Approach: ?
        Asked in: ?
        Type: TODO_INTERESTING
        TODO_LEARNINGS
            1. Base condition always depends on the aggregation operation of the recursive call. (0 for Add, return by min/max)
            2. Does sub Problem exist for the given problem statement, go Recursive.
            3. Determine aggregation operations / Base conditions and non base conditions.
            4. Aggregation operation: Sum, Math.max, Math.min
            5. Base condition values: zero (add), 1 (multiply).
 */


function rob(nums, i) {
    if (i < 0) {
        return 0
    }
    return Math.max(rob(nums, i - 2) + nums[i], rob(nums, i - 1));
}

const nums = [2, 17, 9, 3, 21]
const output = rob(nums, nums.length - 1)
console.log(output)