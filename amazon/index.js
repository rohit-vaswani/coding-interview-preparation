function playSegments(coins) {

    // Construct left Array
    const len = coins.length
    const rightTotalPoints = []
    for (let i = len - 1; i >= 0; i--) {
        const rightValue = rightTotalPoints[i + 1] ?? 0
        const current = coins[i]
        const currentValue = rightValue + (current === 0 ? -1 : 1)
        rightTotalPoints[i] = currentValue
    }


    if (rightTotalPoints[0] < 0) {
        return 0
    }

    let leftTotalPoints = 0
    for (let i = 0; i < len; i++) {
        leftTotalPoints += coins[i] === 0 ? -1 : 1
        if (leftTotalPoints > rightTotalPoints[i]) {
            return i + 1
        }
    }

    return -1


}


const ans = playSegments([-1, -2, -1,0,-1])
console.log(ans)


