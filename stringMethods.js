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

  for(var i = start; i <= end; i = i + 1 ){
    substring += string[i];
    // substring = substring + string[i];
    // console.log(substring);
  }

  return substring;
}

// substring('hello world', 2, 2);
// substring('hello world', 2, undefined)

function substring(string, start, length) {
  start = start || 0;
  length = length || string.length;
  var end = start + length;
  var substring='';

  if (start >=string.length) {
    return substring;
  }

  if(end > string.length){
    end = string.length;
  }

  for (var i = start; i < end; i++){
    substring += string[i];
  }
  return substring;
}

function concat(){
  var result = "";
  for (var i = 0; i < arguments.length; i++){
    result += arguments[i];
  }
  return result;
}

function repeat(string, count) {
  var result ="";
  for (var i = 0; i < count; i++){
    result += string;
  }
  return result;
}

function toLowerCase (string){
  var result = "";
  var code = 0;
  for (var i = 0; i < string.length; i++){
    code = string[i].charCodeAt(0);
    if(65 <= code && code <= 90 ){
      code = code + 32;
    }
    result += String.fromCharCode(code);
  }
  return result;
}

function toUpperCase(string) {
var result = "";
var code = 0;
for (var i = 0; i < string.length; i++){
  code = string[i].charCodeAt(0);
  if(97 <= code && code <= 122 ){
    code = code - 25; // функция работает некорректно, ошибка в этой строчке!!!
  }
  result += String.fromCharCode(code);
}
return result;
}


/**
 * функция отрезает ВСЕ пробелы с начала и конца строки
 * возвращает строку
 */
function trim(string) {
var result = "";

}

/**
 * получает на вход строку string и символ symbol
 * возвращает исходную строку без символов symbol
 */
function vypilit(srting, symbol){

}



function argumentsLog() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
