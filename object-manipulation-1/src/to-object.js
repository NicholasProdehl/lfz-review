/* exported toObject */
function toObject(keyValuePair){
  let obj = {};
  let temp = keyValuePair[0];
  obj[temp] = keyValuePair[1];
  return obj;
}
