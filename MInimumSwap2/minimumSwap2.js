/*

    Source: https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
    TODO_PENDING: Solved. (11 of 15 test cases failed)



*/


function getMimimumSwaps(arr){

    if(!arr.length){return 0;}


    var sourceIndex = 0;
    var targetIndex = 1;
    var times = 0;

    while( true ){
        console.log(arr);
        targetIndex = getTragetIndex();
        if(targetIndex === -1){return times};
        sourceIndex = getSourceIndex(targetIndex);
        swap(sourceIndex , targetIndex);
        times++;

    }


    function getTragetIndex(){

        var currentElem, nextElem;
        for(var i=arr.length-1;i>0;i--){
            currentElem = arr[i];
            nextElem = arr[i-1];
            if(currentElem<nextElem){return i;}
        }
        return -1;
    }

    function getSourceIndex(targetIndex){
        var targetValue = arr[targetIndex];
        const value = arr.slice(0,targetIndex).reduce( function(acc , currentValue) {
            return currentValue>acc ? currentValue : acc;
        } , targetValue);
        return arr.slice(0,targetIndex).indexOf(value);
    }

    function swap(sourceIndex , targetIndex){
        arr[sourceIndex] = arr[sourceIndex] + arr[targetIndex];
        arr[targetIndex] = arr[sourceIndex] - arr[targetIndex];
        arr[sourceIndex] = arr[sourceIndex] - arr[targetIndex];
        console.log('Swapping : ' , sourceIndex , ' with ' , targetIndex);
    }

}

var input = [2,3,4,1,5];//[7, 1, 3, 2, 4, 5, 6];
var output = getMimimumSwaps(input);
console.log(output);