/*

    Source: https://www.geeksforgeeks.org/count-ways-reach-nth-stair/
    Asked in: TODO_CO_AMAZON
    Approach: Dynamic programming
    Implementation: Recursive solution

*/




// function getSteps(n , m){

//     if(n<=1){return n};

//     let val = m.reduce( (totalSteps , step) => {
//         totalSteps +=  ( (n-step)>=0 ? getSteps(n-step , m) : 0);
//         return totalSteps;
//     } , 0 );

//     return val;

// }


// let toReachStepNo = 4;
// let possibleSteps = [1,2];
// const totoalSteps = getSteps( toReachStepNo+1 , possibleSteps );
// console.log('Total Steps : ' , totoalSteps);

/*Iteration for 5th steps to reach using [1,2] steps
4 [ 1 ] 
    -> [ 1 , 1 ]
        -> [ 1 , 1 , 1 ]
            -> [ 1 , 1 , 1 , 1]*
        -> [ 2 , 1 , 1 ]*
    -> [ 2 , 1 ]
        -> [ 1 , 2 , 1 ]*
4 [ 2 ]
    -> [ 1 , 2 ]
        -> [ 1 , 1 , 2 ]*
    -> [ 2 , 2 ]*
*/