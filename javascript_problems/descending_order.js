// 7 KYU

// One line solution
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

// Alternative longer solution
function descendingOrder(n){

  let descended = ""
  let biggest = 0
  let mystring = String(n).split(",").join("")
  let length = mystring.length

  for(j = 0; j < length; j++){
    biggest = 0

    for(i = 0; i < mystring.length; i++) {
      if(mystring.charAt(i) > biggest) {
        biggest = mystring.charAt(i)
      }
      
    }
    descended += biggest
    mystring = mystring.replace(biggest, "")
  }
   return Number(descended)
  }