/* exported getWords */
function getWords(string){
  let finalArray = []
  if(string){
    finalArray = string.split(" ");
    return finalArray;
  }
  return finalArray;
}
