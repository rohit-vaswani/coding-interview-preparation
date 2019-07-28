/*

    Source: https://www.interviewbit.com/problems/redundant-braces/
    Asked in: TODO_CO_AMAZON
    Solve: https://www.geeksforgeeks.org/expression-contains-redundant-bracket-not/
    Approach:
        1. Push: When a non-closing-paranthesis is encountered
        2. Pop: When a closing-paranthesis is defined
        3. Break: 
            a) When no operand is encontered while poping between ( -> )
            b) When opening paranthesis is encountered right after the first pop upon closing paranthesis
    Data structures: TODO_DS_STACK

*/


class Stack{

    constructor(){
        this.arr = [];
    }

    push(v){
        this.arr.push(v);
    }

    pop(){
        if(this.arr.length){
            let val = this.arr[ this.arr.length - 1];
            this.arr.length = this.arr.length - 1;
            return val;
        }   
    }

    peek(){
        if(this.arr.length){
            let val = this.arr[ this.arr.length - 1];
            return val;
        }
    }

    isEmpty(){
        return !this.arr.length;
    }

}


function hasRedundantBraces(input) {

    let paranthesisEnum = {
        'opening': '(',
        'closing': ')'
    }

    let validOperandsEnum = {
        '+': 1,
        '-': 1,
        '*': 1,
        '/': 1
    }


    let chars = [...input];
    let hasRedBraces = false;
    let len = chars.length;
    let i = 0, char, isOperandEncountered, top, isOperand;
    let isClosingParanthesis = false;        

    let stack = new Stack();

    for (i = 0; i < len; i++) {

        char = chars[i];
        isClosingParanthesis = (char === paranthesisEnum.closing);

        if (!isClosingParanthesis) { //Operator or operand or opening paranthesis
            stack.push(char);
            continue;
        }

        //A closing paranthesis
        isOperandEncountered = false;
        top = stack.peek();

        if (top === paranthesisEnum.opening) {
            hasRedBraces = true;
            return hasRedBraces;
        };

        while (top != paranthesisEnum.opening && !stack.isEmpty()) {

            top = stack.pop();
            isOperand = validOperandsEnum[top];
            if (isOperand) {
                isOperandEncountered = true;
            }
        }

        if(!isOperandEncountered){
            hasRedBraces = true;
            return hasRedBraces;
        }
    }

    return hasRedBraces;
}


// let input = '(a+b)'
let input = '(a+(b)/c)';
let output = hasRedundantBraces(input);
console.log('Output : Has redundant braces : ' , output);
