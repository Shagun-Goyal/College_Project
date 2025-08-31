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

// Toggle dropdown on click for touch/mobile
document.querySelectorAll('.has-dropdown > .dd-toggle').forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    // If you want the top link to navigate on second click, keep this preventDefault on first open only
    e.preventDefault();
    const parent = toggle.closest('.has-dropdown');
    const isOpen = parent.classList.contains('open');

    // close other open dropdowns
    document.querySelectorAll('.has-dropdown.open').forEach(dd => {
      if (dd !== parent) {
        dd.classList.remove('open');
        dd.querySelector('.dd-toggle').setAttribute('aria-expanded', 'false');
      }
    });

    // toggle current
    parent.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(!isOpen));
  });
});

  // Click outside to close
document.addEventListener('click', (e) => {
    const openDD = document.querySelector('.has-dropdown.open');
    if (!openDD) return;
    if (!openDD.contains(e.target)) {
      openDD.classList.remove('open');
      const t = openDD.querySelector('.dd-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
    }
  });

  // ESC to close
  document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.has-dropdown.open').forEach(dd => {
      dd.classList.remove('open');
      const t = dd.querySelector('.dd-toggle');
      if (t) t.setAttribute('aria-expanded', 'false');
   });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  });
});



