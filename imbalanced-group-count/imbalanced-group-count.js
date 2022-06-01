/*
        Source:
            a) https://drive.google.com/file/d/1h6VPsZVlHsWH55LhmhIlCgl5d6eJZx37/view?usp=sharing
            b) https://drive.google.com/file/d/1TeTYlfBbqbukfrmOQlOELErpwz3gTW03/view?usp=sharing
            c) https://drive.google.com/file/d/1lnqUHMMK7icRIiUQRxxsR_78u0GrRomZ/view?usp=sharing
        Solution link: ?
        Difficulty: TODO_DI_MEDIUM
        Algorithm: ?
        Company: TODO_CO_AMAZON
        DataStructure: ?
        TODO_STANDARD_PROBLEM: NO
        TODO_NEED_PRACTICE: NO
        TODO_NEED_REVISION: NO
        TODO_BENCHMARK: NO
        TODO_QUESTIONS:
            a)
        TODO_TAKEAWAY:
            a) Understand the problem better by identifying the steps to take to solve the problem
            b) Understand the problem better by identifying the helper function to use.
        TODO_REMEMBER:
            a)
        TODO_SOLUTION:
            a) Identify all the subgroups in the forward section
            b) Write a helper function to get sub group imbalanced counts
            c) Sum up imbalanced counts of each subgroup.
*/



const getAllCombinations = (arr = []) => {


    let len = arr.length;
    const subArr = []
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            subArr.push(arr.slice(i, j + 1))
        }
    }

    return subArr
}

const getSubArrImbalancedCount = (arr) => {
    const sortedArr = arr.sort() // ascending sorting

    return sortedArr.slice(1).reduce((acc, val, index) => {
        const isImbalanced = (val - sortedArr[index] )> 1
        return isImbalanced ? acc + 1 : acc
    }, 0)

}

function findTotalImbalance(rank) {

    // Find all the combinations
    const allCombs = getAllCombinations(rank)


    // Filter the combinations
    const filteredCombs = allCombs.filter(subArr => subArr.length > 0)

    // Iterate each, sort each, Find diff between consecutive to be more than 1
    let imbalancedElemsCount = filteredCombs.reduce((imbalanceCount, subArray, index) => {
        const subArrImbElemsCount = getSubArrImbalancedCount(subArray)
        subArrImbElemsCount > 0 && console.log(subArray, subArrImbElemsCount)
        return imbalanceCount + subArrImbElemsCount
    }, 0)

    return imbalancedElemsCount
}


const output = findTotalImbalance([4, 1, 3, 2]);
console.log(output)
