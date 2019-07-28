Function.prototype.myBind = function(context , ...args){
    const fn = this;
    return (...fnArgs) => {
        fn.apply(context , args.concat(fnArgs));
    }
}


function fn(a , b , c , d , e , f){
    console.log(this);
    console.log(a , b , c , d , e , f );
}

var boundFn = fn.myBind({} , 1 , 2 , 3);
boundFn(4 , 5 , 6);