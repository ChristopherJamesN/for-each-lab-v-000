function iterativeLog(array) {
  array.forEach(console.log('test'))
}

function iterate(callback) {
  array = [1,2,3]
  array.forEach(callback)
  return array
}

function doToArray(array, callback){
  array.forEach(callback)
}
