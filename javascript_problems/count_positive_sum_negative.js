// 8 KYU
function countPositivesSumNegatives(input) {
    
    let resultArr = []
    count = 0
    sum = 0

    console.log(input);
     if(input == null){
         input = []
     }

    input.forEach(element => element > 0 ? count++ : count+= 0 )
    input.forEach(element => element < 0 ? sum+= element : sum+= 0 );

    resultArr[0] = count
    resultArr[1] = sum

    if(resultArr[0] == 0 && resultArr[1] == 0) {
        resultArr = []
    }
    return resultArr
}
