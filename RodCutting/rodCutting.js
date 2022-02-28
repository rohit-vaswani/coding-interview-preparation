/*

    Source: https://www.geeksforgeeks.org/cutting-a-rod-dp-13/
    Approach: recusrive solution to a dynamic problem
    TODO_PENDING
    

*/



let price = [3 ,  5  ,  8 ,  9 , 10 , 17 , 17 , 20];
// let price = [2,5,7,8];
let len = 8;

let cost = maxCost(price , len);
console.log('Max cost : ' , cost);

function maxCost(price , len){

    if(len<=0){return 0};

    let maxVal = 0;
    let i = 0;
    let priceLen = price.length;
    for(i=0; i<priceLen; i++){
        maxVal = Math.max(maxVal , price[i] + maxCost(price, len-i-1));//TODO_TAKEAWAY: Dynamic programming - A truly recursive approach
    }

    return maxVal;

}



/*
    maxPrice(8) :  MaxOf
     -> price(1) + maxPrice(7)
     -> price(2) + maxPrice(6)
     -> 

*/
 


function getMaxPrice(len , price){

    if(len<=0){return 0};
    let maxPrice = 0;
    
    for(let i=1;i<len;i++){
        maxPrice = Math.max(maxPrice , price[i] + getMaxPrice(len-i-1 , price));
    }

    return maxPrice;

}