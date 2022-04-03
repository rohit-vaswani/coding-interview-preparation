/*
        Source: https://www.interviewbit.com/problems/edit-distance/
        Solution link: https://www.geeksforgeeks.org/edit-distance-dp-5/
        Difficulty: TODO_DI_HARD
        Algorithm: Dynamic programming / Recursive solution
        Company:  TODO_CO_GOOGLE , TODO_CO_LINKEDIN , TODO_CO_MICROSOFT , TODO_CO_AMAZON
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Example: 'abd' -> 'abc'
            b) Base conditions
                - When char is same
                - When first string is exhausted
                - When second string is exhausted
            c) Non-base condition
                - When char is different
                    > Insert
                    > Delete
                    > Replace
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