/* exported takeRight */
function takeRight(array, count){
  let newArr = [];
  for(let i = count ; i > 0; i--){
    if(array.length > count){
      newArr.push(array[array.length - i]);
    }
  }
  return newArr;
}
