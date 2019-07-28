/*

    Problem statement: https://www.geeksforgeeks.org/maximum-sum-such-that-no-two-elements-are-adjacent/
    DIfficulty: Medium?
    Time complexity 2: O(log n)?
*/


//Approach1
const maxSubSequence = function(inputArr){
    
    let sortedArray = [...inputArr];
    sortedArray = sortedArray.sort( (b , a ) => (a-b));//[ 10 , 7 , 5 , 3 , 2 ]
    let indexesMap = getIndexes(inputArr);
    let indicesCaptured = {} , currentIndex;

    let finalAnswer = sortedArray.reduce( (acc , val) => {
        currentIndex = indexesMap[val].splice(0 , 1)[0];
        if(indicesCaptured[currentIndex+1] || indicesCaptured[currentIndex-1]){return acc};
        acc.push(val)
        indicesCaptured[currentIndex] = 1;
        return acc;
    } , []); 

    return finalAnswer.reduce( (acc , val) => acc+val );

}

function getIndexes(inputArr){
    return inputArr.reduce( (acc , elem , index) => {
        acc[elem] = acc[elem] || [];
        acc[elem].push(index);
        return acc;
    } , {} );
}

const inputArray = [3 , 2 ,  5 , 10 , 7];
// const inputArray = [5, 5, 10, 100, 10, 5]
const answer = maxSubSequence(inputArray);
console.log(answer);




//Appraoch 2
const maxSubSequence2 = function(inputArr){

    let oddSum = 0, evenSum = 0 , i=0;
    while(i<=inputArr.length){
        evenSum += inputArr[i] || 0;
        oddSum += inputArr[++i] || 0;
        i++;
    }
    return Math.max(oddSum , evenSum);

}

const inputArray2 = [3 , 2 ,  5 , 10 , 7];
// const inputArray2 = [5, 5, 10, 100, 10, 5]
const answer2 = maxSubSequence2(inputArray2);
console.log(answer2);

/*

    Input1: 3 2 5 10 7


        {
            10:[ 3 ],
            7: [ 4 ]
            5: [ 2 ]
            3: [ 0 ],
            2: [ 1 ],
        }

    10 3 = 13

    Input2: 5, 5, 10, 100, 10, 5
    

        {
            100: [ 3 ],
            10: [2 , 4],
            5: [0 , 1 , 5]
        }

    100 5 5 = 110
    

*/