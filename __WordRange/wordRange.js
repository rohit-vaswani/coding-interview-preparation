/*

    Source: https://leetcode.com/problems/word-ladder/

*/


let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot","dot","dog","lot","log","cog"]
let ladder = getLadderLength(beginWord , endWord , wordList);
console.log(ladder);

//helper function
let getDistance = (word1,word2) => [...word1].reduce( (diff , char, index) => char!=word2[index] ? diff++ : diff; , 0);


var getLadderLength = function(beginWord, endWord, wordList) {
    
    if(!wordList.includes(endWord)){return 0};
    let bucket = createDistanceBucket(wordList , endWord);
    let pathToReach = getPathToReach(bucket , endWord);
    return pathToReach.length;
    
};

function createDistanceBucket(wordList , endWord){
    
    return wordList.reduce( (bucket , word) => {
        let distance = getDistance(word , endWord);
        let bucketValue = bucket.has(distance) ? bucket.get(distance) : [];
        bucketValue.push(word);
        bucket.set(distance , bucketValue);
        return bucket;
    } , new Map()) ;
       
}


function getPathToReach(bucket){
    
    let size = bucket.size;
    let lastBucket = bucket[size-1];
    let lastBucketWord = lastBucket[0];
    let path = [lastBucketWord];
    let currentBucketValues = [];
    let prevBucketWord = '';
    for(let i = size-1 ; i>0 ; i--){
        currentBucketValues = bucket[i];
        prevBucketWord = bucket[i-1][0];
        let len = currentBucketValues.length;
        for(let j=0 ; j<len-1; j++){
              let dist = getDistance(currentBucketValues[j] , prevBucketWord);
              let adjDist = getDistance(currentBucketValues[j] , currentBucketValues[j+1]);
              if(dist<=1){
                  path.push(currentBucketValues[j]);
                  break;
              }
              adjDist<=1 && path.push(currentBucketValues[j]);
        }      
    }
    path.push(bucket[0][0]);
    return path;
}