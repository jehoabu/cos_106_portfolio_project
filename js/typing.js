// Wait for the DOM to fully load before initializing the typing effect
document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.getElementById('typing-text');
  const cursorElement = document.querySelector('.typing-cursor');

  // Guard clause: Exit if the target element doesn't exist on the current page
  if (!typingElement) return;

  // The full string to type out smoothly once without backspacing or looping
  const textToType =
    'Software Engineering student at Miva Open University, passionate about technology, creativity, innovation, and problem-solving.';

  let charIndex = 0;
  const typingSpeed = 40; // Speed in milliseconds per character typed

  /**
   * Recursive function to append one character at a time until complete
   */
  function typeWriter() {
    if (charIndex < textToType.length) {
      typingElement.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      // Typing finished: Leave cursor blinking for 2.5 seconds, then fade it out gracefully
      if (cursorElement) {
        setTimeout(() => {
          cursorElement.style.transition = 'opacity 1s ease';
          cursorElement.style.opacity = '0';
          setTimeout(() => {
            cursorElement.style.display = 'none';
          }, 1000);
        }, 2500);
      }
    }
  }

  // Clear any existing container text and start typing
  typingElement.textContent = '';
  typeWriter();
});
