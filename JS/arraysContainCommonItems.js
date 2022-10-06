// 15 steps approach 
//****/ 1. When the interviewer says the question, write down the key points (i.e sorted ). 
// Make sure you have all the details, show how organized you are. 
// Key points 
// 2 parameters - no size limit 
// return true or false 
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true 
//  const array1 = ['a', 'b', 'c', 'x']; 
//  const array2 = ['z', 'y', 'i'];
// function containsCommonItem(arr1, arr2) {
//     for(let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 console.log('merde')
//                 return true;
//             }
//         }
//     }
//     return false; 
// }
// containsCommonItem(array1, array2);
// O(a * b)
// ------- we can make it so much faster ---////

const array1 = ['a', 'b', 'c', 'x']; 
const array2 = ['z', 'y', 'a'];

// array1 ==> obj {
    // a: true, 
    // b: true, 
    // c: true, 
    // x: true 
//}
// array2[index] === obj.properties

// function containsCommonItem2(arr1, arr2) {
//     // loop through first array and create object where properties === items in the array 
//     let map = {}; 
//     for(let i = 0; i < arr1.length; i++) {
//         if(!map[arr1[i]]) {
//             const item = arr1[i]; 
//             map[item] = true 
//         }
//     }
//      console.log(map)
//     // loop through second array and check if item in second array exists on created object
//     for (let j=0; j < arr2.length; j++) {
//         if (map[arr2[j]]) {
//             return true; 
//         }
//     }
//     return false
// }

// O(a + b) Time complexity 

// containsCommonItem2(array1, array2);


// You can also do it with built in methods 

function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}

containsCommonItem3(array1, array2)
