// Flatten an object 
// to do this, itereate over any property and recursively check it for child properties 
// passing in the concatenated string name 

// Base case: The base case for this problem is when input is not an object 

function flattenDictionary(dictionary) {
  var flattenedDictionary = {}; 

  function flattenDictionaryHelper(dictionary, propName) {
    if (typeof dictionary != 'object') {
      flattenedDictionary[propName] = dictionary; 
      return; 

    }
    for (var prop in dictionary) {
      if (propName == ''){
        flattenDictionaryHelper(dictionary[prop], propName+prop); 
      } else {
        flattenDictionaryHelper(dictionary[prop], 
          propName+'.'+prop); 
      }
    }
  }

  flattenDictionaryHelper(dictionary, ''); 
  return flattenedDictionary; 

}

var dictionary = {
  'key': '1', 
  'key2': {
    'a' : '2', 
    'b' : '3', 
    'c' : {
      'd' : '3', 
      'e' : '1'
    }
  }
}

flattenDictionary(dictionary); 