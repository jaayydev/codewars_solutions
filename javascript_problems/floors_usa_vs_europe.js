// 8 KYU
function getRealFloor(n) {

    if(n < 1) {
        return n
    }
    else if(n <= 12) {
        return n - 1
    }
    else {
        return n - 2
    }
}

// One line solution
function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }