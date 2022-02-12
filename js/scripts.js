
// Business Logic

function mrRobogers(number) {
  let numberArr = []

  for (let i = 0; i <= number; i++) {
    if (i.mrString().includes("3")) {
      numberArr.push("Won't you be my neighbor?");
    } else if (i.mrString().includes("2")) {
      numberArr.push("Boop!");
    } else if (i.mrString().includes("1")) {
      numberArr.push("Beep!");
    } else {
      numberArr.push(i);
      console.log
    }
  }
  return numberArr;  
}

   


// UI Logic

$(document).ready(function() {
  $("form#number-counter").submit(function() {
    event.preventDefault();
    const numInput = parseInt($("#number-passage").val());
    

    $(".special-message").text(numInput);
  });
});