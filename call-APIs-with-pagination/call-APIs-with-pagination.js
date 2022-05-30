/*
        Source: https://bigfrontend.dev/problem/call-APIs-with-pagination [56_BFE]
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: ?
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a)
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a)
*/

const fetchList = async (since) => Promise.resolve([...new Array(2).fill('').map(val => {
    return {lastId: Math.random(), since}
})])

const fetchListWithAmount = async (amount = 5, response = []) => {


    // Base condition
    if (response.length >= amount) {
        return response.slice(0, amount)
    }

    const lastId = response[response.length - 1]?.lastId
    const moreResponse = await fetchList(lastId)
    return fetchListWithAmount(amount, [...response, ...moreResponse])
}


fetchListWithAmount(11).then(console.log)