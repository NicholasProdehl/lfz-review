/* exported take */
function take(array, count){
  let newArr = [];
    for(let i = 0; i < count; i++){
      if(array.length > count){
        newArr.push(array[i])
      }
    }
    return newArr;
}
