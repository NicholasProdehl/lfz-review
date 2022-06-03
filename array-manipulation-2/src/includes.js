/* exported includes */
function includes(array, value){
  let bool = false;
  for(let i = 0; i < array.length; i++){
    if(array[i] === value){
      bool = true;
    }
  }
  return bool;
}
