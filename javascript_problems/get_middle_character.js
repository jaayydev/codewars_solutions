// 7 KYU
function getMiddle(s){
    let middle = ""
  
    // If the word has an even amount of characters then there is 2 middle characters
    if(s.length % 2 == 0) {
        middle = s.charAt((s.length / 2) - 1) + s.charAt(s.length / 2) 
    }
    // If the word has an odd amount of characters then there is only 1 middle character
    else {
        middle = s.charAt(s.length / 2)
    }

    return middle
}

// Alternative solution using slice
function getMiddle(s){

  return s.slice((s.length-1)/2, s.length/2+1);
  
}