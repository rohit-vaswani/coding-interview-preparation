/*

    Source: https://www.chegg.com/homework-help/questions-and-answers/2-maximum-cost-laptop-count-company-manufactures-fixed-number-laptops-every-day-however-de-q67442428
    Approach: Two Pointer Problem
*/



const getMaxCost = (cost, labels, limit) => {
    let [i, j, currentCount, currentCost, costIncurred, isLegal] = [0, 0, 0, 0, 0, false]
    while(j !== labels.length) {
        isLegal = labels[j] === 'legal'
        currentCost += cost[j]
        if(isLegal && currentCount === limit) {
            costIncurred += currentCost
            currentCost = 0
            i = j + 1            
        } 
        j++
        currentCount++
    }

    return costIncurred

}


const cost = [2,5,3,11,1]
const labels = ['legal', 'illegal', 'legal', 'illegal', 'legal']
const limit = 2
const output = getMaxCost(cost, labels, limit)
console.log('OUTPUT', output)
const expectedOutput = 10