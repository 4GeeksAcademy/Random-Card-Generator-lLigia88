/* eslint-disable */
import "bootstrap";
import "./style.css";

// Function to be executed when the window finishes loading
window.onload = function() {
  // Interval function to generate random card values every 10 seconds
  setInterval(() => {
    // Arrays for card icons and content
    const icons = ["♦", "♥", "♠", "♣"];
    const content = [
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
      "K",
      "A"
    ];

    // Generate random indices for icons and content arrays
    let randomIcon = Math.floor(Math.random() * icons.length);
    let randomNumber = Math.floor(Math.random() * content.length);

    // Get elements by their IDs
    let firstIcon = document.getElementById("firstIcon");
    let number = document.getElementById("number");
    let secondIcon = document.getElementById("secondIcon");

    // Assign random values to the card elements
    firstIcon.innerHTML = icons[randomIcon];
    number.innerHTML = content[randomNumber];
    secondIcon.innerHTML = icons[randomIcon];

    // Set color of icons based on specific conditions
    if (
      (firstIcon.innerHTML == icons[0] && secondIcon.innerHTML == icons[0]) ||
      (firstIcon.innerHTML == icons[1] && secondIcon.innerHTML == icons[1])
    ) {
      firstIcon.style.color = "red";
      secondIcon.style.color = "red";
    } else {
      firstIcon.style.color = "black";
      secondIcon.style.color = "black";
    }
  }, 10000); // Execute every 10 seconds
};
