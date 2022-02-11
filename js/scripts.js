
// Business Logic


function mrRobogers(number) {
  let numberArr = []

  for (let i = 0; i <= number; i++) {
    if (i.toString().includes("3")) {
      numberArr.push("Won't you be my neighbor?");
    } 
    
    
    else if (i.toString().includes("2")) {
      numberArr.push("Boop!");
    } else if (i.toString().includes("1")) {
      numberArr.push("Beep!");
    }else {
      numberArr.push(index);
    }
  }
  return numberArr
}







// UI Logic



$(document).ready(function() {
  $("form#number-counter").submit(function() {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const number = $("#number").val();
    const numberCount = numberCounter(passage);
    const occurrencesOfNumber = numberOfOccurrencesInText(number, passage);
    $("#special-message").html(numberCount);
    $("#selected-count").html(occurrencesOfNumber);
    $("#bolded-passage").html(boldPassage(number, passage));
  });
});