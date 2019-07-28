const duplicateNumber = (arr) => {
    let answer , map = {};
    arr.forEach( val => {
        map[val] = map[val] || 0;
        map[val]++;
        if(map[val]>1){answer=val};
    });
    return answer ||  -1;
}


const input = [3 , 4 , 1 , 5 , 1];
const output = duplicateNumber(input);
console.log(output);
