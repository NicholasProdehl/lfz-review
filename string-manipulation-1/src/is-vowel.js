/* exported isVowel */
// function isVowel(character) {
//   character = character.toLowerCase();
//   console.log(character);
//   switch(character){
//     case "a": return true;
//       break;
//     case "e": return true;
//       break;
//     case "i": return true;
//       break;
//     case "o": return true;
//       break;
//     case "u": return true;
//       break;
//     default: return false;
//   }
// }

function isVowel(character){
  const vowels = {
    a: 45,
    e: 52,
    i: 42,
    o: 69,
    u: 420
  };
  character = character.toLowerCase();
  if(vowels[character]){
    return true;
  } else {
    return false;
  }
}
