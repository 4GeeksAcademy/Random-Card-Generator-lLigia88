const suits = ["hearts", "diamonds", "spades", "clubs"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let suitTop = document.querySelector("#top-symbol");
let number = document.querySelector("#number");
let suitBottom = document.querySelector("#bottom-symbol");

// Function to choose a random card from the given arrays
function chooseCard(arr1, arr2) {
  let card = [];
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return card;
}

// Function to assign color based on the suit of the card
function assignColor(arr) {
  if (arr[0] === "hearts" || arr[0] === "diamonds") {
    suitTop.style.color = "red";
    number.style.color = "red";
    suitBottom.style.color = "red";
  } else {
    suitTop.style.color = "black";
    number.style.color = "black";
    suitBottom.style.color = "black";
  }
}

// Function to assign suit symbols to the card
function assignSuit(arr) {
  if (arr[0] === "hearts") {
    suitTop.innerHTML = "&hearts;";
    suitBottom.innerHTML = "&hearts;";
  } else if (arr[0] === "diamonds") {
    suitTop.innerHTML = "&diams;";
    suitBottom.innerHTML = "&diams;";
  } else if (arr[0] === "spades") {
    suitTop.innerHTML = "&spades;";
    suitBottom.innerHTML = "&spades;";
  } else {
    suitTop.innerHTML = "&clubs;";
    suitBottom.innerHTML = "&clubs;";
  }
}

// Function to assign card value to the number element
function assignValue(arr) {
  number.innerHTML = arr[1];
}

// Function to generate a new random card
function generateCard() {
  let card = chooseCard(suits, values);
  assignColor(card);
  assignSuit(card);
  assignValue(card);
}

window.onload = function() {
  generateCard();
};
