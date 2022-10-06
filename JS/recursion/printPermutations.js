// print all permutations of an array 
// the premise is to swap elements of the array in every possible position

// Base case: beginIndex is equal to endIndex 
// when this occurs, the function should print the current permutation 

// Permutations: We will need to swap the elements 
function swap(strArr, index1, index2) {
  var temp = strArr[index1];
  strArr[index1] = strArr[index2]; 
  strArr[index2] = temp; 
}

function permute(strArr, begin, end) {
  if (begin == end) {
    console.log(strArr); 
  } else {
    for (var i = begin; i < end + 1; i++) {
      swap(strArr, begin, i); 
      permute(strArr, begin + 1, end); 
      swap(strArr, begin, i)
    }
  }
}

function permuteArray(strArr) {
  permute(strArr, 0, strArr.length - 1); 
}

permuteArray(["A", "C", "D"]); 