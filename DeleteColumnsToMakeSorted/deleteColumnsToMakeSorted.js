/*
    Source: https://leetcode.com/problems/delete-columns-to-make-sorted-ii/
    Asked in: TODO_CO_?
    Difficulty: TODO_CO_MEDIUM

*/

var minDeletionSize = function(A) {
    
    if(areAllInLexicographic(A)){return 0};    
    return 1 + minDeletionSize( A.map( arr => arr.slice(1)) );
    
};

function areAllInLexicographic(arrays){
    
    let isInLexicoGraphic = true;
    let len = arrays.length;
    
    for(let i=1; i<len;i++){
        if(arrays[i-1]<arrays[i]){continue};
        isInLexicoGraphic = false;
        break;
    }
    
    return isInLexicoGraphic;
}