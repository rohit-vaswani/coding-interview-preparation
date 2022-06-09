/*
        Source: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        Solved: June, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Solution1: Maintain HashMap with key as Index and value as reference
            b) Solution2: Iterate once, determine length. Reach to (len-1-n) iterating again
            c) Solution: Move fast by n [len=15, n=5]
                - fast: 5; slow: 0
                - fast: 15, slow: 10
                - You got the access. Fast will always lead by n elements
*/


class ListNode {
    constructor(value, nextNode = null)  {
        this.value = value
        this.next = nextNode
    }
}




// n = 2
// head = 1
const removeNthFromEnd = (head, n) => {


    let fast = head, slow = head

    // Fast Forward fast Node
    for(let i=1; i<=n + 1;i++) {
        fast = fast.next
    }

    while (fast !== null) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next?.next

    return head




}


let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))
removeNthFromEnd(head, 2)
while (head!==null) {
    console.log(head.value)
    head = head.next
}

