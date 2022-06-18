/*
        Source: https://leetcode.com/problems/jump-game/
        Solution link: OWN
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: TODO_DS_RECURSION
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: YES
        Solved: June, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Aggregation condition can be determined from the return type of the function.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


// [2,3,1,1,4]
const canJump = (nums, index = 0) => {

    // Base condition
    if(index >= nums.length - 1) {
        return true
    }

    if(nums[index] === 0) {
        return false
    }


    // Non base condition
    const maxJump = nums[index]
    for(let i=1;i<=maxJump;i++) {
        const currentIndex = index + i

        // Aggregation Condition
        if(canJump(nums, currentIndex)) {
            return true
        }
    }

    return false
}

// console.log(canJump([2,3,1,1,4]))
console.log(canJump([3,2,1,0,4]))
