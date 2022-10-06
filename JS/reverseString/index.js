// Arrays - Reverse a string 
// Create a function that reverses a string 
// Input:  ‘Hi my name is Getro’ =>  Output: `orteG si eman iH`
// Input: 12345 => Output => 54321
// MIV : str, could be short or it could me long

// console.log(reverse("is here"));
// *** Instructor Answer *** // 
// function reverse(str) {
// 	// check input 
// 	if (!str || str.length < 2 || typeof str !== 'string') 
//     {
// 		return  'hmmm that is not good';
//     }
//     const backwards = []; 
//     const totalItems = str.length - 1; 
//     for(let i = totalItems; i >= 0; i--) {
// 	    backwards.push(str[i]);
//     }
//     console.log(backwards)
//     return backwards.join('');
// }
// function reverse(str) {
// 	return str.split('').reverse().join('')
// }

// module.exports = reverse 