// using sets to check for duplicates in an array 

function checkDuplicates(arr) {
  var mySet = new Set(arr); 
  return mySet.size < arr.length; 
}

console.log([1,2,3,4]); 
console.log([1,1,2,3,4,5]); 
