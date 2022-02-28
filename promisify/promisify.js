/*
        Source: https://bigfrontend.dev/problem/promisify (159_BFE)
        Difficulty: TODO_DI_EASY
        Algorithm: ?
        Company: ?
        DataStructure: ?
        Solution explained: ?
        TODO_TAKEAWAY:
            a) Always stick to the input and output point of view
*/


const func = (arg1, arg2, callback) => {
    setTimeout(() => {
        callback(arg1 + arg2)
    }, 3000)
}


const promisify = (fn) => {
    return (...args) => {
        let ctx = this
        return new Promise((resolve, reject) => {
            fn.call(ctx, ...args, (error, data) => {
                error ? reject(error) : resolve(data)
            })
        })
    }
}


const promisedFunc = promisify(func)

promisedFunc(1, 2).then((data) => {
    // handles data
    console.log('SUCCESS: ', data)
}).catch((error) => {
    console.log('ERROR:', error)
    // handles error
})