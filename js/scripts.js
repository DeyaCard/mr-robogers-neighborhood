
// Business Logic

function mrRobogers(number) {
  let numberArr = []

  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      numberArr.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      numberArr.push("Boop!");
    } else if (i.toString().includes("1")) {
      numberArr.push("Beep!");
    } else {
      numberArr.push(i);
    }
  }
  return numberArr;  
}
console.log
   


// UI Logic

$(document).ready(function() {
  $("form#number-counter").submit(function() {
    event.preventDefault();
    const passage = $("#number-passage").val();
    const number = $("#number").val();
    
    $(".special-message").text(number);
  });
});