let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let style = prompt("Fancy or silly?");
let place = prompt("A place: ");
let food = prompt("A food: ");

let closings = [
  "You are legend",
  "Stay golden",
  "Signs point to awesome",
  "Keep shining!",
  "Have an amazing day!",
  "Keep being amazing!",
];

function randomNumber(a,b) {
 return Math.floor(Math.random() * (b - a + 1)) + a;
} 

function makeCard () {
  if (style.toLowerCase() === "fancy") {
	console.log("Dearest " + name + ",");
  } else {
	console.log("YO " + name + "!");
  }
    console.log("You are as " + adjective + " as a " + noun + ".");
	console.log("I hope you enjoy your day in " + place + ".");
    console.log("Don't forget to eat some " + food + ".");
    console.log("Have an amazing and unforgettable day!");

  let index = randomNumber(0, closings.length - 1);
  console.log(closings[index]);
}


function makeThankYouCard() {
  console.log("Dear " + name + ",");
  console.log("Thanks a " + noun + " - that was " + adjective + " of you.");
  console.log("I hope to see you in " + place + " soon.");
  console.log("Let's share some " + food + " next time!");
  console.log("Sincerely, the generator.");
}

makeCard ();
makeThankYouCard();
