/*

    Source: https://www.dailycodingproblem.com/blog/lockable-binary-trees/
    Asked in: TODO_CO_GOOGLE
    Difficulty: Medium

*/
class Node{

    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
        this.parent = null;
        this.locked = false;
        this.lockedDescendants = 0;
    }

    is_locked(){
        return this.locked;
    }

    canLockOrUnLock(){

        if(this.lockedDescendants > 0){return false};

        let current = this.parent;
        while(current!=null){
            if(current.locked){return false};
            current = current.parent;
        }

        return true;
    }

    lock(){

        if(!this.canLockOrUnLock()){
            return false;
        }

        let current = this.parent;
        while(current!=null){
            current.lockedDescendants++;
            current = current.parent;
        }

        this.locked = true;

        return true;
    }

    unLock(){
        
         if(!this.canLockOrUnLock()){
            return false;
        }

        let current = this.parent;
        while(current!=null){
            current.lockedDescendants--;
            current = current.parent;
        }
        
        this.locked = false;

        return true;
    }

}

class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    insert(value , lockedState){

        let current = this.root;
        const node = new Node(value , lockedState);

        if(!this.root){
            this.root = node;
            this.parent = null;
            return node;
        }

        while(true){

            if(value>current.value){
                
                if(!current.right){
                    current.right = node;
                    node.parent = current;
                    break;
                }
                current = current.right;
                
            }

            if(value<current.value){
                if(!current.left){
                    current.left = node;
                    node.parent = current;
                    break;                    
                }
                current = current.left;
            }

        }

        return node;

    }

}


const bTree = new BinarySearchTree();
bTree.insert(10);
let node12 = bTree.insert(12);
bTree.insert(11);
bTree.insert(13 , false);

let node7 = bTree.insert(7);
bTree.insert(9);
let node5 = bTree.insert(5);

// console.log( '12 Node : ' , node12.unLock() );
console.log( '7 Node : ' , node7.lock() );
console.log( '5 Node : ' , node5.lock() );




