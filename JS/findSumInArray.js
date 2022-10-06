const array = [1, 2, 3, 1] // No 

const array2 = [1, 2, 4, 4] // Yes  

// function findPairSumInArray(arr, sum) {
//     for (i = 0; i < arr.length; i++) {
//         for (j = 1; j < arr.length; j++) {
//             console.log( arr[i], "+", arr[j], "=",arr[i] + arr[j]);
//             if (arr[i] + arr[j] == sum) {
//                console.log("Yes")
//                 break; 
//             } else {
//                 console.log("No")
//             }
//         }
//     }
// }

// another one from me... 
// function findPairSumInArrayDeux(arr, sum) {
//     let newArr = []
//     for (i = 0; i < arr.length; i++) {
//         //console.log(arr[i])
//         newArr.push(arr[i])
//     }

//     for (i = 1; i < arr.length; i++) {
//         newArr.push(arr[i])
//         //console.log(arr[i])
//     }

//    if (newArr.length === (arr.length * 2 - 1)) {
//         for (i = 0; i < newArr.length; i++) {
//              if (newArr[i] + newArr[i + 1] == sum) {
//                 console.log('yes')
//                 break; 
//              } else {
//                 console.log('no');
//              } 
//         }
//         console.log(newArr)
//    }
// }



//findPairSumInArrayDeux(array2, 8); 


// Let's try to implement his solution 

function findPairSumInArrayThree(arr, sum) {
    let begin  = arr[0]

    let end = arr[arr.length - 1];

    const firstSum = begin + end; 

    for(i = 0; i < arr.length; i++) {
        if (firstSum == sum) {
            console.log("Yes we have a sum YES YES")
            break; 
        } else if (firstSum > sum){
            console.log(end)
            arr.pop()
            end = arr[arr.length - 1]; 
            console.log(end)
        } else if (firstSum < sum) {
            console.log(begin)
            arr.shift()
            console.log(arr.length)

        } else {
            //console.log("NO NO NO NO"); 
        }
    } 
}


findPairSumInArrayThree(array, 8)