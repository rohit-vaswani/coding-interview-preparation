/*

    SOURCE: https://www.geeksforgeeks.org/edit-distance-dp-5/
    Approach: Dynamic programming with recursion using temp array //TODO_LEARNING
    Complexity: O(m*n) where m is the length of str1 and n is the length of str2
    Logic: A recurring problem was found which was partially solved in the previous steps. Hence, a 2D array was maintained. //TODO_LEARNING
    PS: Must look for the diagram
    TODO_PENDING: This has not been solved be me.



*/


const editDistDP = function( str1, str2, m, n) 
{ 
    // Create a table to store results of subproblems 
    let dp = [];
  
    // Fill d[][] in bottom up manner 
    for (let i=0; i<=m; i++) 
    { 
        dp[i] = [];
        for (let j=0; j<=n; j++) 
        { 
            // If first string is empty, only option is to 
            // insert all characters of second string 
            if (i==0) 
                dp[i][j] = j;  // Min. operations = j 
  
            // If second string is empty, only option is to 
            // remove all characters of second string 
            else if (j==0) 
                dp[i][j] = i; // Min. operations = i 
  
            // If last characters are same, ignore last char 
            // and recur for remaining string 
            else if (str1[i-1] == str2[j-1]) 
                dp[i][j] = dp[i-1][j-1]; 
  
            // If the last character is different, consider all 
            // possibilities and find the minimum 
            else
                dp[i][j] = 1 + Math.min(dp[i][j-1],  // Insert
                                   dp[i-1][j],  // Remove 
                                   dp[i-1][j-1]); // Replace 
        } 
    } 
  
    return dp[m][n]; 
} 

const str1 = "sunday", 
      str2 = "saturday";
const output = editDistDP(str1 , str2 , str1.length , str2.length);
console.log(output);