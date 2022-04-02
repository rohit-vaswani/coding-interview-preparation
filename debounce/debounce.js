/*
        Source: ?
        Solution link: ?
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: YES
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) debounce is Higher order function as this is returning a function
            b) Function.prototype.debounce to register debounce on all the functions. -> const dFn = fn.debounce(3000)
            c) Outer fn's this-> cb, while inner fn's this refers to the context
        TODO_SOLUTION:
            a)
*/



/*TODO_TAKEAWAY:
1.
2. With normal functions, this is bound to an invoking object. However, with arrow functions, this is bound to the context in which it is created.
3. Spread operator can be used to convert array-like arguments into array.
4. Type of functions
    - onKeyStore is a handler function
    - debouncedKeyStore is a stand-in function
    - debounce is a Higher order function
*/


Function.prototype.debounce = function(delay){
    let timerId;
    const cb = this;
    return function debounced(...args){
        clearTimeout(timerId);
        const context = this;
        timerId = setTimeout( () => cb.apply(context , args)  , delay);
    }
}


function onKeyStore(){
    const inputDom = document.getElementsByTagName('input')[0];
    const value = inputDom.value;
    console.log(value);
}


// var debouncedKeyStore = Function.prototype.debounce.call(onKeyStore , 3000);
var debouncedKeyStore = onKeyStore.debounce(3000);








/*Approach 2: Rohit's approach

function onKeyStore(){
    const inputDom = document.getElementsByTagName('input')[0];
    const value = inputDom.value;
    debounce('search', function(){
        console.log(value);
    } , 2000);
};

//Global import
!(function(){

    const timerIdMap = {};

    this.debounce = function(fnKey , cb , timeInterval){
        if(timerIdMap[fnKey]){
            clearTimeout(timerIdMap[fnKey])
            delete timerIdMap[fnKey];
        }
        timerIdMap[fnKey] = setTimeout(cb , timeInterval )
    }
}).call(this);

*/