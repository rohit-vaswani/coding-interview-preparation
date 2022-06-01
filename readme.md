
# PENDING:
>>>> LargestRectangleHistogram

# Please note
1. This project contains the PS/DS questions that I found to be quite interesting and as shared by Daily coding problems. If these questions are asked in the companies, then it would be a mere co-incidence. However, I have tagged a few questions with the companies in which they were asked AS PER Geeksforgeeks/DailyCodingProblem website/emails. I hereby declare that I am not disclosing any questions that were asked to me personally. Please use this for the preparation. 
  
2. Some of the questions are not completely solved. Also, there are high chances that the written solutions will not pass all the test-cases published on the websites. 


## Different keywords used

1. TODO_TAKEAWAY:       That teaches you something
2. TODO_PENDING:        The task is pending and/or the problem is not completely solved.
3. TODO_SOLUTION:       Must look at the solution entirely.
4. TODO_DS_MULTI:       It takes multiple data structure to solve the problem.
5. TODO_DS_GRAPH:       Graph data structure is used to solve the problem
6. TODO_DS_STACK:       Stack data structure is used
7. TODO_DS_MAP:         Map data structure is used.
8. TODO_AG_GREEDY:      Greedy algorithm
9. TODO_DS_BINARY_HEAP: Min or Max binary heap. Used in Heap Sort and Prim's algorithm (Greedy algorithms)
10. TODO_DS_PQ:         Priority queue DS.
11. TODO_CO_AMAZON:     Asked in Amazon
12. TODO_CO_FACEBOOK:   Asked in Facebook
13. TODO_CO_UBER:       Asked in Uber
14. TODO_CO_GOOGLE:      Asked in Google
15. TODO_DI_MEDIUM:     Medium complexity problem
16. TODO_DI_HARD:       A hard problem statement
17. TODO_DI_EASY:       A easy problem statement
18. TODO_REMEMBER:      Please revise the hacks/tricks used to get away with a problem.
19. TODO_NEED_PRACTICE:    A Problem which u must solve again as it need hands-on.
20. TODO_STANDARD_PROBLEM A Problem whose fundamentals can be used to solve multiple problems
21. TODO_LEARNING       Solving a problem has some takeaways, which are jotted down.
22. TODO_SOLUTION       Steps taken to solve that problem.
23. TODO_QUESTIONS_ASKED Questions which generally arises when solving that problem.
24. TODO_APPROACH_TWO_POINTER: Use two pointers to solve the problem
25. TODO_APPROACH_SLIDING_WINDOW: Sliding window problem.




## Keep this in mind
1. Always think about the DS that will be used - Map , Array , List , LinkedList , Graph , Stack , Queue
2. Think about how will you `apply datastructure`
 - Sliding window problem:     Think about the scenario, when you will expand/contract the window size
 - Recursive dynamic program: Think about the base edge cases
 - Stack:                     Scnerios when you should push/pop from the stack.
 - Arrays:                    How you should iterate them logically. Should we reduce/map/filter them.
3. Think about the `abstract flow` of the solution
 - The abstract flow of the driver function
 - Different entities involved in solving the problem(Parking lot)
4. To understand the problem
 - Look at the solution and try to find the pattern (Redundant paranthesis and Next permutation of a string)
 - Do a dry run.
 - Establish a proper logical flow


 ## Dynamic programmming
 1. Rod cutting*
    a) Recursive call in a for loop
    b) Aggregation: MAX
 2. Minimum Distance
    a) Recursive call after mention of all the base conditions
    b) Aggregation: Min
 3. Cycles in a directed graph
    a) Recursive call while exploring the adj. vertices of a node
    b) Aggregation: Returns true
 4. nth Stair
    a) Recursive call while iterating over possible steps
    b) Aggregation: Sum

 ## Interesting Observation
 1. For loop over adj vertices in a Directed graph to detect the cycles
 2. For loop over unit sized in rod-cutting


## You should do this
1. Be a story teller -  (addADigit)
    a) Talk about the bad approach first. Why you think that this is not a optimized solution
    b) Mention the approach that you are talking
    c) Speak loud base conditions and non-base conditions
    d) Talk loudly about the edge cases.
    

## Sequences of discussion while in an interview [addADigit, parkingLot]
1. Discuss Input & output:
     - Edge cases
     - Input validations
     - Sample Inputs
     - Seek Clarification / ask ambiguity / communicate assumptions / discuss edge cases / Take different examples
           a) What if the array is Empty?
           b) *Can I assume* that all the values are numeric?
           c) *Can you please confirm* if all the values will be single digit number (0-9)?
           d) DO I need to do input validation?
2. Discuss Approaches
    - Steps to take
    - cases to handle
    - Methodology to use [Recursion, Iteration]
    - Communicate the solution in english
    - Identify helper functions [input & output]
    - Identify the API of the class
    - Write sample output against each step
    - Iteration & passes looks like
    - Data Structures to use [Map, Set, Array, LL]
        a) Talk about multiple approaches/methodology.
        b) Talk about why this approach is not better.
        c) Talk about how you can optimize it. (Iterative/Recursive/Dynamic/Sliding/Traversal)
        d) Communicate flow and do a dry run if required
        e) *I am thinking to take* a recursive_approach wherein I will do ...
        f) *Can I say for an input X*, the output should be Y.
        g) *If you are comfortable with the approach*, we can move to the implementation part?
        h) Let's go through another example to understand it even better.
        i) Can I take a simpler example to better example to better understand
        j) THINK THIS WAY, WHAT YOU NEED AT THE END OF THE DAY TO SOLVE THIS PROBLEM [implement-Math-sqrt, implement-partial, implement-String-prototype-trim]  
3. Discuss Pseudo code
    a) Write the pseudo code
    b) Do the dry run: i) Write passes of the iteration ii) Talk about the base/non-base conditions
    c) Write the 
        i) interface methods
        ii) Helper functions
        iii) Cases
        iv) Steps
   d) ALWAYS KEEP THE MINIMAL EXAMPLE IN FRONT OF YOU, while writing the code [implement-classnames]
4. Write Implementation
    a) Write the code


## Questions to ask (Refer to Best videos section below)
# [Question reiterate -> Clarification -> Approach -> Best Approach -> Dry Run -> Implementation]
1. If you think that Recursive approach is an optimal solution, should I start coding?


7. I am making a few assumptions here, let me just clarify that to you.
8.   (Talk about the approach name: Two pointer / Dynamic programming / Recursive / Sliding window problem)
9. Don't stall. It's Okay to ask questions/knowledge.




## Know this standards
1. To find the first/last k-elements, you should use bucket sort? No need to sort an array with n*logn. https://www.youtube.com/watch?v=EYFcQRwcqk0
2. Heapify is the BEST solution to find the MAX/MIN and to do in-place sorting in n*log(n)
3. If you have to break the loop or continue the loop, never prefer .reduce
4. Bucket sort should be used to perform the lookup in an efficient manner.
5. In most cases,O(n*logn)is achieved by using a tree structure. Divide and conquer may be the methodology which comes to our mind first


## Approaches/Algorithms/Methodology
1. Tortoise-and-rabbit: cycleInAnArray

## Tackle an unknown problem with example [cycleInAnArray]
1. Positive example
2. Negative example
3. Simple example


## For a Recursive problem, can you recursively define the solution
[decodeStr]


## Best videos that illustrate how you should go about a problem
1. [Fizzy-Buzzer](https://www.youtube.com/watch?v=7IbxzIyRMrA) 
2. [add-A-Digit](https://www.youtube.com/watch?v=7IbxzIyRMrA)
3. [Pair-sum](https://www.youtube.com/watch?v=XKu_SEDAykw)
4. [Cycle-in-an-array](https://www.youtube.com/watch?v=VX2oZkDJeGA&t=20s)
5. [parkingLot](https://www.youtube.com/watch?v=DSGsa0pu8-k)


## TODO_PENDING:
https://www.youtube.com/watch?v=FO7VXDfS8Gk&t=3s


# Golden rules for Problem solving
1. Be clear with the input and output of the given/written  methods.
3. To better approach the problem
 - For Iterative problems, write passes of the execution. []
 - For Manipulation problems, Either put comments against each step for better visualisation. []
 - For Recursive problems, Identify the base case and non-base-case. []
 - For Complex problems, Identify the DS to be used to solve it. []
 - For Logical/Sequential problems, Divide the problems into parts/cases, tackle them one by one with helper functions. [merge-identical-API-calls]
 - Solved using regex [https://bigfrontend.dev/problem/validate-an-ip-address]
 - For the complex problems, identify the steps taken to solve the problem
 - For the NEW Problem, to better understand the problem, write and understand the steps to solve the problem in PLAIN ENGLISH.

 - Identify Helper functions / Data Structures / Built-in methods to solve the problem [write-your-own-instanceof.js,support-negative-Array-index.js]
 - Identify if the problem is a recursive problem, what are the base and non-base steps [fibonacci-number.js, invert-a-binary-tree.js]
 - Identify Algorithm (Recursion / Iteration) to use.
 - Identify the problem in Plain English to better understand                           [throttle.js, throttle-Promises.js]
 - Identify How each pass/iteration shall look like
 - Identify Steps                                                                       [merge-identical-API-calls]
 - For transformation problem, Output intermediate solution to visualise the problems
 - To better visualise the problem, always take a simple example to better understand.


To tackle the problem:
 - Can you identify the steps/cases to solve the problem [support-negative-Array-index]
 - Can you think that if it is a recursive problem
 - Can you take a simple example to solve the problem [support-negative-Array-index]
 - Can you think of the solution in the Plain English

Approach to take:
 - Two Pointer
 - Sliding window
 - Recursion

DS or built-in or helper functions
 - Promise.all


# Golden Rule
1. Understand the problem, example, input, output and expectations very clearly [create-a-fake-timer-setInterval]
2. Understand the problem better
   -- Complex problem, DS.
   -- Helper/Built-in functions to use. [merge-sorted-arrays, largestNumber, LargestPalindrome, highlight-keywords-in-HTML-string]
   -- Responsibility & Input/Output of each function. [create-a-fake-timer-setInterval, parkingLot, create-an-Observable]
   -- Recursive problem, Recursion [create-an-interval, LargestPalindrome]
   -- Cases problem, handle [compress-a-string, convert-snake_case-to-camelCase, max-pos-sub-arr-length]
   -- String/Array problem, example and passes [longest-substring-with-unique-characters, Count-palindromic-substrings, add-comma-to-number, max-pos-sub-arr-length]
   -- non-comprehensive, english translation [countRangeSum, event-delegation]
   -- Steps [event-delegation, LargestPalindrome, construct-object, smart-sale, highlight-keywords-in-HTML-string, imbalanced-group-count]
- NEVER JUMP TO THE IMPL, IF YOU CANNOT VISUALISE HOW TO SOLVE IT.   

# Statements to help
 - Ultimately you have to find a (index) [first-failed-commit, merge-sorted-arrays]
 - One thing we are sure is to (iterate over the elements) 




# Still Unable to solve the problem
-- Understand the problem's input and output [create-a-browser-history]
-- Understand if this is a recursive problem or not? (below section)
-- Understand the problem using simpler/minimal/positive/negative example [find-median-of-2-sorted-array, first-failed-commit]
-- Write how each pass will look like [find-median-of-2-sorted-array]
-- understand the flow of the problem in plain english & doing dry runs [find-median-of-2-sorted-array, LargestPalindrome, first-failed-commit]
-- Understand what exactly you need to achieve to solve this problem. [LargestPalindrome, first-failed-commit]

## Is this is a recursive problem or iterative problem
-- Many possible cases at each point of the time? [editDistance, coinChange, maxConnectedBoxes]
-- is this a repeating problem? [construct-object]

## Recursive approach [decodeStr, construct-object]
1. Confirm yourself the return type / output of the function*
2. Always take minimal example to understand the problem/solution better.   
3. Identify base conditions. Handle them first.
4. Handle non-base condition, one-by-one. Make yourself fool that recursive function will return the proper answer.
5. Think about the aggregation operation to converge to the answer.


