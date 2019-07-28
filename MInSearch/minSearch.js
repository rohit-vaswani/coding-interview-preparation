/*

    Source: https://leetcode.com/problems/word-search/
    Solve: https://leetcode.com/problems/word-search/discuss/27658/Accepted-very-short-Java-solution.-No-additional-space.
    TODO_PENDING: not able to solve this as this is going in a infinite loop


*/


let char,
    isLastCharacter,
    isMatching;

let inInRange = (i ,j) => !(i<0 || j<0 || i>board.length-1 || j>board[0].length-1);

function existInBoard(board , word , i , j , charIndex , visited){
    
    visited[i] = visited[i] || [];
    char = word[charIndex];
    isLastCharacter = word.length-1 === charIndex;
    isMatching = (board[i][j] === char);

    console.log(`Checking char: ' ${char} ' at index at index [${i}][${j}] viz. ${visited[i][j]}`);

    //BASE CONDITION: OUT OF BOUNDS
    if(!inInRange(i,j)){
        return false;
    }

    //BASE CONDITION: Already VISITED
    if(visited[i][j]){
        return false;
    }
    
    //BASE CONDITION: END OF THE EXECUTION
    if(isLastCharacter){
        return isMatching;
    };

    
    if(isMatching){
        console.log('Char matched : ' , char , ' at i: ' , i , ' j: ' , j);
        visited[i][j] = 1;
        charIndex++;
    }
    
    
    console.log(`---Generating combinations for : [${i}][${j}] to check : ${word[charIndex]}` );

    return (
        inInRange(i,j+1) && existInBoard(board , word , i   , j+1, charIndex , visited) ||
        inInRange(i+1,j) && existInBoard(board , word , i+1 , j ,  charIndex , visited) ||             
        inInRange(i-1,j) && existInBoard(board , word , i-1 , j ,  charIndex , visited) || 
        inInRange(i,j-1) && existInBoard(board , word , i   , j-1, charIndex , visited)
    )

}


const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
const word = 'ABCCED';
const _doesExist = doesExist(board , word);
console.log('Word exist in the board : ' , _doesExist);

//Driver functions
function doesExist(board , word){

    let rows = board.length,
        cols = board[0].length,
        isExist;

    for(let r = 0 ; r < 1 ; r++){

        for(let c = 0;c < 1 ; c++){
            let visited = [];
            isExist = existInBoard(board , word , r , c , 0 , visited);
            if(isExist){break};
        }

        if(isExist){break};
    }
    return isExist;
}


// function exist(board , word){


//     let char,
//         isLastCharacter,
//         isMatching;

//     debugger;

//     let tempMatrix = [];
//     let visited = [];
//     let inInRange = (i ,j) => !(i<0 || j<0 || i>board.length-1 || j>board[0].length-1);

//     return existInBoard(board , word , 0 , 0 , 0);

//     function existInBoard(board , word , charIndex , i , j){
        
//         tempMatrix[i] = tempMatrix[i] || [];
        
//         char = word[charIndex];
//         isLastCharacter = word.length-1 === charIndex;

//         console.log(`Checking char: ' ${char} ' at index at index [${i}][${j}]`);

//         if( !inInRange(i,j) ){
//             return false
//         };

//         if(tempMatrix[i][j]){
//             return false;
//         }


//         isMatching = (board[i][j] === char && tempMatrix[i][j]!=1);

//         if(isLastCharacter){
//             return isMatching;
//         };

//         if(isMatching){
//             console.log('Char matched : ' , char , ' at i: ' , i , ' j: ' , j);
//             tempMatrix[i][j] = 1;
//             charIndex++;
//         }

//         console.log(`---Generating combinations for : [${i}][${j}]`);
//         return (
//             inInRange(i,j+1) && existInBoard(board , word , charIndex , i , j+1) || 
//             inInRange(i+1,j) && existInBoard(board , word , charIndex , i+1 , j) ||             
//             inInRange(i-1,j) && existInBoard(board , word , charIndex , i-1 , j) || 
//             inInRange(i,j-1) && existInBoard(board , word , charIndex , i , j-1)
//         )
        
        


//     }

// }


// const board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// const word = 'ABCCED';
// const doesExist = exist(board , word);
// console.log('Word exist in the board : ' , doesExist);