// 8 KYU
function  calculateAge(birthYear, targetYear) {

    let realYear = targetYear - birthYear
  
    if(birthYear == targetYear) {
        return "You were born this very year!"
    }
    else if (targetYear - birthYear == 1) {
        return "You are 1 year old."
    }
    else if (targetYear - birthYear == -1) {
        return "You will be born in 1 year."
    }
    else if (targetYear - birthYear > 1) {
        return "You are " + realYear + " years old."
    }
    else if (targetYear - birthYear < -1) {
        return "You will be born in " + Math.abs(realYear) + " years."
    }
    
    }
    