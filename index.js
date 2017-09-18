function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

function iterativeLog(array) {
  array.forEach(console.log("${index}: ${element}");)
}

function iterate(callback) {
  array = [1,2,3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
