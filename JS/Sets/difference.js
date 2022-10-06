// the difference of set A from set B 
// is all of the elements in set A that are not in set B.

function differenceSet(setA, setB) {
  var difference = new Set(setA); 
  for (var elem of setB) {
    difference.delete(elem); 
  }
  return difference; 
}

var setA = new Set([1, 2, 3, 4]), 
    setB = new Set([2, 3]); 

console.log(differenceSet(setA, setB)); 