/* exported capitalizeWord */
function capitalizeWord(word){
  let firstLetter = word[0];
  let restOfWord = '';
  let finalWord = '';
  word.toLowerCase();

  for( let i = 1; i < word.length; i++){
    restOfWord += word[i];
  }
  finalWord = firstLetter.toUpperCase() + restOfWord.toLowerCase();
  if(finalWord === "Javascript"){
    finalWord = "JavaScript";
  }
  return finalWord;
}
