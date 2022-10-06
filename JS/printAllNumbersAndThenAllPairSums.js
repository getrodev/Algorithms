const numbers = [1, 2, 3, 4, 5]; 

// function printAllNumbersThenAllPairSums(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         for (j = 0; j < arr.length; j++) {
//             console.log(arr[i], arr[i] + arr[j]); 
//         }
//     }

// }

// function printAllNumbersThenAllPairSums() {

//     console.log('these are the numbers:'); 
//     numbers.forEach(function(number) {
//         console.log(number);
//     }); 

//     console.log('and these are their sums: '); 
//     numbers.forEach(function(firstNumber) {
//         numbers.forEach(function(secondNumber) {
//             console.log(firstNumber + secondNumber); 
//         })
//     })
// }

//O(n^2) cause of rule # 4