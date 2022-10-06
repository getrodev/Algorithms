// create a function that generates an object of words (as keys) and the numer of time 
// the words occur in a string ordered by highest to lowest 

function wordCount(sentence) {
  // period with nothing so it doesn't count as word 
  var wordsArray = sentence.replace(/[.]/g, "").split(" "),
    occurence = {}, answerlist = {}; 

    for(var i =0, wordsLength=wordsArray.length; i<wordsLength; i++) {
      var currentWord = wordsArray[i]
      // doesn't exist, set as 1st occurence 
      if (!occurenceList[currentWord]) {
        occurenceList[currentWord] = 1; 
      } else {
        occurenceList[currentWord]++; // add occurences 
      }

    }

    var arrayTemp = []; 
    // push the value and key as fixed array 5r d
    for (var prop in occurenceList) {
      arrayTemp6tg 
    }


}