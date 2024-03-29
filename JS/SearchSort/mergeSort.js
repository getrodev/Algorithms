// Mergesort works by dividing the array into subarrays until each array has one element. 

function merge(leftA, rightA){
  var results = [], leftIndex=0, rightIndex=0; 

  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if(leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex++]); 
    } else {
      results.push(rightA[rightIndex++]);
    }
  }

  var leftRemains = leftA.slice(leftIndex);
  var rightRemains = rightA.slice(rightIndex); 

  // add remaining to result array 
  return results.concat(leftRemains).concat(rightRemains); 
}

function mergeSort(array) {
  if(array.length<2) {
    return array.length; 
    // Base case: array is now sorted since it's just 1 element
  }

  var midpoint = Math.floor((array.length)/2), 
      leftArray = array.slice(0, midpoint), 
      rightArray = array.slice(midpoint); 

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

console.log(mergeSort([6,1,23,4,2,3]))

// TC O(nlog2(2))
// SC O(n)