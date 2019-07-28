/*
    Source: https://leetcode.com/problems/longest-absolute-file-path/
    Asked in: TODO_CO_GOOGLE
    Difficulty: TODO_DI_HARD
*/

function lengthLongestPath(input) {

    let paths = input.split("\n");
    let len = paths.length;
    let stack = [...Array(len)].fill(0);
    let maxLen = 0;

    paths.forEach( s => {
        let lev = s.lastIndexOf("\t")+1;
        curLen = stack[lev+1] = stack[lev] + s.length - lev + 1;
        maxLen = s.includes(".") ? Math.max(maxLen, curLen-1) : maxLen;
    });

    return maxLen;
}

let str = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
let maxLen = lengthLongestPath(str);
console.log('Length of the longest path : ' , maxLen);