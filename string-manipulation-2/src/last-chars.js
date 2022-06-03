/* exported lastChars */
function lastChars(length, string){
  let startingPoint = string.length - length;
  let newString = '';
  if(length >= string.length){
    return string;
  }
  for(let i = 0; i < length; i++){
    newString += string[startingPoint + i];
  }
  return newString;
}
