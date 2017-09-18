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

}

function doToArray(array, callback){

}
