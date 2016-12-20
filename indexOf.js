function indexOf(string, symbol) {
  for(var i=0; i<=string.length-1; i=i+1){
    console.log(i);
    if(string[i]==symbol){
      console.log("FOUND");
      return i;
    }
  }
  return -1;
}

function lastIndexOf(string, symbol) {
  for(var i=string.length-1; i>=0; i=i-1){
    console.log(i);
    if(string[i]==symbol){
      console.log("WTF");
      return i;
    }
  }
  return -1;
}
/**
 * Get 2 params: string and start position
 * Returns substring from position
 * @params : string - source string
 * @params : start - start position
 * @params : end - OPTIONAL index end of substring
 */
function substr(string, start, end) {
  start = start || 0;
  end = end || string.length - 1;

  var substring='';

  // if(end < start){
  //   return string;
  // }

  if (end >= string.length) {
    end = string.length - 1;
  }

  for(var i = start; i <= end; i++){
    substring += string[i];
    // substring = substring + string[i];
    // console.log(substring);
  }

  return substring;
}


function substring(string, start, length) {

}
