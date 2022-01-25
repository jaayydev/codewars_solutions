// Modern solution to the problem
function smash (words) {
    return words.toString().replaceAll(',', ' ')
 };

//  Older JavaScript solution
function smash (words) {
    newWords = words.toString()

    return newWords.replace(/,/g, ' ');
 };

//  Improved codewars solution
smash = function (words) {
    return words.join(" ");
  };