/*
        Source: https://bigfrontend.dev/problem/remove-duplicate-letters-in-a-string (112_BFE)
        Solution link: https://bigfrontend.dev/problem/remove-duplicate-letters-in-a-string/discuss/942
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Try to understand what kind of transformation/steps, you need to perform to transform the input to output.
            b) Write each Pass, put it in front of you. Visualise it. Convert that into javascript.
            c) When dealing with string related problems, write it how each iteration/pass should look like from problem to intermediate to solution.
        TODO_REMEMBER:
            a) Set has API -> .add, .has, .entries, .delete, .clear
            b) Map has API -> .set, .has, .entries, .delete, .get, .clear
        TODO_SOLUTION:
            1. Expand
                - When unique
                - Not present str[j]
                - Add to set
                - updateTempAnswer basis check
                - j++
            2. Shrink
                - remove i from set
                - i++
            3. Terminating
                - j === length -1
            4. Helper function
                - getSmallerStr
            a) Create a map maintaining last index of the chat
            b) Everytime you push a char, check last char is greater than current char and last char with higher end index is present in the map.
                i) yes, keep removing
                b) no, add the current char.
*/




// str1 = 'xyzabc', str2 = 'abcxyz'
const getSmallerWord = (str1, str2) => {
    for (let i = 0; i < str2.length; i++) {
      let char1 = str1[i] ?? 'z'
      let char2 = str2[i]
      if (char2.charCodeAt(0) < char1.charCodeAt(0)) {
        return str2
      }
    }
    return str1
}
  
  
  
const removeDuplicateChars = (str) => {
  
    let i = 0, j = i + 1
    let set = new Set(str[i])
    let tempAnswer = ''
    while (j < str.length) {
  
      let char = str[j]
  
      if (!set.has(char)) {
        set.add(char)
        j++
        tempAnswer = getSmallerWord(tempAnswer, str.slice(i, j))
      } else {
        set.delete(str[i++])
      }
    }
  
    return tempAnswer
  }
  
const ans = removeDuplicateChars('xyzabcxyzabc')
console.log(ans)