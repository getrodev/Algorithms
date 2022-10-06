// quicksort works by obtaining a pivot and partitioning the array around it (bigger elements on one side and smaller elements on the other side)

function quickSort(items) {
  return quickSortHelper(items, 0, items.length-1); 
}

function quickSortHelper(items, left, right) {
  var index; 
  if (items.length > 1) {
    index = partition(items, left, right); 

    if (left < index -1) {
      quickSortHelper(items, left, index - 1); 
    }

    if (index < right) {
      quickSortHelper(items, index, right)
    }
  }
  return items; 
}

function partition(array, left, right) {
  var pivot = array[Math.floor((right + left)/2)]; 
  while (left <= right) {
    while(pivot > array[left]) {
      left++; 
    }

    while (pivot < array[right]) {
      right--; 
    }
    
    if (left <= right) {
      var temp = array[left]; 
      array[left] = array[right]; 
      array[right] = temp; 
      left++; 
      right--; 
    }
  }
  return left; 
}

console.log(quickSort([6,1,23,4,2,3])); 

// TC => O(nlog2(n)) on avg O(n2) for worst case
// SC O(log2(n))
// Use quicksort algorithm when the average performace should be optimal. 
// This has to do with the fact that quicksort works better for the RAM cache 