

/*


    TEMPLATE:
        Problem:
        Solution:
        Status: UnSolved
        Type:
        Approach:
        Tag:


    1. Find Maximum between two numbers if they are sorted [Bucket Sort]
        Problem: https://leetcode.com/problems/maximum-gap/
        Solution: https://leetcode.com/problems/maximum-gap/discuss/1240543/Python-Bucket-sort-explained
        Status: Unsolved
        Type: Array Operations
        Tag: TODO_REMEMBER
        Approach:
            a) Divide n numbers ranging from low(2) to high(82) into n-1 buckets
            b) Each number will be placed into respective bucket at 0th. Hash Map
            c) Find the Min & max of each bucket
            d) Find the minimum of max of ith bucket with min of i-1th bucket


    2. Max Points on a Line
        Problem: https://leetcode.com/problems/max-points-on-a-line/
        Solution:
        Status: UnSolved
        Type:
        Approach:
            a) Find the slope between two point through (y2-y1)/(x2-x1)
            b) Elements with same slope will fall on the same line.


    3. Prune sub tree with all zeros
        Problem: https://leetcode.com/problems/binary-tree-pruning/
        Solution:
        Status: UnSolved
        Type:
        tag:
        Approach:
            a) Think of this as an Tree with each node {value, left, right}
            b) Helper function: isTreeWithAllZeros [TODO_REMEMBER: Helper functions are sometimes very heavy in recursive function]
                a) base: value=0 & right=null & left=null
                b) non-base: isTreeWithAllZeros(node.left) && isTreeWithAllZeros(node.right)
                c) return type: boolean
                d) Agg: &&
            c) If rightSubTree/leftSubTree
                a) Left sub All zeros: parent.left = null. Otherwise, prune
                b) Right sub all zeroes: parent.right = null. Otherwise, prune


    4. Majority element
            Problem: https://leetcode.com/problems/majority-element/
            Solution: https://leetcode.com/problems/majority-element/discuss/51613/O(n)-time-O(1)-space-fastest-solution
            Status: UnSolved
            Type:
            tag:
            Approach:
                a) Iterate over the elements
                    a) Inc counter if it matches
                    b) Dec counter, it it does not matches
                    c) Change major

       5. Max Sub-Array
            Problem: https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1/
            Solution:
            Status: UnSolved
            Type:
            tag:
            Approach:
                a) Iterate over the elements
                b) Consider all positive elements
                c) Drop zeroes
                d) Identify the least negative number when done in abs.
                e) If the output array is negative, divide it by d.


         5. Merge Without Extra space
            Problem: https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays5135/1
            Solution: OWN
            Status: UnSolved
            Type:
            tag: TODO_NEED_PRACTICE [Benchmark]
            Approach:
                a) Maintain i, j & calculate len1 & len2
                b) While i<len1
                    - Swap i with j if arr1[i] > arr2[j]
                    - Balance arr2[j] with arr2[j+1]
                    - Doing above two steps will fix the arr1
                c) While j < len2 - 1
                    - balance j with j+1


          6. Rows with max 1's
            Problem: https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1
            Solution: OWN
            Status: UnSolved
            Type:
            tag:  TODO_DS_BINARY_SEARCH
            Approach:
                a) Iterate over each row
                b) Do a Binary search on each row to find min index with 1 as startIndex
                c) Main minArrIndex & minRowIndex
                d) return minArrIndex


           7.
            Problem: https://practice.geeksforgeeks.org/problems/interleaved-strings/1/
            Solution: OWN
            Status: UnSolved
            Type:
            tag: TODO_DS_STRING_ARRAY
            Approach:
                a) Do XOR of characters of String A & B.
                b) Do XOR of characters of String C
                c) If 0, you got the answer.


           8. Largest palindrome
            Problem: https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string3411/1
            Solution: OWN
            Status: UnSolved
            Type:
            tag: TODO_DS_STRING_ARRAY | TODO_DS_RECURSION
            Approach:
                1. Iterate over the characters
                2. Call getOddPalindrome & getEvenPalindrome [underling getPalindrome]
                    -> startIndex-- && endIndex++ till characters are same
                3. Return the max of them



           9. Sliding Window Maximum
           Problem: https://leetcode.com/problems/sliding-window-maximum/
           Solution: https://leetcode.com/problems/sliding-window-maximum/discuss/585149/Intuitive-JavaScript-Solution-with-Monotonic-Queue
           Status: UnSolved
           Type: TODO_REMEMBER
           tag: TODO_DS_STRING_ARRAY | Monotonic Queue
           Approach:
                a) Flush all the elements in the dequeue from the right, which is lesser than nums[i]
                b) push nums[i] into queue
                c) For i >=k-1
                    - push dequeue[0] to input
                    - Remove(shift) 0th elem from dequeue if nums[i+1-k] === dequeue[0]





 */



/*






 */