
/*

    Source: https://www.geeksforgeeks.org/lru-cache-implementation/
    Approach: DLL along with hashmap for O(1) insert, delete and access
    Used for: Cache implementation: Those which are recently used (Cache miss) should be deleted with least complexity and space should be created.
*/



class Node{
    constructor(left, val , right){
        this.left = left;
        this.val  = val;
        this.right = right;
    }
}


class DLL{

    constructor(maxSize){
        this.maxSize = maxSize;
        this.front = null;
        this.rear = null;
        this.length = 0;
        this.count = 0;
    }

    addToQueue(val){
        const node = new Node(null , val , this.front);
        this.front ? this.front.left = node : '';
        this.front = node;
        this.rear = !this.rear ? this.front : this.rear;
        this.count++;
        return node;
    }

    deleteFromQueue(){
        const val = this.rear.val;
        this.rear = (this.rear || {}).left;
        this.rear.right = null;
        this.count--;
        return val;
    }

    isFull(){
        return this.count === this.maxSize;
    }

    iterate(){

        let current = this.front;
        while(current!=null){
            console.log(current.val);
            current = current.right;
        }

    }

}




class LRU{

    constructor(maxSize){
        this.dll = new DLL(maxSize);
        this.map = new Map();
    }

    add(value){

        //Check if already present
        if(this._isAlreadyPresent(value)){return};

        //Check if the size is full
        this.dll.isFull() && this.dll.deleteFromQueue();

        //Add it to the Queue
        this.map.set(value , this.dll.addToQueue(value) );
        
    }

    deleteLru(){
        const valDeleted = this.dll.deleteFromQueue();
        valDeleted!=undefined && this.map.delete(valDeleted);
    }

    _isAlreadyPresent(val){
        if(this.map.get(val)){console.log('Already present : ' , val)};
        return !!this.map.get(val);
    }

    _iterate(){
        console.log('Iterating');
        this.dll.iterate();
    }

}



const lru = new LRU(3);
lru.add(3);
lru.add(2);
lru.add(1);
lru._iterate();
lru.add(4);
lru._iterate();
lru.add(5);
lru.add(6);
lru.add(5);
lru.add(7);
lru._iterate();