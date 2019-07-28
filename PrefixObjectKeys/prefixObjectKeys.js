/*
    Source: https://www.youtube.com/watch?v=Vi4Pr8bUMZs&feature=youtu.be
    Asked in: Microsoft
    Author: Akshay Saini
    Approach: Recursive

*/


const input = {
    name: 'Rohit',
    address: {
        personal: {
            type: 'flat',
            firstLine: '301, Omi sai',
            location:{
                city: 'ulhasnagar',
                state: 'Maharashtra'
            }
        }
    },
    lastName: 'Vaswani'
};

var val , prefixedKey;
var isObj = val => typeof val === "object";
const output = getFlatObject(input , 'user');
console.log(output);



function getFlatObject(input , prefix){

    return Object.keys(input).reduce( (acc , key) => {

        val = input[key];
        prefixedKey = prefix + '_' + key;
        
        if(isObj(val))
            Object.assign(acc , getFlatObject( val , prefixedKey));
        else
            acc[ prefixedKey ] = val;

        return acc;
    } , {});

};