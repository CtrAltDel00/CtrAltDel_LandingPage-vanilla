var currentIndex = 0; // Declare and initialize the current index
var cards = document.querySelectorAll('.card');
setTimeout(showNextCard, 5000);

function showNextCard() {
  // Check if the current index is the last card
  if (currentIndex === cards.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  // Hide all cards
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }

  // Show the current card
  cards[currentIndex].style.display = "block";
  setTimeout(showNextCard, 5000);
}
