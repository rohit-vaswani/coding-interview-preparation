
/*
    Source: https://leetcode.com/problems/minimum-window-substring/
    Solve: https://www.youtube.com/watch?v=eS6PZLjoaq8
    Difficulty: Hard
    Complexity: O(n)
    Approach: Sliding window problem.
*/

let minWindowStr = (s , t) => {

    let uqId = -1;
    let answerMap = {};
    let targetArr = [...t];
    let targetMap = targetArr.reduce( (acc, val) => {
        acc[val] = 1;
        return acc;
    }, {} );

    [...s].forEach( (val , ind) => {
        
        if(!targetMap[val]){return};
        
        answerMap[++uqId] = {
            start: ind,
            end: undefined,
            chars: [val]
        }

        for(let i=0;i<uqId;i++){
            answerMap[i].chars.push(val);
            if(targetArr.length !== answerMap[i].chars.length){continue};
            answerMap[i].end = ind;
        }

    });

    let maxWindowLength = +Infinity;
    return Object.keys(answerMap).reduce( (acc , uqId) => {
        let answerObj = answerMap[uqId];
        let { start , end } = answerObj;
        if( (end-start) < maxWindowLength){
            acc = [...s].slice(start , end+1);
            maxWindowLength = (end-start);
        }
        return acc;
    });

}

/*Approach
 - Expand the window: (Right pointer forward) - When the target does not belong to sub array
 - Shrink the window: (Left pointer forward) - when the target is within the window and in the hope to find min subarray length
 */ 
const slidingWindowSol = (source , target) => {

    let leftPointer = 0, rightPointer = 0;
    let answer = Array(20).fill('').join(' ');
    const [sourceArr , targetArr] = [source , target].map( val => Array.from(val) );//TODO_LEARNING: Transformation in one go.
    const targetMap = targetArr.reduce( (acc , val) => {
        acc[val] = 1;
        return acc;
    } , {});
    const sourceLen = source.length;
    let hasTargetCharacters;
    let isTargetPreset = str => Object.keys(targetMap).every( targetKey => str.includes(targetKey));
    let subArrayLength, subArray;
    
    while(true){
        
        subArray = sourceArr.slice(leftPointer , rightPointer);
        hasTargetCharacters = isTargetPreset( subArray );//TODO_LEARNING: Always breakdown the functionality into the functions
        subArrayLength = subArray.length;

        if(rightPointer>sourceLen && !hasTargetCharacters){
            return answer.join('');
        }

        if(!hasTargetCharacters){
            rightPointer++;
            continue; 
        }

        if(subArrayLength<answer.length){
            answer = subArray;
        }
        leftPointer++;
        

    }
}

let source = 'ADOBECODEBANC';
let target = 'ABC';
// let output = minWindowStr(source , target);
let output = slidingWindowSol(source , target);
console.log('Answer: ' , output);//BANC