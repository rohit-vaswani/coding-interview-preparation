/*

    Source: https://www.youtube.com/watch?v=VX2oZkDJeGA
    Asked in: TODO_CO_GOOGLE
    Approach: 
        a) Rabbit and tortoise approach
        b) Increment fast by 2 and slow by 1
        c) If pointers collide or may b fast<=slow, then there is a loop.
*/

let arr = [ 1 , 2 ,  3 , 4 , 8 ];
let hasCycle = isCyclePresent(arr);
console.log('Output : Is Cycle : ' , hasCycle);

function isCyclePresent(arr){


    let hasCycle = false;
    let fastPIndex = 0, slowPIndex = 0;
    let timesPointerIncremented = 0;

    while(fastPIndex >= 0){

        if(fastPIndex === slowPIndex && fastPIndex!=0){
            hasCycle = true;
            break;
        }

        if(fastPIndex<=-1){
            break;
        }

        if(timesPointerIncremented === 2){
            timesPointerIncremented = 0;
            slowPIndex++;
        }

        fastPIndex = arr[fastPIndex];
        timesPointerIncremented++;

    }

    return hasCycle;

}