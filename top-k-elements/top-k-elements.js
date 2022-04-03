/*
        Source: https://bigfrontend.dev/problem/top-k-elements (152_BFE)
        Solution link:
            a) https://www.digitalocean.com/community/tutorials/js-binary-heaps
            b) https://bigfrontend.dev/problem/top-k-elements/discuss/10708
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: YES
        TODO_NEED_PRACTICE: YES (Needs practice)
        TODO_TAKEAWAY:
            a) Heap is a complete binary tree.
            b) Complexity: O(1): to access min/max element. O(log n) to insert/delete an element.
            c) heapify: Process of balancing the tree, as tree gets unblanaced after removing the node.
            d) heapifyUp: The process of moving up to find a suitable place for the node is called heapifyUp [on Insertion]
            e) heapifyDown: The process of moving down to find a suitable place for the node is called heapifyDown [on Removal]
        TODO_REMEMBER:
            a) Left child Node: 2i + 1 and Right child node: 2i+2. Parent node: (i-1)/2
            b) Same approach can be used to implement Priority Queue.
        TODO_SOLUTION:
            a) After inserting a new element, perform heapifyUp to balance the tree. [Swap child with parent]
            b) After removal of a new element, perform heapifyDown to balance the tree. [Swap child with parent]
*/


class MaxHeap {


    constructor() {
        this.arr = []
    }


    swap(i, j) {
        [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]]
    }

    insert(val) {
        this.arr.push(val)

        if (this.arr.length === 1) {
            return
        }

        let i = this.arr.length - 1

        while (i > 0) {
            let parentIndex = Math.floor((i - 1) / 2)
            if (this.arr[parentIndex] <= this.arr[i]) {
                this.swap(i, parentIndex)
                i = parentIndex
            } else {
                break
            }
        }
    }


    pop() {

        const max = this.arr[0]
        this.swap(0, this.arr.length - 1)
        this.arr.length--

        let currentIndex = 0

        while (true) {


            debugger
            let swapIndex = -1
            let leftIndex = (2 * currentIndex) + 1
            let rightIndex = leftIndex + 1
            let leftValue = this.arr[leftIndex] ?? -Infinity
            let rightValue = this.arr[rightIndex] ?? -Infinity

            if (rightValue > leftValue && rightValue >= this.arr[currentIndex] && rightIndex < this.arr.length) {
                swapIndex = rightIndex
            } else if (leftValue > rightValue && leftValue >= this.arr[currentIndex] && leftIndex < this.arr.length) {
                swapIndex = leftIndex
            }

            if (swapIndex === -1) {
                break
            } else {
                this.swap(currentIndex, swapIndex)
                currentIndex = swapIndex
            }
        }


        return max

    }
}


const heap = new MaxHeap()
const arr = [1, 10, 8, 9, 10, 2, 3, 4, 8, 8, 6]

arr.forEach(val => heap.insert(val))

console.log({
    arr,
    maxHeap: heap.arr,
    top4: [...new Array(4)].fill(0).map(val => heap.pop())
})