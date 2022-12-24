var quote = document.getElementById("quote");
var randomQuotes = [
  "To know sorrow is not terrifying. What is terrifying is to know you cant go back to happiness you could have. -  Matsumoto Rangiku (Bleach)",

  "“People’s lives don’t end when they die. It ends when they lose faith.” – Itachi Uchiha | Naruto Shippuden",

  "“Remember that everyone you meet is afraid of something, loves something and has lost something.” – Lucy Heartfilia | Fairy Tail",
  "“Push through the pain, giving up hurts more.” – Vegeta | Dragon Ball.",

  "How can you destroy a monster without becoming one?. - Tokyo Ghoul",

  "For those who don’t believe in themselves, hardwork is worthless - Naruto Shippuden",

  "Learn to treasure your life because unfortunately, it can be taken away from you anytime.” - L.",

  "“In every world, once you die, you’re gone.” — Akihiko Kayaba, Sword Art Online.",

  "“Real people just don’t care.” - Hikigaya Hachiman.",

  " The classic “Never give up” vibes! - “That is my ninja way!” Uzumaki Naruto."
];

function changeQuotes() {
  var i = Math.floor(Math.random() * randomQuotes.length);
  quote.innerText = randomQuotes[i];
}

changeQuotes();

document.getElementById("textbox1").addEventListener("input", updateValue);

function updateValue(e) {
  document.getElementById("textbox2").value = e.target.value;
}

var data = {
  0: "Select the team",
  1: "New Zealand Lost :(",
  2: "Pakistan Won :)",
  3: "England Won :)",
  4: "South Africa Lost :("
};

function changeText(id) {
  document.getElementById("content").innerHTML = data[id];
}
