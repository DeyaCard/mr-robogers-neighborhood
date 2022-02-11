
// Business Logic


function beepBoop(number) {

  for (let i = 0; 1 <= num; i++) {


  }




// UI Logic



$(document).ready(function(){
  $("form#number-counter").submit(function(event){
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