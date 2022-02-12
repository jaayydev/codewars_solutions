// 7 KYU
function digitize(n) {

    let arr = String(n).split("")

    let num = arr.map(element =>  {
        return Number(element)
    });

    return num
}

// Alternative one line solution
function digitize(n) {
    return String(n).split('').map(Number);
  }