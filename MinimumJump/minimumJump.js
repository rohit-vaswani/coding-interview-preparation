/*

    Source: https://www.interviewbit.com/problems/min-jumps-array/
    Asked in: TODO_CO_Google
    Solution: https://www.youtube.com/watch?v=cETfFsSTGJI
    TODO_PENDING: This is probably not working as expected. Infinute loop.

*/

function jump(arr){

    let jumpsDone = 0;
    let currentIndex = 0,
        maxValue,
        len = arr.length;  
    
    let getMaxValue = (arr , sIndex) => arr.slice( sIndex , sIndex + arr[sIndex] ).reduce( (acc , val , index) => val>acc ? index : acc , -1);
    
    while(true){
        jumpsDone++;
        maxValue = getMaxValue( arr , currentIndex );
        currentIndex += maxValue;
        if(currentIndex>=len-1){break};
    }

    return jumpsDone;


}

const input = [2,3,1,1,4];
const output = jump(input);
console.log('Output : Min Jump : ' , output);