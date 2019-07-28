/*

    Ref: https://leetcode.com/problems/spiral-matrix/discuss/20599/Super-Simple-and-Easy-to-Understand-Solution
    Difficulty: Medium
    Complexity: ?
    Approach: Copied and implemented

*/


var spiralTraversal = function(matrix){

    let result = [];
    let cS = 0,
        cE = matrix[0].length - 1, 
        rS = 0 ,
        rE = matrix.length - 1;

    while(rS<=rE && cS<=cE){

        //First Row
        
        for (let j = cS; j <= cE; j ++)
            result = result.concat(matrix[rS][j]);
        rS++;

        //Last Column
        for( let k = rS; k <= rE ;k ++ )
            result = result.concat( matrix[k][cE] );
        cE--;

        //Last Row
        if(rS<=rE){
            for (let a = cE; a >= cS; a--)
                result = result.concat(matrix[rE][a]);
        }

        rE--;

        //First column
        if(cS<=cE){
            for( let m = rE ; m >= cS ; m-- )
                result = result.concat( matrix[m][cS] );
        }
        cS++;

    }

    console.log(result);



}




var matrix = [
    [ 1 , 2 , 0 , 3 , 7 ],
    [ 4 , 5 , 6 , 7 , 9 ],
    [ 7 , 8 , 9 , 8 , 3 ],
    [ 0 , 1 , 2 , 6 , 4 ]
]


spiralTraversal(matrix);

