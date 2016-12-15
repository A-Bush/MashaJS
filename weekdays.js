var a = "weekday";
var b = "weekend";
var userInput = prompt("put the day").toLowerCase();


// var userInput = prompt("put the day");
// userInput = userInput.toLowerCase();


/* if decision */
// if (userInput=="monday" || userInput=="tuesday" || userInput=="wednesday" || userInput=="thursday" || userInput=="friday"){
//   alert(a);
// }
//
// if (userInput=="saturday" || userInput=="sunday"){
//   alert(b);
// }

/* switch-case decision */

switch (userInput) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert(a);
    break;
  case "saturday":
  case "sunday":
    alert(b);
    break;
}
