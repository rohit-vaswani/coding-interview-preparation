/* TODO_LEARNING
    1. It has been observed that cached Promise always return the same response. i.e value as 1. Unless we clear the cached promise.
    2. IFFY / Object interface / Object Modules are singleton (if used/initialized correctly)
*/
var cachedModule = function(){

    var cachedPromise;
    var value = 1;

    return {
        resolve(){

            if(cachedPromise){ return cachedPromise};
            return cachedPromise = new Promise(res => res(value));

        },
        inc(){
            value++;
        },
        clear(){
            cachedPromise = undefined;
        }
    }
}();

/*

Execution with the output:

cachedModule.resolve().then( val => { console.log(val) } );//1
cachedModule.inc();
cachedModule.resolve().then( val => { console.log(val) } );//1
cachedModule.clear();
cachedModule.resolve().then( val => { console.log(val) } );//2

*/