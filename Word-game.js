function longestWord(string){
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length ; i++) {
        if (longest <= str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
function shortestWord(string1) {
    var str1 = string1.split(" ");
    var shortest = 0;
    var word1 = null;
    for (var i = 0; i < str1.length ; i++) {
        if (shortest == 0 || str1[i].length <= shortest ) {
            shortest = str1[i].length;
            word1 = str1[i];
        }
    }
    return word1;
}
function wordLengths(string2){ 
  var str2 = string2.split('');
  var word = null
  var sum = 0;
  for (var i = 0; i < str2.length; i++) { 
    word = (str2[i].trim()).length;
    sum += word;
  }
  return sum;
}