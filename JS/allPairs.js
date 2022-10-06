//const boxes = [1,2,3,4,5]; 

// function logAllPairsOfArray(arr) {
//     for( let i = arr[0]; i < arr.length; i++) {
//         for(j = arr[1]; j < i; j++ ) {
//             console.log(i )
//             console.log(j)
//         }
//     }

// }

// logAllPairsOfArray(boxes)

const boxes = ['a','b','c','d','e']
function logAllPairsOfArray(array) {
    for(let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}

logAllPairsOfArray(boxes)