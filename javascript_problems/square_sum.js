// 8 KYU
function squareSum(numbers){

    let sum = 0
    let sqrArr = numbers.map(x => x * x);
    
    for(i = 0; i < sqrArr.length; i++) {
        sum += sqrArr[i]
    }

    return sum
}

// Alternative version

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }