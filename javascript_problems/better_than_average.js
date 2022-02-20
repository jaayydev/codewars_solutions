// 8 KYU
function betterThanAverage(classPoints, yourPoints) {
  
    let sum = (previousValue, currentValue) => previousValue + currentValue;

    return yourPoints > (classPoints.reduce(sum)) / classPoints.length ? true : false
}
