


/*

  Source: https://www.geeksforgeeks.org/weighted-job-scheduling/ [LOVE_BABBAR_454]
  Asked in: Uber
  Type: Dynamic Programming | Recursion
  
*/



const findMaxJobWeight = (jobs = [], startJobTime = 1, processedJobs = []) => {

    // Base condition
    let maxTotalWeight = 0
  
    for (let i = 0; i < jobs.length; i++) {
      const [startTime, endTime] = jobs[i]
      if (startTime >= startJobTime && !processedJobs.includes(i)) {
        const currentWeight = findMaxJobWeight(jobs, endTime, [...processedJobs, i])
        maxTotalWeight = Math.max(currentWeight, maxTotalWeight)
      }
    }
  
    if (maxTotalWeight === 0) {
      return processedJobs.reduce((totalWeight, jobIndex) => {
        totalWeight += jobs[jobIndex][2]
        return totalWeight
      }, 0)
    }
  
    return maxTotalWeight
  
  }
  
  
  const jobs = [
    [1, 2, 50],
    [3, 5, 20],
    [6, 19, 100],
    [2, 100, 200]
  ]
  
  console.log(findMaxJobWeight(jobs))