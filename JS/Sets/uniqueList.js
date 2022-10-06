// 
function uniqueList(arr1, arr2) {
  var mySet = new Set(arr1.concat(arr2)); 
  return Array.from(mySet); 
}

console.log(uniqueList([1,1,2,2],[2,3,4,5])); 

//Object(n + m)