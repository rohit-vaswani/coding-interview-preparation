/*

    Source: https://www.interviewbit.com/problems/word-break/
    Complexity: O(n)
    Asked in: TODO_CO_Google
    Solution: https://www.geeksforgeeks.org/word-break-problem-dp-32/


*/




function wordBreak(s , dict){

    const dictMap = dict.reduce( ( acc , word ) => {
        acc[word] = 1; 
        return acc;
    } , {});

    let currentChar = '',
        tempStr = '',
        len = s.length;

    for(let i =0 ; i < len; i ++){

        currentChar = s[i];
        tempStr += currentChar;

        if(dictMap[tempStr]){
            tempStr = '';
        }

    }
    
    return tempStr === '' ? 1 : 0;

}


const s = 'myinterviewtrainer',
    dict = ["trainer", "my", "interview"];
const output = wordBreak(s , dict);
console.log('Output: Can word be break : ' , output);