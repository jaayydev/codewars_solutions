// 8 KYU
function century(year) {
    if (year >999 && year / 100 > Math.floor(year/100)) {
        return Math.floor((year / 100) + 1)
    }
     else if (year <1000 && year / 100 > Math.floor(year/100)) {
         return Math.floor((year / 100) + 1)
     }
     else if (year >999 && year / 100 == Math.floor(year/100)) {
        return Math.floor(year / 100)
     }
     else if (year <1000 && year / 100 == Math.floor(year/100)) {
        return Math.floor(year / 100)
     }

  }

// Improved version
function century(year) {
    return Math.ceil(year/100); //using ceiling method to round up to nearest century (100)
  }