/*
        Source: https://leetcode.com/problems/coin-change/
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) For recursive function, always think of a base case and non-base-case
            b) For non-base, always make yourself fool that recursive function will return the proper value
            c) Then how the aggregation of sub-solution will be performed (Min of all sub-solution?)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/


/*

    11
        -> 5 + minSteps(6)
        -> 5 + 5 + minnSteps(1)
        -> 5 + 5 + 1 = 3

*/

let coins = [1, 2, 5];
let amount = 11;
let minCoins = getMinCoins(coins, amount);
console.log('Output : Min Coins : ', minCoins);

function getMinCoins(coins , amount){

    coins = coins.sort( (a,b) => b-a );
    return coinChange(coins , amount);

}
function coinChange(coins, amount) {

    let times = Infinity

    if (amount < 0) {
        return -1
    }
    if (amount === 0) {
        return 0
    }

    for (let i = coins.length - 1; i >= 0; i--) {
        let denomination = coins[i]
        let targetAmount = amount - denomination
        const subTimes = coinChange(coins, targetAmount)
        times = subTimes !== -1 ? Math.min(times, 1 + subTimes) : times
    }

    return times

}



let coins = [1, 2, 5];
let amount = 10;
let minCoins = getMinCoins(coins, amount);
console.log('Output : Min Coins : ', minCoins);