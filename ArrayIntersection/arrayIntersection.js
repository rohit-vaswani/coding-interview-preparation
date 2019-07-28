/*

    Source: https://www.youtube.com/watch?v=B6Tsrmgsy3k
    Solve: https://www.youtube.com/watch?v=B6Tsrmgsy3k

*/



// let arr1 = [2,6,9,11,13,17];
// let arr2 = [3,6,7,9,10,13,18];
// let arr3 = [4,5,6,9,11,13];

// let intersectedArray = findIntersection(arr1 , arr2 , arr3);
// console.log('Output : Intersected Array : ' , intersectedArray);


// function findIntersection(...arrays){

//     let freqMap = arrays.reduce( (map , targetArray) => {
//         return updateFrequency(targetArray , map);
//     } , new Map());

//     let expectedFreq = arrays.length;
//     return [...freqMap.keys()].filter( val => freqMap.get(val) === expectedFreq );

// }

// function updateFrequency(arr , map){

//     return arr.reduce( (map , val) => {
//         let freq = map.has(val) ? map.get(val) : 0;
//         map.set(val , freq+1);
//         return map;
//     } , map);
// }


let umbrelaPotential = [4,2];
let targetPeople = 12;

let minUmbrelas = getMinUmbrellas(umbrelaPotential , targetPeople);
console.log(minUmbrelas);

function getMinUmbrellas(umbrelaPotential , targetPeople , count = 0){


    if(targetPeople === 0){return count}
    else if(targetPeople<0){return Infinity}

    let minUmbrelas = Infinity;
    for(let i=0; i<umbrelaPotential.length;i++){
        minUmbrelas = Math.min( minUmbrelas , getMinUmbrellas( umbrelaPotential , (targetPeople - umbrelaPotential[i]) , count+1 ));
    }
    
    return ((minUmbrelas === Infinity) ? Infinity : minUmbrelas);

}
