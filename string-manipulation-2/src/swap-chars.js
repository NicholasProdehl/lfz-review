/* exported swapChars */
function swapChars(firstIndex, secondIndex, string){
  let newString = '';
  console.log("second Index: ", string[secondIndex]);
  for(let i = 0; i < string.length; i++){
    if(i === secondIndex){
      newString += string[firstIndex];
    }
    else if(i === firstIndex){
        newString += string[secondIndex];
    } else{
      newString += string[i];
    }
  }
  return newString;
}
