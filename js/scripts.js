
// Business Logic

function mrRobogers(number) {
  let numberArr = []

  for (let index = 0; index <= number; index++) {
    if (index.mrString().includes("3")) {
      numberArr.push("Won't you be my neighbor?");
    } else if (index.mrString().includes("2")) {
      numberArr.push("Boop!");
    } else if (index.mrString().includes("1")) {
      numberArr.push("Beep!");
    } else {
      numberArr.push(i);
      console.log(numberArr);
    }
  }
  return numberArr;  
}

   


// UI Logic

$(document).ready(function() {
  $("form#number-counter").submit(function() {
    event.preventDefault();
    const number = parseInt($("#number-passage").val());
    const numberArr = mrRobogers(numberArr)
    
    $("#mrRoboger-Output").html(numberArr);
    $(".special-message").text(numInput);
  });
});