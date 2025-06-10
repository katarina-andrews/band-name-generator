const adjectives = ["Funky", "Loud", "Silent", "Electric", "Wicked", "Groovy"];

const nouns = ["Penguins", "Wizards", "Socks", "Robots", "Bananas", "Crows"];

function getAdjective() {
  // TODO: return a random adjective from the adjectives array
  const randAdj = Math.floor(Math.random() * adjectives.length);
  return adjectives[randAdj];

}

function getNoun() {
  // TODO: return a random noun from the nouns array
  const randNoun = Math.floor(Math.random() * nouns.length);
  return nouns[randNoun];

}

function generateBandName() {
  // TODO: use getAdjective() and getNoun() to build a band name
  // Format: "The Adjective Noun"
  // Then update the DOM to show the band name inside #band-name
  let bandElm = document.getElementById("band-name");
  bandElm.textContent = "The " + getAdjective() + " " + getNoun()
  
}

document
  .getElementById("generate-btn")
  .addEventListener("click", generateBandName);
