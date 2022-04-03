/*
        Source: https://www.geeksforgeeks.org/longest-palindromic-substring-set-2/
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: YES
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) COMPLETE THE FLOW USING HELPER FUNCTION [getPalindrome]
            b) UNDERSTAND WHAT EXACTLY YOU NEED. Find Odd & even palindrome at each step.
            c) UNDERSTAND THE STEPS YOU NEED TO TAKE. [Find Palindromes at each I, compare & save the max one]
            d) CHECK WHETHER YOU NEED THE RECURSION. [Every while loop can be written in the recursion]
        TODO_REMEMBER:
            a) Odd and even recursion exists (i,i+1) & (i-1,i+1)
            b)
        TODO_SOLUTION:
            a)
*/


const example = "forgeeksskeegfor"


const getPalindrome = (str, start, end, palindrome = "") => {


    // Bounds base condition
    if (start < 0 && end >= str.length) {
        return palindrome
    }

    // Non favoring base condition
    if (str[start] !== str[end]) {
        return palindrome
    }

    return getPalindrome(str, start - 1, end + 1, str.slice(start, end + 1))

}

const getLargestPalindrome = (str = "") => {

    let largestPalindrome = ""
    let i = 0


    while (i < str.length) {


        let oddPalindrome = getPalindrome(str, i - 1, i + 1) // ODD Palindome
        let evenPalindrome = getPalindrome(str, i, i + 1)   // EVEN PALINDROME

        // SELECT THE MAX
        let currentMax = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome
        largestPalindrome = largestPalindrome.length > currentMax.length ? largestPalindrome : currentMax

        // UPDATE THE COUNTER
        i++

    }

    return largestPalindrome


}

console.log('ANS: ', getLargestPalindrome(example))
