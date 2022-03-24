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
    a) Recusrive call in a for loop
    b) Aggregation: MAX
 2. Minimum Distance
    a) Recusrive call after mention of all the base conditions
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


## Golden rule
1. If you think it as a recurring problem, see if you can find the base conditions and non-base conditions. (rod-cutting / minpath)
2. Otherwise, think about the logic and translate it to a high-level logic using helper functions and api-methods


## You should do this
1. Be a story teller -  (addADigit)
    a) Talk about the bad approach first. Why you think that this is not a optimized solution
    b) Mention the approach that you are talking
    c) Speak loud base conditions and non-base conditions
    d) Talk loudly about the edge cases.
    

## Sequences of discussion while in an interview
1. Seek Clarification: Ask relevant questions and resolve ambiguity if any. Ask and clarify edge cases.
2. High-level discussion: 
    a) Talk about multiple approaches.
    b) Talk about why this approach is not better.
    c) Talk about how you can optimize it. (Iterative/Recusrive/Dynamic/Sliding/Traversal)
    b) Communicate flow and do a dry run if required.

## Questions to ask (Refer to Best videos section below)
 # [Question reiterate -> Clarification -> Approach -> Best Approach -> Dry Run -> Implementation]
1. If you think that Recursive appproach is an optimal solution, should I start coding?
2. What if the array is Empty?
3. *Can I assume* that all the values are numeric?
4. Can you please confirm if all the values will be single digit number (0-9)?
5. *If you are comfortable with the approach*, we can move to the implementation part?
6. Let's go through another example to understand it even better.
7. I am making a few assumptions here, let me just clarify that to you.
8. *I am thinking to take* a recursive_approach wherein I will do ...   (Talk about the approach name: Two pointer / Dynamic programming / Recusrive / Sliding window problem)
9. Don't stall. It's Okay to ask questions/knowledge.
10. Can I say for an input X, the output should be Y.


# Key to success: (https://www.youtube.com/watch?v=kvEZVsHmA34&feature=youtu.be)
1. Communication is a key: Think loud and communicate things before you jump to the implementation
2. Creativity is a key: Think about the multiple approaches even if they are un-optimized.

## Know this standards
1. To find the first/last k-elements, you should use bucket sort? No need to sort an array with n*logn. https://www.youtube.com/watch?v=EYFcQRwcqk0
2. Heapify is the BEST solution to find the MAX/MIN and to do in-place sorting in n*log(n)
3. If you have to break the loop or continue the loop, never prefer .reduce
4. Bucket sort should be used to perform the lookup in an efficient manner.


## Approaches/Algorithms
1. Tortoise-and-rabbit: cycleInAnArray



## Best videos that illustrate how you should go about a problem
1. [Fizzy-Buzzer](https://www.youtube.com/watch?v=7IbxzIyRMrA) 
2. [add-A-Digit](https://www.youtube.com/watch?v=7IbxzIyRMrA)
3. [Pair-sum](https://www.youtube.com/watch?v=XKu_SEDAykw)
4. [Cycle-in-an-array](https://www.youtube.com/watch?v=VX2oZkDJeGA&t=20s)


## TODO_PENDING:
https://www.youtube.com/watch?v=FO7VXDfS8Gk&t=3s


## LEARNING (FROM MISTAKES)

### Google
1. Finalize the approach first even before you start coding. Don't jump to the implementation directly.
2. I failed to read and understand the problem statement.
3. **You should always be clear with the input and output of the given/written methods.** (google.js)
4. Take help if you're stuck. It's Okay.
4. If you are stuck, just think loud.
5. Communicate even if you think that it is not an optimal solution. Interviewer is not an enemy.
6. **Make use of helper functions and complete the flow FIRST**
7. What should come first
    a) A logical problem - **Make use of helper functions and complete the flow FIRST**
    b) Recursive problem - **Think, understand and define the base cases FIRST. Aggregate and Converge your non-base case towards base case**
    c) A Complex problem - **Declare Interfaces and API methods first. Implement them later**



# Golden rules for Problem solving
1. Be clear with the input and output of the given/written  methods.
2. Complete the flow first with the help of helper functions and interface methods.
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
 - 

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

Kind of the problem
 - Recursive
 - Complex
 - String/Array problem
 - non-comprehensive problem
 - cases problem
 - Logical problem

-- Complex problem, DS
-- Recursive problem, Recursion
-- Cases problem, handle
-- String/Array problem, example and passes [longest-substring-with-unique-characters]
-- non-comprehensive, english translation


## Recursive approach
1. Make yourself **fool** that a recusrive call will return the correct answer.
2. Think about your bases-cases of a recursive function and converge your non-base cases towards them.
3. Think about how you aggregated your non-base cases.
4. When you define the non-base conditions, you are actually performing DFS operation.

