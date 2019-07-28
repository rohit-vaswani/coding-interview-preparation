/*

    Source: https://theanubhav.com/2019/02/03/js-currying-in-interview/#what-is-currying
    TODO_Learning:
        1. valueOf: This method (non-prototype) is called when browser is expecting the primite value of an object.
        2. Closures are the best way and when combined with Function.prototype it becomes really powerful. Use it.

*/


function getSum(a){

    let sum = a;

    func.valueOf = function(){return sum};//Will be called when console.log( 0 + getSum(2)(3) )

    function func(b){
        sum += b;
        return func;//Infinitely
    }

    return func;

}

//Explicit call to argumentless functions
function sumFunc(a){
	let sum = a;
	return function func(b){
		sum += b || 0;
		return !arguments.length ? sum : func;
	}
}

//Explicit return value
function sumFunc(a){
	let sum = a;
	return function func(b){
        sum += b || 0;
        func.result = sum;
		return func;
	}
}

//Pre-determined argument length
function calculateSum(){
	
	let fn = this;
	let len = fn.length;

	return function func(){
		return arguments.length >= len ? fn.apply(fn , arguments) : func.bind(func, ...arguments);
    };  
}
// calculateSum.apply(sum)(1)(2)(3)