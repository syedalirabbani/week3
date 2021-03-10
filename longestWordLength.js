//--------------------
//largest words in length
//----------------

function findLongestWordLength(str){
  var max = 0;
  var str = str.split(" ")
  
  for (var i =0; i<str.length; i++){
    if(str[i].length > max){
      max = str[i].length;
    }
  }
  return max;
}

console.log(findLongestWordLength("The quick brown fox jumps over the lazy dog"));
