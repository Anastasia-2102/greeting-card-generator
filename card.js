let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let makeButton = document.getElementById("make-button");
let cardText = document.getElementById("card-text");
let closingText = document.getElementById("closing-text");
let surpriseButton = document.getElementById("surprise-button");
let cardSection = document.getElementById("card-section");
let resetButton = document.getElementById("reset-button");
let bonusLine = document.getElementById("bonus-line");

let closings = [
  "Keep shining.",
  "Stay amazing.",
  "Keep being awesome.",
  "Have a wonderful day.",
  "With lots of good wishes."
];

let cardsMade = 0;

function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}


function makeCard() {
	cardSection.hidden = false;
   
  let friendName = nameInput.value;
  let adjective = adjectiveInput.value;
  let noun = nounInput.value;
  let closing = closings[randomNumber(0, closings.length - 1)];

   cardText.textContent =
     "Dear " + friendName + ", you are as " + adjective +
     " as a " + noun + ". Happy birthday from the generator.";
	
   closingText.textContent = closing;
   
   cardsMade = cardsMade + 1;

  if (cardsMade >= 5) {
   bonusLine.hidden = false;
  }
}

makeButton.addEventListener("click", makeCard);

function surpriseMe() {
  let index = randomNumber(0, closings.length - 1);
  closingText.textContent = closings[index];
}

surpriseButton.addEventListener("click", surpriseMe);

function resetGenerator() {
  nameInput.value = "";
  adjectiveInput.value = "";
  nounInput.value = "";
  cardSection.hidden = true;
}

resetButton.addEventListener("click", resetGenerator);