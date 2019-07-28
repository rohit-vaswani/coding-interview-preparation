/*

    Source: https://www.geeksforgeeks.org/trapping-rain-water/ and https://www.interviewbit.com/problems/rain-water-trapped/
    Difficulty: TODO_DI_HARD
    Asked in: ?
    Approach: The amount of water that can be trapped at i,
        left[i]  -> Represents the length of the nearest highest wall on the left including itself
        right[i] -> Represents the length of the nearest highest wall on the right side including itself
        arr[i]   -> Represent the height of itself
        = Math.min(left[i] , right[i]) - arr[i]

*/

function getTrappedWater(arr){

    let leftHeight = getMaxWallHeightOnASide(arr);//[3,3,3,3,3,4]
    let rightHeight = getMaxWallHeightOnASide(arr.reverse()).reverse();//[4,4,4,4,4]
 
    return arr.reduce( (totalTrappedWater , height , i) => {

        let lHeight = leftHeight[i];
        let rHeight = rightHeight[i];
        let minheight = Math.min(lHeight , rHeight);
        let currentWallWater = (minheight-height);
        totalTrappedWater += currentWallWater;
        return totalTrappedWater;

    } , 0 );

}


function getMaxWallHeightOnASide(heights){
    let maxHeight = -Infinity;
    return heights.map( height => {
        maxHeight = height>maxHeight ? height : maxHeight;
        return maxHeight;
    });
}