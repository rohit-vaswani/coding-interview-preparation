const findPairs = function (nums, k) {

    const s = new Set(nums)
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        s.has(nums[i] - k) && count++
        s.has(nums[i] + k) && count++
    }

    return count / 2

};

console.log(findPairs([3, 1, 4, 1, 5], 2))
console.log(findPairs([1, 2, 3, 4, 5], 1))