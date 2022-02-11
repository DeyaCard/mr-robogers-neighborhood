
// Business Logic

function mrRobogers(number) {
  let numberArr = []

  for (let i = 0; i <= number; i++) {
   



// UI Logic

$(document).ready(function() {
  $("form#number-counter").submit(function() {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const number = $("#number").val();
    $("#special-message").html(numberCount);
  });
});