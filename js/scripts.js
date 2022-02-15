
// Business Logic

function mrRobogers(number) {
  let numberArr = []

  for (let index = 0; index <= number; index++) {
    if (index.toString().includes("3")) {
      numberArr.push("Won't you be my neighbor?");
    } else if (index.toString().includes("2")) {
      numberArr.push("Boop!");
    } else if (index.toString().includes("1")) {
      numberArr.push("Beep!");
    } else {
      numberArr.push(index);
    }
  }
  return numberArr;  
}

   


// UI Logic

$(document).ready(function() {
  $("form#number-counter").submit(function(event) {
    event.preventDefault();
    const number = ($("#number-passage").val());
    const numberArr = mrRobogers(number)
    console.log(numberArr);
    $("#mrRoboger-Output").html(numberArr);
    $("#special-message").text(numberArr);
  });
});
