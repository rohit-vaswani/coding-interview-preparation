var getMaxProfit = function(profits){

    let buckets = getBuckets(profits);
    const maxBucketKey = getMaxRange(buckets);
    console.log(buckets[maxBucketKey]);

}

function getBuckets(profits){

    
    return profits.reduce( (valueMap , profit) => {
       
        if(!profit){return valueMap;}

        let eligibleKey = Object.keys(valueMap).find( lowestKey => lowestKey!=0 && !(profit%lowestKey));
        valueMap[profit] = valueMap[eligibleKey] || [];
        valueMap[profit].push(profit);
        eligibleKey!=undefined && delete valueMap[eligibleKey];
        return valueMap;

    }, {});

}

function getMaxRange(buckets){
    let maxBucketvalue = -Infinity;
    let maxBucketKey = -1;
    Object.keys(buckets).forEach( bucketKey => {
        const bucketValues = buckets[bucketKey];
        const sum = bucketValues.reduce( (acc , val) => acc+val);
        if(sum>maxBucketvalue){
            maxBucketKey =  bucketKey;
            maxBucketvalue = sum;
        }
    });
    return maxBucketKey;
}


getMaxProfit([1,0,-1,80,160,0,200]);