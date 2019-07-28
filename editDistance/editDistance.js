/*

    Source: https://www.interviewbit.com/problems/edit-distance/
    Asked: TODO_CO_GOOGLE , TODO_CO_LINKEDIN , TODO_CO_MICROSOFT , TODO_CO_AMAZON
    Approach: Dynamic programming / Recursive solution
    Difficulty: TODO_DI_HARD
    Solve: https://www.geeksforgeeks.org/edit-distance-dp-5/
*/



//Driver function
function editDistance(word1 , word2 , word1Index , word2Index){


    let char1 = word1[word1Index];
    let char2 = word2[word2Index];

    //Word2 is empty
    if(word2Index === 0){return word1Index+1};

    //word1 is empty
    if(word1Index === 0){return word2Index+1};

    //Both chars are matching
    if(char1 === char2){
        return editDistance(word1 , word2 , word1Index-1 , word2Index-1);
    }

    //Both chars are miss-matching
    return 1 + Math.min(
        editDistance(word1 , word2 , word1Index , word2Index-1),//Insert
        editDistance(word1 , word2 , word1Index-1 , word2Index),//Delete
        editDistance(word1 , word2 , word1Index-1 , word2Index-1),//Replace
    );
}

// let word1 = 'horse';
// let word2 = 'ros';
let word1 = 'intention';
let word2 = 'execution';
let len1 = word1.length-1;
let len2 = word2.length-1;
let minDistance = editDistance(word1 , word2 , len1 , len2);
console.log('Output : Min distance : ' , minDistance);