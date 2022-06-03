/* exported chunk */
function chunk(array, size){
  let finalArr = [];
  let quant = array / size;
  let lastArr = array % size;
  for(let i = 0; i < array.length; i+= size){
    finalArr.push(array.slice(i, i + size));
  }
  return finalArr;
}
