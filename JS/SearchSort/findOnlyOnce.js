// Find an element within an array that appears only once 
// Given a sorted array in which all elements appear twice (one after one) and one element
// appears only once, find that element in O(log2n) complexity. This can be done by modifying 
// binary search algorithm and checking the addition indices. 

function findOnlyOnce(arr, low, high) {
  if (low > high) {
    return null; 
  }

  if (low == high) {
    return arr[low]; 
  }

  var mid = Math.floor((high+low)/2); 
  console.log('mid', mid)

  if(mid%2 == 0) {
    if (arr[mid] == arr[mid+1]) {
      return findOnlyOnce(arr, mid+2, high); 
    } else {
      return findOnlyOnce(arr, low, mid); 
    }
  } else {

  }


}


function findOnlyOnceHelper(arr) {
  return findOnlyOnce(arr, 0, arr.length); 
}