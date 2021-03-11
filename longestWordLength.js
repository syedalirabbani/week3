//--------------------
//largest words in length
//----------------

function findLongestWordLength(str){
  var max = 0;
  var words = str.split(" ")
  
  for (var i =0; i<words.length; i++){
    if(words[i].length > max){
      max = words[i].length;
    }
  }
  return max;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); 
//should return 6
