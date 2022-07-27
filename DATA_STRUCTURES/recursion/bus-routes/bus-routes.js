/*
        Source: https://leetcode.com/problems/bus-routes/
        Solution link: OWN
        Difficulty: TODO_DI_HARD
        Algorithm: ?
        Company: TODO_CO_UBER [https://leetcode.com/discuss/interview-experience/1639865/Uber-or-L4-or-Bangalore-or-India-or-Virtual-Onsite-or-November-2021-Offer]
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        Solved: July, 2022.
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Identify base condition, non base condition, aggregation condition, return value
            b) EXPLAIN THE PROBLEM IN ENGLISH
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) The Possible Options are:
                - Buses which are not visited
                - Buses which has the Source
                - Iterating over the bus stops of that bus [with both above condition]
*/


const numBusesToDestination = function (routes, source, target, busIndex, visitedBuses) {


    // If you cannot start with this bus, as a source
    if (!routes[busIndex].includes(source)) {
        return -1
    }

    // If you have reached to the destination
    if (routes[busIndex].includes(target)) {
        return visitedBuses.length
    }

    let minBuses = Infinity
    const busStops = routes[busIndex] // [1,2,7]

    for (let i = 0; i < busStops.length; i++) {

        // Explore other possible source
        if (busStops[i] !== source) {
            const nextSource = busStops[i]

            // Explore other unvisited routes, with nextSource
            for (let j = 0; j < routes.length; j++) {
                if (!visitedBuses.includes(j)) {
                    const totalBuses = numBusesToDestination(routes, nextSource, target, j, [...visitedBuses, j])
                    if (totalBuses !== -1) {
                        minBuses = Math.min(minBuses, totalBuses)
                    }
                }
            }
        }
    }


    return minBuses === Infinity ? -1 : minBuses

};

const driverFunction = (routes, source, target) => {

    let minBuses = Infinity
    routes.forEach((busRoute, busIndex) => {
        const totalBuses = numBusesToDestination(routes, source, target, busIndex, [busIndex])
        if (totalBuses !== -1) {
            minBuses = Math.min(minBuses, totalBuses)
        }
    })
    return minBuses === Infinity ? -1 : minBuses
}

// const minBuses = driverFunction([[1,2,7],[3,6,7]], 1, 6)
const minBuses = driverFunction([[1, 2, 7], [3, 4, 6], [3, 7], [7,8,9], [9,6]], 1, 6)
// const minBuses = driverFunction([[7,12],[4,5,15],[6],[15,19],[9,12,13]], 15, 12)

console.log(minBuses)