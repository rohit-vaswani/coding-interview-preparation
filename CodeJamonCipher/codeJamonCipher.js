/*

    Source: https://www.youtube.com/watch?v=Uvlu1I1bfYo&list=PLfBJlB6T2eOtMXgK3FLUTawHjzpIEySHF&index=6&t=0s
    Asked in: TODO_CO_Google
    Problem type: Dynamic programming

*/

const cipherStr = 'ishtsiarestmon';
const vocabulary = ['this' , 'is' , 'a' , 'monster' , 'restmon'];
const output = codeJamonCipher( cipherStr , vocabulary);
console.log('Answer : ' , output);



function codeJamonCipher(cipherStr , vocabulary){

    const vocMap = getVocabularyMap(vocabulary , cipherStr);//To find the occurence of vocabulary words in the cipherString. Refer Map below.
    const cipherLen = cipherStr.length;
    return printCombinbationRecursively( vocMap , 0 , cipherLen , []  );//A recursive function to solve the dynamic problem

}

function printCombinbationRecursively(vocMap , start , cipherLen , answer , finalAnswer = []){
    //TODO_LEARNING: How we are combining the answers of recursive problem into finalAnswer and then returning it at the end

    let vocValueObject, isTargetWord;

    //Base Condition
    if( answer.join('').length === cipherLen){
        return answer.join(' ');
    }

    let nextTargetWordDetails = Object.keys(vocMap).reduce( (acc , vocWord) =>  {

        vocValueObject = vocMap[vocWord];
        isTargetWord = !!Object.keys(vocValueObject).filter( val => val == start ).length;
        isTargetWord && acc.push( [ vocWord , vocValueObject[start] + 1] );
        return acc;

    } , []);

    nextTargetWordDetails.forEach( wordDetail => {
        finalAnswer = finalAnswer.concat( printCombinbationRecursively( vocMap , wordDetail[1] , cipherLen , [...answer , wordDetail[0]] ) );
    } );

    return finalAnswer;

}


function getVocabularyMap(vocabulary , cipherStr){

    let len  = vocabulary.length,
        i = 0,
        vocWord = '',
        vocMap = {};

    for( i=0; i<len; i++){

        vocWord = vocabulary[i];
        vocMap[vocWord] = getVocabIndicesMap(vocWord , cipherStr);

    }

    return vocMap;

}
function getVocabIndicesMap(word , str){

    let
        strLen = str.length,
        indicesMap = {},
        subStr = '',
        i = 0,
        wordLen = word.length;

    let isAnagram = subStr => subStr.length === word.length && [...word].every( char => subStr.includes(char) );

    for( i = 0; i < strLen; i++){
        subStr = str.slice( i , i + wordLen );
        if(isAnagram(subStr) ){
            indicesMap[i] = i + wordLen - 1;
        }
    }
    
    return indicesMap;

}

/*

    is:{
        0:1,
        4:5
    },
    this:{
        0:3,
        2:5
    },
    a:{
        6:6
    },
    monster:{
        7:13
    },
    restmon:{
        7:13
    }

*/
