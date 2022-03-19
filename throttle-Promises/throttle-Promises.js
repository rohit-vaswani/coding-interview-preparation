/*
        Source: https://bigfrontend.dev/problem/throttle-Promises (92_BFE)
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: YES
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a) Promise.resolve(2) -> promise of resultant 2
            b) await Promise.resolve(2) -> 2
            c) new Promise((res, rej) => res(2)) === Same as A
            d) [1,2,3].push(...[4,5,6]) => [1,2,3,4,5,6]
            e) [1,2,3].concat([4,5,6]) => Returns [1,2,3,4,5,6]
            f) await statement inside the while loop makes the while loop execution to stop till results are awaitied
            g) Promise.resolve(2).then( res => console.log(res)) => Same as b => Returns 2
        TODO_SOLUTION:
            a)
*/

console.log('Throttle promises')


const throttlePromises = async (apiPromises, concurrency) => {

    let result = []

    while(result.length < apiPromises.length) {
        const startIndex = result.length
        const targetPromises = apiPromises.slice(startIndex, startIndex + concurrency)
        result.push(...await Promise.all(targetPromises)) // TODO_REMEMBER: await in while loop
    }

    return result

}


const apiPromises = new Array(100).fill(0).map( (value, index) => Promise.resolve(`Resolving #${index}`))

const ans = throttlePromises(apiPromises, 5).then(console.log)
console.log(ans)
