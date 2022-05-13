/* exported getKeys */
function getKeys(object){
  let newArr = [];
  for(let key in object){
    newArr.push(key);
  }
  return newArr;
}
