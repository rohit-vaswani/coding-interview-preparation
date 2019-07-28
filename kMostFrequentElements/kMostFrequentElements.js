/*
    Source: https://www.youtube.com/watch?v=EYFcQRwcqk0
    Solve: https://www.youtube.com/watch?v=EYFcQRwcqk0
    Asked in: TODO_CO_FACEBOOK
    Time Complexity: O(n)
*/

let arr = [1, 6, 2, 1, 6, 1, 6, 1];
let k = 2;
let freqElements = getFreqElem(arr, k);
console.log(`First ${k} elements : ` , freqElements );

function getFreqElem(arr, k) {

    let freqMap = generateFreqMap(arr);
    let bucket = createBucket(freqMap);
    return getFirstKElements(bucket, k);

}


function generateFreqMap(arr) {

    return arr.reduce((map, val) => {
        let _freq = map.has(val) ? map.get(val) : 0;
        map.set(val, (_freq + 1));
        return map;
    }, new Map());
}

function createBucket(freqMap) {
    return [...freqMap.keys()].reduce((bucket, elem) => {
        let freq = freqMap.get(elem);
        bucket[freq] = bucket[freq] || [];
        bucket[freq].push(elem);
        return bucket;
    }, []);
}

function getFirstKElements(bucket, k) {

    let count = k;
    let i = bucket.length - 1;
    let answer = [];

    while (count) {
        let bucketElems = bucket[i--];
        if (!bucketElems) {continue};
        answer = answer.concat(bucketElems);
        count -= bucketElems.length;
    }

    return answer;
}