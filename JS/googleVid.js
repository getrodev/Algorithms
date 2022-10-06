// Naive solution 
// function hasPairWithSum(arr, sum) {
//     var len = arr.length; 
//     for(var i = 0; i < len-1; i++) {
//         for (var j = i+1; j<len; j++){
//             if (arr[i] + arr[j] === sum) 
//                 return true; 
//                 console.log(arr[i] + arr[j])
//         }
//     }
//     return false; 
// }
const arr = [6, 4, 3, 2, 1, 7]
// hasPairWithSum(arr, 7)


// Better 

function hasPairWithSum2(arr, sum) {
    const mySet = new Set(); 
    const len = arr.length; 
    for (let i = 0; i < len; i++){
        if (mySet.has(arr[i])) {
            return true; 
            console.log('oui')
        }
        mySet.add(sum - arr[i]); 
    }
    return false; 
}

hasPairWithSum2(arr, 9)