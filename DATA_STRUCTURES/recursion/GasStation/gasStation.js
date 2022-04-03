

/*
        Source: https://www.interviewbit.com/problems/gas-station/
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
            a)
        TODO_SOLUTION:
            a)
*/



// Driver function
const canCompleteCircle = (requiredUnits, availableIndex) => {


    const circleLen = requiredUnits.length

    for (let i = 0; i < circleLen; i++) {
        if(canComplete(requiredUnits, availableIndex, 0, i, circleLen - 1)) {
            return i
        }
    }

    return -1


}


// Recursive function
function canComplete(requiredUnits, availableUnits, tankUnits = 0, stationIndex = 0, remStations) {

    const unitsInTank = tankUnits + availableUnits[stationIndex]

    if(requiredUnits[stationIndex] > unitsInTank) {
        return false
    }

    if(remStations === 0) {
        return true
    }


    return canComplete(requiredUnits, availableUnits, unitsInTank - requiredUnits[stationIndex], (stationIndex + 1) % requiredUnits.length, --remStations)

}


const availUnits = [1,2,3,4,5]
const reqUnits = [3,4,5,1,2]

// const availUnits = [1, 1, 7, 5];
// const reqUnits = [4, 3, 5, 4];

// const availUnits = [2,3,4]
// const reqUnits = [3,4,3]
console.log('ANS: ', canCompleteCircle(reqUnits, availUnits))