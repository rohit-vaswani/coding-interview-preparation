/*

    Source: https://www.youtube.com/watch?v=VX2oZkDJeGA
    Asked in: TODO_CO_GOOGLE
    Approach:
        a) Rabbit and tortoise approach
        b) Increment fast by 2 and slow by 1
        c) If pointers collide or may b fast<=slow, then there is a loop.
*/
//
// let arr = [ 1 , 2 ,  3 , 4 , 8 ];
// let hasCycle = isCyclePresent(arr);
// console.log('Output : Is Cycle : ' , hasCycle);
//
// function isCyclePresent(arr){
//
//
//     let hasCycle = false;
//     let fastPIndex = 0, slowPIndex = 0;
//     let timesPointerIncremented = 0;
//
//     while(fastPIndex >= 0){
//
//         if(fastPIndex === slowPIndex && fastPIndex!=0){
//             hasCycle = true;
//             break;
//         }
//
//         if(fastPIndex<=-1){
//             break;
//         }
//
//         if(timesPointerIncremented === 2){
//             timesPointerIncremented = 0;
//             slowPIndex++;
//         }
//
//         fastPIndex = arr[fastPIndex];
//         timesPointerIncremented++;
//
//     }
//
//     return hasCycle;
//
// }

/*
        Source: https://www.youtube.com/watch?v=VX2oZkDJeGA
        Solution link: https://www.youtube.com/watch?v=VX2oZkDJeGA
        Difficulty: TODO_DI_MEDIUM
        Algorithm: Rabbit and Hare approach (Two pointers problem)
        Company: TODO_CO_GOOGLE
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a) Does array represents it's indices
            b) Does negative or out of bounds index will not be present?
        TODO_TAKEAWAY:
            a) In Infinite Loop, there are three types of statements:
                 - break
                 - continue
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/




// [1,2,1,5]

const detectCycle = (arr = []) => {

    let p = 1
    let q = 0


    const isMet = () => p === q
    const isOutOfBounds = () => p < 0 || q < 0 || p >= arr.length || q >= arr.length

    while (true) {


        if (isMet()) {
            return true
        }

        if (isOutOfBounds()) {
            return false
        }

        //Increment p
        p = arr[p]
        console.log(`P at index: ${p}`)

        if (isMet()) {
            return true
        }

        if (isOutOfBounds()) {
            return false
        }

        p = arr[p]
        console.log(`P at index: ${p}`)
        q = arr[q]
        console.log(`Q at index: ${q}`)

    }
}


// let arr = [ 1 , 2 ,  3 , 4 , 8 ];
console.log('Output : Is Cycle : ' , detectCycle([1,2,1,4,5]));
// console.log('Output : Is Cycle present : ' , detectCycle([1,2,3,4,5]));

