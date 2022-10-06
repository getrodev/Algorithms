// use the implement square root function for an integer without using any math libraries
// The first solution that may come to mind is trying 
// every possibility from 1 to the number, 

// function sqrtIntNaive(number) {
//   if (number == 0 || number == 1) 
//     return number; 

//   var index =1, square = 1; 

//   while(square < number) {
//     if (square == number){
//       return square; 
//     }

//     index++; 
//     square = index*index; 
//   }
//   return index; 
// }

// console.log(sqrtIntNaive(9));

// The binary search algorithm can be applied to this problem. 
// This is essentially a linear search since it has to linearly check one by one the value for the square root 


// **** Binary solution***
//  instead of going up by 1 by 1, partition the range into upper half and lower half between 1 and given number as follows 

// function sqrtInt(number) {
//   if (number == 0 || number == 1) return number; 

//   var start = 1, end = number, ans; 

//   while(start <= end) {
//     let mid = parseInt((start+end)/2); 

//     if (mid*mid == number) return mid; 

//     if (mid*mid<number){
//       start = mid+1; // use the upper section 
//       ans = mid;
//     } else {
//       end = mid-1; // use the lower section 
//     }
//   }
//   return ans;
// }

// console.log(sqrtInt(16)); 

// ******** 
// Find a square root of a float
// For this exercise, the only difference is using a threshold value to calculate accuracy to 
// because the square root of a double will have decimals. 

function sqrtDouble(number) {
  var threshold = 0.1; 
  // 9 try middle 
  var upper = number; 
  var lower = 0; 
  var middle; 
  while(upper-lower>threshold){
    middle = (upper+lower)/2; 
    if(middle*middle>number){
      upper = middle; 
    } else {
      lower = middle; 
    }
  }
  return middle 
}

console.log(sqrtDouble(9)); 