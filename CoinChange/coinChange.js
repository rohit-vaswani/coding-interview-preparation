
/*

    Source: https://leetcode.com/problems/coin-change/
    Asked in: TODO_CO_?
    Difficulty: TODO_DI_MEDIUM

*/


/*

    11
        -> 5 + minSteps(6)
        -> 5 + 5 + minnSteps(1)
        -> 5 + 5 + 1 = 3

*/

let coins = [1, 2, 5];
let amount = 11;
// let coins = [2];
// let amount = 3;
let minCoins = getMinCoins(coins , amount);
console.log('Output : Min Coins : ' , minCoins);

function getMinCoins(coins , amount){

    coins = coins.sort( (a,b) => b-a );
    return getMinCoinsRec(coins , amount);

}

function getMinCoinsRec(coins , amount){

    let len = coins.length;
    let i , denomination;
    let times = Infinity;

    //Base conditions
    if(amount<=-1){return -1};
    if(amount === 0){return 0};

    for( i = len - 1 ;i>=0 ; i-- ){
        denomination = coins[i];
        let diffAmount = amount - denomination;
        let subTimes = getMinCoinsRec(coins , diffAmount);
        times = subTimes!=-1 ? Math.min( times , (1 + subTimes) ) : times;
    }

    times = times === Infinity ? -1 : times;
    return times;

}