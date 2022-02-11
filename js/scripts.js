// Utility Logic

function noInputtedNumber(number, text) {
  return ((text.trim().length === 0) || (number.trim().length === 0));
}

// Business Logic


function beepBoop(text) {
  if (number.trim().length === 0) {
    return 0;
  }
  let numberCount = 0;
  const numberArray = text.split(" ");
  numberArray.forEach(function(element) {
    if (!Number(element)) {
    numberCount++;
    }
  });
  return numberCount;
}


function numberOfOccurrencesInText(number, text) {
  if (noInputtedNumber(number, text)) {
    return 0;
  }
  const numberArray = text.split(" ");
  let numberCount = 0;
  numberArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      numberCount++
    }
  });
  return numberCount;
}

// UI Logic

function boldPassage(word, text) {
  let htmlString = "p";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
     htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
     htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "<p>";
}


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