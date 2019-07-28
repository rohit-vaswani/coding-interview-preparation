class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class BinarySearchTree{

    constructor(){
        this.root = null;
    }

    insert(value){
        let current = this.root;
        const node = new Node(value);

        if(!this.root){
            this.root = node;
            return;
        }

        while(true){

            if(value>current.value){
                
                if(!current.right){
                    current.right = node;
                    break;
                }
                current = current.right;
                
            }

            if(value<current.value){
                if(!current.left){
                    current.left = node;
                    break;                    
                }
                current = current.left;
            }

        }

    }

    search(value){

        let { root: current } = this;
        let isPresent = true;
        
        while(true){

            if(!current){
                isPresent = false;
                break;
            }

            if(current.value === value){
                isPresent = true;
                break;
            }

            if(value>current.value){
                current = current.right;
            }

            if(value<current.value){
                current = current.left;
            }

        }

        return isPresent;

    }

}


const bTree = new BinarySearchTree();
bTree.insert(10);
bTree.insert(6);
bTree.insert(7);
bTree.insert(5);
bTree.insert(9);
bTree.insert(2);
bTree.insert(1);
bTree.insert(11);
bTree.insert(14);

console.log(bTree.search(11));

