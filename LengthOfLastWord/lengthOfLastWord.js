/*

    Source: https://www.interviewbit.com/problems/length-of-last-word/
    Complexity: O(n)
    Problem: Do not use any method
*/


const lengthOfLastWord = (str) => {
    
    let i=0, 
        char,
        len = 0;

    while(true){
        char = str[i++];
        if(!char){break};
        if(char === ' ')
            len=0;
        else
            len++;
        
    }
    return len;
}

const input = 'Hello World';
const output = lengthOfLastWord(input);
console.log(output);