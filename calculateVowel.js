function calculationVowel(sentence){
  
  var answer = 0;
  
  for (var i = 0; i < sentence.length; i++){
    if(sentence.charAt(i) == 'a' || sentence.charAt(i) == 'c' || sentence.charAt(i) == 'o' || sentence.charAt(i) == 'i' || sentence.charAt(i) == 'u'){
      answer++
    }
  }
    
  
  return answer;
  
}


//largest of four

function largestOfFour(arr) {
  var answer = []

for(var i =0; i4; i++){
  var max = arr[i][0]
for(var j =0; j<4; j++){
if (arr[i][j] > max ){
  max = arr[i][j]
}
}
  answer.push(max);
}

  return answer;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
