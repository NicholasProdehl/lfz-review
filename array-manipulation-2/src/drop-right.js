/* exported dropRight */
function dropRight(array, count){
  let newArr = [];
  for(let i = 0; i < array.length - count; i++){
    newArr.push(array[i]);
  }
  return newArr;
}
