/*

    Source: https://leetcode.com/problems/group-anagrams/
    Complexity: Medium

*/



const groupAnagrams = (anagrams) => {

    let uniqueAnagrams = {};
    let matchingAnagram = (anagram) => Object.keys(uniqueAnagrams).find( existingAnagram => [...anagram].every( key => existingAnagram.includes(key) ));

    anagrams.forEach( cAnagram => {
        let groupedAnagramKey = matchingAnagram(cAnagram) || cAnagram;
        uniqueAnagrams[groupedAnagramKey] = uniqueAnagrams[groupedAnagramKey] || [];
        uniqueAnagrams[groupedAnagramKey].push(cAnagram)
    })

    return Object.values(uniqueAnagrams);

};


const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(input);
console.log(output);


let inputStr = ["eat", "tea", "tan", "ate", "nat", "bat"];
let output = [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]