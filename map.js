var words = ["ground", "control", "to", "major", "tom"];

/**
* This function creates a new array with the results of calling a provided function on every element in this array.

* @param [array], function
* @return [new array]
*/

function map(arr, callback) {
  var modArr = [];

  arr.forEach(function(element) {
    modArr.push(callback(element));
  });

  return modArr;
}


console.log(map(words, function(word) {
  return word.length;
}));
