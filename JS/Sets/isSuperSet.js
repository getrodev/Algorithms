// a set is a "superset" of another set if it contains all the elemnts of the other set. 
function isSuperset(setA, subset) {
  for (var elem of subset) {
    if (!setA.has(elem)) {
      return false; 
    }
  }
  return true; 
}

var setA = new Set([1,2,3,4]), 
    setB = new Set([2, 3]), 
    setC = new Set([5]); 

console.log(isSuperset(setA, setB)); // true 
// because setA has all elements that set B does 
console.log(isSuperset(setA, setC)); // false 
// because setA does not contain 5 which setC contains 
