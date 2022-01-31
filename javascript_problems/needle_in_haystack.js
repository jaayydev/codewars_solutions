// 8 KYU
 function findNeedle(haystack) {
     return "found the needle at position " + haystack.findIndex(element => element === 'needle')
   }


//    Alternative variation
  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }
