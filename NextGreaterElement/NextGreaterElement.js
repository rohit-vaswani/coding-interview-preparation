/*

    problem: To find the first greater element on the right hand side of the target element
    Approach: Using Stack
    Complexity: O( n* log n )?
    Problem link: https://www.geeksforgeeks.org/next-greater-element/
    Asked for: Amazon

*/


class Stack{

    constructor(){
        this._arr = [];
    }

    push(elem){
        this._arr.push(elem);
    }

    pop(){
        const elem = this.peek();
        this._arr.length = elem!=undefined ? this._arr.length-1 : 0;
        return elem;
    }

    peek(){
        let arr = this._arr;
        return arr.length!=undefined && arr[ arr.length - 1 ];
    }

    empty(){
        return !this._arr.length;
    }

    search(elem){
        return this._arr.find( val => elem === val );
    }
}

let stack = new Stack();

const nextGreaterElement = (inputArray) => {

    let lastElem, answerMap = {};

    inputArray.forEach( (elem , i) => {
        
        lastElem = stack.peek();
        
        while(!stack.empty()){

            if(lastElem< elem ){
                answerMap[lastElem] = elem;
                lastElem = stack.pop();
                continue;
            }
            stack.push(lastElem);
            break;            
        }
        stack.push(elem);

    });


    while(!stack.empty()){
        const lastElem = stack.pop();
        answerMap[lastElem] = -1;
    }

    return answerMap;

}


const inputArray =  [13, 7, 6, 12];
const answer = nextGreaterElement(inputArray);
console.log(answer);