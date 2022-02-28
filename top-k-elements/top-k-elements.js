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

    getMax() {
        return this.arr[0]
    }

    _swap(ind1, ind2) {
        [this.arr[ind1], this.arr[ind2]] = [this.arr[ind2], this.arr[ind1]]
    }

    // heapifyUp
    push(val) {

        this.arr.push(val)

        let current = this.arr.length - 1
        while (current > 0) {
            let parent = Math.floor((current - 1) / 2)
            if (this.arr[parent] < this.arr[current]) {
                this._swap(parent, current)
            }
            current = parent
        }

    }

    // heapifyDown
    pop() {

        let max = this.arr[0]
        this._swap(0, this.arr.length - 1)
        this.arr.splice(this.arr.length - 1, 1)
        let len = this.arr.length
        let parent = 0

        while (true) {

            let leftChild = (2 * parent) + 1
            let rightChild = leftChild + 1
            let swapIndex = -1

            // Swap parent with left if left is more than parent
            if (leftChild < len && this.arr[leftChild] > this.arr[parent]) {
                swapIndex = leftChild
            }


            // Swap right with parent if a) Right is greater than parent b) Right is greater than left
            if (rightChild < len && (
                (this.arr[rightChild] > this.arr[parent] && swapIndex === -1) ||
                (this.arr[rightChild] > this.arr[leftChild]) && swapIndex !== -1)
            ) {
                swapIndex = rightChild
            }

            // Perform actual swap
            if (swapIndex !== -1) {
                this._swap(swapIndex, parent)
                parent = swapIndex
            } else {
                break
            }


        }

        return max

    }


}

const heap = new MaxHeap()
const arr = [1, 10, 8, 9, 10, 2, 3, 4, 8, 8, 6]

arr.forEach(elem => heap.push(elem))

console.log({
    arr: arr,
    maxHeap: heap.arr,
    topK: new Array(4).fill('').map(_ => heap.pop())
})