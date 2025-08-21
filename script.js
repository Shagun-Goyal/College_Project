const words = ["COMMUNICATION", "COMPUTATION", "INFORMATION TECHNOLOGY"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {
  currentWord = words[wordIndex];

  if (!isDeleting) {
    // Typing forward
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      // Word complete, pause before deleting
      isDeleting = true;
      setTimeout(typeEffect, 1500); // pause 1.5s
      return;
    }
  } else {
    // Deleting backward
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      // Word deleted, move to next
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  // Speed control
  const typingSpeed = isDeleting ? 100 : 150; // faster delete
  setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
typeEffect();
