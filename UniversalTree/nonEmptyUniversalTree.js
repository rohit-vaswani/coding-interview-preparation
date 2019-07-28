/*

    Source: CS Dojo Youtube channel
    Asked in: TODO_CO_Google
    TODO_LEARNING: One of the smart question that I encountered.
    Approach: Dynamic programming (Recursive)
    TODO_PENDING: Copy the link of the YT channel.

*/


let getUniversalTreeCount = (function(){

    let queue = [];

    function getUniversalTreeCount(tree){
    
        let rootNode = tree,
            universalTreeCounter = 0;
    
        queue.push(rootNode);
    
        while(rootNode){
    
            rootNode = queue.shift();

            let { left : leftNode , right : rightNode , value } = rootNode || {};
    
            leftNode && queue.push(leftNode);
            rightNode && queue.push(rightNode);
    
            if(rootNode && isUniversalTree(rootNode , value)) {
                console.log('Tree : ' , rootNode);
                universalTreeCounter++;
            }
    
        }
    
        return universalTreeCounter;
    
    
    }
    
    
    function isUniversalTree(rootNode = {} , value){
    
        //Define the base conditions first
        if(rootNode.value!==value){
            return false;
        }
    
        
        if(rootNode.left === undefined && rootNode.right === undefined){
            return true;
        }
    
        return isUniversalTree(rootNode.left , value) && isUniversalTree(rootNode.right , value);
    
    }


    return getUniversalTreeCount;


}).call(this);


const tree = {
    value: 0,
    left: {
        value: 1        
    },
    right:{
        value: 0,
        left:{
            value: 1,
            left:{
                value: 1
            },
            right:{
                value: 1
            }
        },
        right:{
            value: 0
        }
    }
};
const universalTreeCount = getUniversalTreeCount(tree);
console.log('Output : Universal_Count : ' , universalTreeCount);