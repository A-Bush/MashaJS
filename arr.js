/* циклические конструкции --while-- */
var counter = 0;
while (counter <= 3) {
  counter = counter + 1;
  console.log(counter);
}

console.log(counter);

/* циклические конструкции -- do-while -- */
counter = 0;
do{
  counter = counter + 1;
  console.log(counter);
} while (counter <= 3)

/* циклические конструкции -- for -- */

for (var counter = 0; counter <= 3; counter += 3) {
  console.log(counter);
}


/* написать функцию, которая получает длину массива и значение, которым его заполнить
например fill(3,10) вернёт [10, 10, 10];
*/


function fill(length, value) {
  var a = [];
  for(var i = 0; i < length; i++){
    a[i] = value;
  }
  return a;
}

/* написать функцию, которая возвращает строку в обратном порядке */
// string = "Ivan"
// string.length = 4

function reverseString(string) {
  var str = "";
  var arr = [];

  /*split нарезка строки*/
  for (var i = 0; i < string.length; i++){
    arr[i] = string[i];

  }

  // arr = ["I", "v", "a", "n"]

  /* reverse изменение порядка на обратный*/

  for (var i = arr.length - 1; i >= 0 ; i--) {
    str += arr[i];
    // str = "n"
    // str = "na"
    // str = "nav"
    // str = "navI"
  }


  return str;
}
