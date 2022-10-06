// function mergeSortedArrays(arr1, arr2) {
//     // loop through first array and create objects where properties === items in the array 
//     const finalArray = []
//     const arrMap = {}
//     const arr1Length = arr1.length -1; 
//     for(let i=0; i <= arr1Length; i++ ) {
//         const item = arr1[i]
//         arrMap[item] = arr1[i]
//     }
//     console.log(arrMap)
//     // iterate over arr2, 
//     // check if array 2 number is greater than any of the other properties 
//     for(let j=0; j < arr2.length; j++) {
//         if (arr2[j] > 0) {
//             finalArray.push('hi')
//         }
//     }
//     return finalArray
// }
// mergeSortedArrays([1, 2, 3, 5, 7], [4, 6, 7])



function mergeSortedArrays(array1, array2) {

    const mergeArrays = []; 
    let array1Item = array1[0]; 
    let array2Item = array2[0]; 
    let i = 1; 
    let j = 1; 
    // Check input 
    if (array1.length === 0) {
        return array2; 
    }
    if (array2.length === 0) {
        return array1; 
    }
    while(array1Item || array2Item) {
        if(!array2Item || array1Item < array2Item) {
            mergeArrays.push(array1Item)
            array1Item = array1[i]; 
            i++; 
        } else {
            mergeArrays.push(array2Item)
            array2Item = array2[j];
            j++; 
        }
    }
    console.log(mergeArrays)
    return mergeArrays; 
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);