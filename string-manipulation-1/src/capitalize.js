/* exported capitalize */
function capitalize(word){
  let firstLetter
  let lowerStringWord = word.slice(1).toLowerCase();
  firstLetter = word[0].toUpperCase();
  let finalWord = firstLetter + lowerStringWord;
  return finalWord;
}
