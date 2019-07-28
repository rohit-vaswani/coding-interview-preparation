/*

    TODO_SOURCE: https://www.interviewbit.com/problems/nearest-smaller-element/
    Asked in: TODO_CO_AMAZON and TODO_CO_MICROSOFT
    Input :  [4, 5, 2, 10, 8]
    Return : [-1, 4, -1, 2, 2]

*/


function nearestSmallerElement(input){


    let smallestElement = Infinity;

    return input.map( inputVal => {

        if(smallestElement<inputVal){            
            return smallestElement;
        }

        smallestElement = inputVal;
        return -1;
    
    });

}
