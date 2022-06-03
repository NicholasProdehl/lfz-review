/* exported numVowels */
function numVowels(string){
  let numVowels = 0;
  let temp = string.toLowerCase();
  for( let i = 0; i < string.length; i++){
    switch(temp[i]){
      case "a": numVowels++;
        break;
      case "e": numVowels++;
        break;
      case "i": numVowels++;
        break;
      case "o": numVowels++;
        break;
      case "u": numVowels++;
        break;
    }
  }
  return numVowels;
}
