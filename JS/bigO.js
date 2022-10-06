// function funChallenge(input) {
//     let a = 10;  // O(1)
//     a = 50 + 3;  // O(1)

//     for (let i = 0; i < input.length; i++) { // O(n)
//         anotherFunction();  // O(n)
//         let stranger = true; // O(n)
//         a++; 
//     }
//     return a; // O(1)
// }

// 3 + n + n + n + n

// BigO(3 + 4n)  => O(n)


// What is the Big O of the below function? 
// (Hint, you may wnat to go line by line)

// function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)
//     for (let i = 0; i < input; i++) { // O(n)
//         let x = i + 1;  // O(n)
//         let y = i + 2;  // O(n)
//         let z = i + 3;  // O(n)
//     }
//     for (let j = 0; j < input; j++) { // O(n)
//         let p = j * 2; // O(n)
//         let q = j * 2; // O(n)
//     }

//     let whoAmI = "I dont't know"; // O(1)
// }

// BigO(4 + 5n) => O(n)


// function printFirstItemThenFirstHalfThenSayHi100Times(items) {
//     console.log(items[0]);

//     var middleIndex = Math.floor(items.length / 2);
//     var index = 0; 

//     while (index < middleIndex) {
//         console.log(items[index]); 
//         index++; 
//     }

//     for (var i = 0; i < 100; i++) {
//         console.log('hi'); 
//     }
// }

//O(1 + n/2 + 100) => O(n)


// function compressBoxesTwice(boxes) {
//     boxes.forEach(function(boxes) {
//         console.log(boxes); 
//     }); 

//     boxes.forEach(function(boxes) {
//         console.log(boxes); 
//     }); 

// }

// O(2n) => O(n) X incorrect because of rule # 3

// correct answer is 

// O(a + b)


//**Space Complexity **/

// function boooo(n) {
//     for (let i = 0; i <.length; i++) {
//         console.log('booooo!')
//     }
// }

// boooo([1,2,3,4,5])


// space complexity of O(1)


function arrayOfHintTimes(n) {
    let hiArray = []; 
    for(let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    return hiArray; 
}

arrayOfHintTimes(6) // O(n)  --> space complexity

