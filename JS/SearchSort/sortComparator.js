// Create a JS sort comparator function that would sort string by length 
// This is fairly simple. 
// If it is an array of strings, strings all have a property of length, 
// which can be used to sort the array 

// var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned stark']; 

// function sortComparator(a, b){
//   return a.length - b.length; 
// }

// console.log(mythical.sort(sortComparator))


// sort string elements, putting strings with a first, as shown here

// var mythical = ['dragon', 'slayer', 'magic', 'wizard of oz', 'ned tark']; 

// function sortComparator(a,b){
//   return a.indexOf("a") - b.indexOf("a"); 
// }

// console.log(mythical.sort(sortComparator))


// sort object elements by the number of properties

var mythical = [{prop1:'', prop2:''}, {prop1:'', prop2:'', prop3:''}, {prop1:'', prop2:''}];

function sortComparator(a, b){
  return Object.keys(a).length - Object.keys(b).length;
}

console.log(mythical.sort(sortComparator)); 
