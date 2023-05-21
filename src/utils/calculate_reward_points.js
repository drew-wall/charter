const calculateRewardPoints = purchAmt => {
    let points = 0

    if (purchAmt > 100) {
      points += (purchAmt - 100) * 2
    } 
    if (purchAmt >= 50) {
      points += Math.min(purchAmt, 100) - (purchAmt >= 100 ? 50 : 49)
    }

    return points
}

export default calculateRewardPoints
