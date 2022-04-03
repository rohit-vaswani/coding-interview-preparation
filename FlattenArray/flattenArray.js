const iArray = [ 2 , 3 , [ 10 , 8 , [ 7 , 6 , 2 , [ 9 , 10 ] ] , 4 , 6 ] , 9 , [ 12 , [13] ] ];


const flattenArray = (arr, level, currentLevel = 0) => {

    let ans = []


    if(currentLevel > level) {
        return [arr]
    }

    if(!Array.isArray(arr)) {
        return [arr]
    }

    arr.forEach(val => {
        ans.push(...flattenArray(val, level, currentLevel + 1))
    })

    return ans

}



console.log(flattenArray(iArray, 1))




