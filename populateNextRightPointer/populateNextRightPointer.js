/*
    
    TODO_SOURCE: https://www.interviewbit.com/problems/populate-next-right-pointers-tree/
    TODO_SOLVE: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/discuss/37472/A-simple-accepted-solution
    TODO_SOURCE2: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
    
*/


let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        },
        right:{
            value: 5
        }
    },
    right:{
        value: 3,
        left:{
            value: 6
        },
        right:{
            value: 7
        }
    }
}


function populateNextPointer(tree){
    
    if(!tree){return tree};

    let pre = tree;
    let curr = null;

    while(pre.left){
        curr = pre;
        while(curr){
            curr.left.next = curr.right;
            if(curr.next){curr.right.next=curr.next.left};
            curr = curr.next;
        }
        pre = pre.left;
    }

    return tree;

}

let updatedTree = populateNextPointer(tree);
console.log('Output : ' , updatedTree);