// Find if Two elements of an Array add up to a given number
// The simple approach to this problem is to check every other element for each element in the array 

// function findTwoSum(array, sum) {

//   for(var i=0, arrayLength = array.length; i<arrayLength; i++){
//     for(var j=i+1; j<arrayLength;j++) {
//       if(array[j]+array[i] == sum){
//         return true; 
//       }
//     }
//   }
//   return false; 
// }

// console.log(findTwoSum([1,2,3,4], 10));
// TC: O(n2) SC: O(1)

// A better approach is to store the already visited numbers and check against them. This way, it can be done in linear time. 

function findTwoSum(array, sum){
  var store = {}; 

  for(var i=0, arrayLength = array.length; i<arrayLength; i++){
    if(store[array[i]]){
      console.log('1', store[array[i]])
      //console.log(store)
      return true; 
    } else {
     // console.log(store)
      //console.log('2', store[sum-array[i]])
      store[sum-array[i]] = array[i]; 
      console.log(store)
    }
  }
  return false; 
}

console.log(findTwoSum([1,2,3,4], 7));