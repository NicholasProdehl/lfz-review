/* exported drop */
function drop(array, count){
  let newArr = [];
  for(let i = count; i < array.length; i++){
    newArr.push(array[i]);
  }
  return newArr;
}
