// let input = [4, 5, 2, 10, 8];
// const output = nearestSmallerElement(input);
// console.log('Output : ' , output);


// 1 -> [2,1,5,6,2,3]
// 2 -> [2] , [5,6,2,3] = 8
// 3 -> [5,6] , [3] => 6
// 4 -> [5,6] => 8
// 5 -> [5,6] => 10

/*

    TODO_SOURCE: https://www.interviewbit.com/problems/largest-rectangle-in-histogram/
    Asked in: TODO_CO_GOOGLE and TODO_CO_FACEBOOk
    Difficulty: TODO_DI_Hard
    Approach1: Starting from unitSize 1 - <max_height>, 
        1. we will find all the possible rectangles 
        2. Compute their area
        3. Update the largestRectArea value if required.
    
    Approach2: TODO_PENDING : Optimized solution
        Source: https://www.geeksforgeeks.org/largest-rectangle-under-histogram/
        Analogy: This is much similar to `trappingRainWater.js`
        How? For every element, we have to find
            left[i]  -> represents the index whose length is `ge` to arr[i]
            right[i] -> represents the index whose length is `ge` to arr[i]
            arr[i]   -> represents the height of element at i
        Solution: https://leetcode.com/problems/largest-rectangle-in-histogram/discuss/28902/5ms-O(n)-Java-solution-explained-(beats-96)
*/

//Helper function
function getTargetSizedRectangles(arr, unitSize) {

    let rectangles = [];
    let len = arr.length;
    let start = 0,
        end = 0;

    for (let i = 0; i < len; i++) {

        let val = arr[i];
        if (val >= unitSize) {
            end++;
            continue
        };
        rectangles.push(arr.slice(start, end));
        start = i + 1;
        end = i + 1;
    }
    rectangles.push(arr.slice(start, end));
    return rectangles;

}

function getLargrestRectangle(arr) {

    let largestArea = -Infinity;
    let maxvalue = Math.max.apply(undefined, arr);
    let targetArr = [...new Array(maxvalue)].fill(1);

    targetArr.forEach((_, unitSize) => {
        unitSize = unitSize + 1;
        let targetRectangles = getTargetSizedRectangles(arr, unitSize);
        largestArea = targetRectangles.reduce((largestArea, recDimension) => {
            let recArea = recDimension.length * unitSize;
            return recArea > largestArea ? recArea : largestArea;
        }, largestArea);

    });

    return largestArea;

}


let input = [2, 1, 5, 6, 2, 3];
let largestArea = getLargrestRectangle(input);
console.log('Largest rectangle : ', largestArea);