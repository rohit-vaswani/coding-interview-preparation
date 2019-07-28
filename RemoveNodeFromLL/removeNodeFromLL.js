/*

    Source: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
    Difficulty: Medium
    Expected Time Complexity: O(n)
*/

class Node{

    constructor( value , prevNode){
        this.value = value;
        this.parent = prevNode;
        this.right = null;
        prevNode ? (prevNode.right = this) : undefined;
    }

}


class LinkedList{
    
    constructor(){
        this.root = null;
        this.lastRefNode = null;
    }

    add(val){        
        this.lastRefNode = new Node(val , this.lastRefNode );
        this.root = this.root ? this.root : this.lastRefNode;
    }

    iterate(){
        
        (function logCurrentNode(node){
            console.log(node.value);
            if(!node.right){return;}
            node = node.right;
            logCurrentNode(node);
        }(this.root));//TODO_LEARNING: How this has been done re-cursively with the function definition

    }

    removeNthFromLast(lastIndex){
        let targetNode = this.lastRefNode;
        while(lastIndex!=1){
            targetNode = targetNode.parent;
            lastIndex--;
        }
        targetNode.parent.right = targetNode.right;//TODO_LEARNING: A statement that helped me to achieve in O(n) iteration
    }
}


const llInstance = new LinkedList();
llInstance.add(1);
llInstance.add(2);
llInstance.add(3);
llInstance.add(4);
llInstance.add(5);
llInstance.iterate();
console.log('Iterating over the added nodes');
llInstance.removeNthFromLast(2);
console.log('Post removing the node at Index : 2');
llInstance.iterate();