/*

    Ref: https://www.geeksforgeeks.org/implementation-priority-queue-javascript/
    Approaches
        a) Enqueue as per the priority - Using it
        b) DeQeueue as per the priority
*/


class PriorityQueue{

    constructor(){
        this._arr = [];
        this.front = -1;
        this.rear = Infinity;
    }

    enQueue(elem , priority){
        let index = this._arr.findIndex( ({priority: _p}) => priority < _p);
        index = index === -1 ? this._arr.length : index;
        this._arr.splice( index , 0 , {elem , priority} );
    }

    deQueue(){
        return this._arr.splice(  0 , 1 );
    }

    _isEmpty(){//TODO_LEARNING: We can call this as a helper method
        return !this._arr.length;
    }

    front(){
        return this._arr[0];
    }

    rear(){
        return this._arr[this._arr.length-1];s
    }

    print(){
        this._arr.forEach( val => {
            console.log(val);
        });
    }

}

const pQueue = new PriorityQueue();
console.log('EnQueue');
pQueue.enQueue( "Rahul" , 2 );
pQueue.enQueue( "Rohit" , 1 );
pQueue.enQueue( "Rahul" , 3 );
pQueue.enQueue( "Jackie" , 1 );
pQueue.enQueue( "Bhavesh" , 3 );
pQueue.print();
console.log('DeQueue');
pQueue.deQueue();
pQueue.deQueue();
pQueue.print();
