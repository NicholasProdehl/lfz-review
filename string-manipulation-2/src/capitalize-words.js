/* exported capitalizeWords */
function capitalizeWords(string){
  let lowerCased = string.toLowerCase();
  let arr = lowerCased.split(" ");
  let finalString = '';
  let restOfWord = '';
  for(let i = 0; i < arr.length; i++){
    let word = arr[i]
     for (let i = 1; i < word.length; i++) {
    restOfWord += word[i];
    }
    if(i === 0){
      finalString += word[0].toUpperCase() + restOfWord;
    } else{
      finalString += ' ' + word[0].toUpperCase() + restOfWord;
    }
    restOfWord = '';
  }
  return finalString;
}


/*
Take a string and split it into individual words,

*/
