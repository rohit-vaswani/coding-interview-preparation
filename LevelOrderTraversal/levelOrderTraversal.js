
/*

    Source: https://leetcode.com/problems/binary-tree-level-order-traversal/
    Difficulty: Medium


*/



const levelOrderTraversal = (inputArray) => {

    let multiplier = 2;
    let startIndex = 0;
    let lastIndex = 1;
    let lastValue = 1;
    let output = [];
    let slicedArray = [];
    
    while(true){
        
        slicedArray = inputArray.slice(startIndex , lastIndex).filter( val => !!val );//TODO_LEARNING: Keep it simple as startIndex and lastIndex
        if(!slicedArray.length){return output};

        output.push(slicedArray);
        startIndex = lastIndex;
        lastValue *= multiplier;
        lastIndex += lastValue;
    }

}

const input = [3,9,20,null,null,15,7,6,8,6,2,4,9,1,2,8];
const output = levelOrderTraversal(input);
console.log(output);