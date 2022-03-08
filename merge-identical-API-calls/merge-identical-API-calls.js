/*
        Source: https://bigfrontend.dev/problem/merge-identical-API-calls (101_BFE)
        Solution link: https://bigfrontend.dev/problem/merge-identical-API-calls/discuss/877
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
            a) Cache/Memoized Hit or Cache Miss - When present in the map or else absent in the map. [New terminologies]
            b) *Always approach the problem by understanding different cases/scenarios of it.
            c) *Write helper functions to solve the problem
        TODO_REMEMBER:
            a) Different between the timestamp(Date.now()) will give you the difference in milliseconds
            b) const fn = (() => (2))() -> iffy. Used to create the variables of lexical scope.
        TODO_SOLUTION:
            a) Create a hash of the arguments
            b) if present in the Map
                - valid: return that.
                - invalid: delete it. execute c.
            c) If not present in the map
                - compute and store it in the map.

*/

const getHashKey = (endPoint, config) => {


    let keysArr = ['endPoint', endPoint]

    let keys = Object.keys(config).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))


    for (let key of keys) {
        keysArr.push(key, config[key])
    }

    return keysArr.join('_')


}

let memoizedResult = {}

const getAPIWithMerging = (endPoint, config) => {

    let hashKey = getHashKey(endPoint, config)

    if (memoizedResult[hashKey]) {
        let current = Date.now()
        let resultTs = memoizedResult[hashKey].timeStamp
        let diffTs = current - resultTs
        if (diffTs > 1000) {
            delete memoizedResult[hashKey]
        } else {
            console.log(`Returning memoized result against ${hashKey}`)
            return memoizedResult[hashKey].resultPromise
        }

    }

    // Compute the ans
    memoizedResult[hashKey] = {
        resultPromise: getAPI(endPoint, config),
        timeStamp: Date.now(),
        hashKey: hashKey
    }

    console.log(`Returning NEW result against path ${hashKey}`)
    return memoizedResult[hashKey].resultPromise

}


const getAPI = (endPoint, config) => {
    return new Promise(((resolve, reject) => {
        resolve(`RESULT OF ${endPoint}_${config.keyword}`)
    }))
}


getAPIWithMerging.clear = () => {
    memoizedResult = {}
}


const main = () => {
    // getAPIWithMerging('/list', {keyword: 'bfe', a: 'b'}).then(result => console.log(result))
    getAPIWithMerging('/list', {a: 'b', keyword: 'bfe'}).then(result => console.log(result))
    getAPIWithMerging('/list', {a: 'b', keyword: 'bfe'}).then(result => console.log(result))
    getAPIWithMerging.clear()
    getAPIWithMerging('/list', {a: 'b', keyword: 'bfe'}).then(result => console.log(result))
    getAPIWithMerging('/list', {a: 'b', keyword: 'bfe'}).then(result => console.log(result))
    getAPIWithMerging('/list', {a: 'b', keyword: 'bfe'}).then(result => console.log(result))


    // setTimeout(() => {
    //     console.log('AFTER 2000ms delay')
    //     getAPIWithMerging('/list', {keyword: 'bfe'}).then(result => console.log(result))
    // }, 2000)
    //
    //
    // getAPIWithMerging('/list', {keyword: 'dev'}).then(result => console.log(result))
    // getAPIWithMerging('/list', {keyword: 'dev'}).then(result => console.log(result))
}


main()