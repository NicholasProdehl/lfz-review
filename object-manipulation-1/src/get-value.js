/* exported getValue */
function getValues(object){
  let newArr = [];
  for(let key in object){
    newArr.push(object[key]);
  }
  return newArr;
}
