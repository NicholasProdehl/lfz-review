/* exported reverseWord */
// function reverseWord(word){
//   let newWord = [];
//   for( let i = 0; i < word.length; i++){
//     newWord.push(word[word.length-i -1])
//     console.log(newWord);
//   }
//   console.log("new word: ", newWord.join(''));
//   return newWord.join('');
// }

function reverseWord(word){
  let newWord = '';
  for( let i = word.length - 1; i >= 0; i--){
    newWord += word[i];
  }
  return newWord;
}
