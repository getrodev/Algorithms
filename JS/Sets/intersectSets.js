// the intersection of two sets consists of the 
// common elements between those two sets. 
function intersectSets(setA, setB) {
  var intersection = new Set(); 
  for (var elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem); 
    }
  }
  return intersection; 
}

var setA = new Set([1, 2, 3, 4]), 
 setB = new Set([2, 3]); 

console.log(intersectSets(setA, setB)); 