/*

    TODO_TAKEAWAY: This is like a epic thing.
    Source: Asked in the Hotstar Interview


*/

const compareObjects = (val1 , val2) => {

    if(val1 === val2){return true;}

    if(typeof val1 != typeof val2){return false};

    if(Array.isArray(val1)){
        return val1.every( (val , i) => compareObjects( val , val2[i]) );
    }

    if(typeof val1 === "object"){
        return Object.keys(val1).every( key => compareObjects(val1[key] , val2[key] ) )
    }

    return false;
}


const obj1 = {
    a:'a',
    b: [1, 2, 3 , 4],
    c:{
        d:'e',
        m: 'n'
    }
}
const obj2 = {
    a:'a',
    b: [1, 2 ,3 , 4],
    c:{
        d:'e',
        m: 'n'
    }
}

const output = compareObjects(obj1 , obj2);
console.log('Are objects equal : ' , output);