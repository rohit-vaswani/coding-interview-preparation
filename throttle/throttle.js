
//Implementation 1
Function.prototype.throttle = function(delay){
    let prevTime = Date.now();
    const fn = this;
    return function throttled(...args){
        const nowTime = Date.now();
        const diff = nowTime - prevTime;
        prevTime = nowTime;
        if(diff < delay){
            return;
        }
        return fn(...args);
    }
}


//Implementation 2: (web-2.0)
Function.prototype.throttle = function(delay){
    let inThrottle = false;
    const fn = this;
    return function throttled(...args){

        if(inThrottle)
            return;

        fn(...args);
        setTimeout(() => inThrottle = false, delay);

    }
}


//helper function
function onMouseMove(n){
    console.log(n);
}

const throttleMouseMove = onMouseMove.throttle(300);

//Example execution
setTimeout(throttleMouseMove.bind(null , 1), 0);
setTimeout(throttleMouseMove.bind(null , 2), 200);
setTimeout(throttleMouseMove.bind(null , 3), 2000);