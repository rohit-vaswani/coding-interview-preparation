/*


*/


const flattenDeep = (arr , level , maxLevel) => {  
    return arr.reduce( (acc , val) => {
        if(Array.isArray(val) && level<maxLevel){            
            val = flattenDeep(val , level+1 , maxLevel );//TODO_LEARNING: We are doing +1 as we don't want to update for all of them.
            acc = acc.concat(val);
            return acc;
        }
        acc.push(val);
        return acc;
    } , []);
}

//TODO_LEARNING: Have return one of the best solution
const flatten = arr => {  
    if(!Array.isArray(arr)){return arr};//TODO_LEARNING: have defined the base condition for a recursive problem
    return arr.reduce( (acc , val) => acc.concat(flatten(val)), []);
}

const iArray = [ 2 , 3 , [ 10 , 8 , [ 7 , 6 , 2 , [ 9 , 10 ] ] , 4 , 6 ] , 9 , [ 12 , [13] ] ];
const oArray1 = flattenDeep(iArray , 1 , 2);
const oArray2 = flatten(iArray);
console.log('Flatten Deep: ' , oArray1);
console.log('Flatten: ' , oArray2);









const iArray = [ 2 , 3 , [ 10 , 8 , [ 7 , 6 , 2 , [ 9 , 10 ] ] , 4 , 6 ] , 9 , [ 12 , [13] ] ];


function flattenArray(elems = []){

    if(Array.isArray(elems) && !elems.length){return elems};
    if(!Array.isArray(elems)){return [elems]};//Primitive value

    return elems.reduce( (flattenArr , elem) => [...flattenArr , ...flattenArray(elem)] , []);
    
}








