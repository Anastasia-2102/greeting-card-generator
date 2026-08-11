let name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");

function makeCard () {
console.log("Dear " + name + ",");
console.log("You are as " + adjective + " as a " + noun + ".");
console.log("Happy birthday from the generator.");
}

function makeThankYouCard() {
  console.log("Dear " + name + ",");
  console.log("Thanks a " + noun + " — that was " + adjective + " of you.");
  console.log("Sincerely, the generator.");
}

makeCard ();
makeThankYouCard();
