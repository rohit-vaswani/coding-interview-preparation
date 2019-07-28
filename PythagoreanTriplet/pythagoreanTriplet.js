/*

    Problem statement: https://www.geeksforgeeks.org/find-pythagorean-triplet-in-an-unsorted-array/
    Asked for: Amazon
    Time complexity: O(n*n)?


*/

//Approach: Sorting
const pythagoreanTriplet = (input) => {

    let diff , currentVal, isDiffPresent, answer , targetVal;

    input = [...input];
    const sortedArray = input.sort( (a , b) => b - a );
    const squaredArray = sortedArray.map( val => val*val );
    const valueMap = squaredArray.reduce( (acc , val) => {acc[val] = 1; return acc} , {});
    const len  = squaredArray.length;

    for(let ind = 0; ind < len ; ind ++){
        
        targetVal = squaredArray[ind];

        for( let k = ind + 1; k < len ; k++ ){
            currentVal = squaredArray[k];
            diff = targetVal - currentVal;
            isDiffPresent = !!valueMap[diff];//TODO_LEARNING: Lookup using Map DS. (And not an array)
            //TODO_LEARNING: We are doing lookup for the required value instead of searching with 3rd level of iteration
            if(isDiffPresent){ 
                answer = [  diff , currentVal , targetVal ];
                break;
            }
        }

        if(isDiffPresent){
            break;
        }

    };

    return !!answer;

}


const input = [3, 1, 4, 6, 5];
// const input = [10, 4, 6, 12, 5];
const output = pythagoreanTriplet(input);
console.log(output);