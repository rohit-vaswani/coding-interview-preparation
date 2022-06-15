// [1,2,3,4]

/*
        Source: https://leetcode.com/problems/swap-nodes-in-pairs/
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
            a) The solutions became only possible because you
                - kept examples in front of you.
                - Explained approach in english with dry run by updating pointers.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) [1,2,3,4,5]
            b) 1 points to 3 --> first.next = second.next
            c) 2 points to 1 --> second.next = first
            d) head(.next) points to 2 --> head.next = second

*/


class ListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))

const swapPairs = (head) => {


    let isHeadProcessed = false
    let first = head
    let second = first.next
    let h = head

    if (second === null) {
        return h
    }

    while (true) {


        first.next = second.next
        second.next = first


        if (!isHeadProcessed) {
            head = second
            isHeadProcessed = true
            h = head
        } else {
            head.next = second
        }


        head = second.next
        first = first.next

        if (first === null || first.next === null) {
            break
        }

        second = first.next


    }


    return h

}

console.log(swapPairs(head))