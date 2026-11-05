// 1. Select the contact form
const contactForm = document.getElementById('contact-form');

// 2. Create a dedicated space for our validation messages
const messageDisplay = document.createElement('div');
messageDisplay.setAttribute('role', 'alert'); // For accessibility
messageDisplay.className = 'alert alert-hidden'; // Initially hidden, will be shown when needed

// Insert the message box at the top of the form
contactForm.prepend(messageDisplay);

// 3. Listen for the submit event
contactForm.addEventListener('submit', function (event) {
  // Prevent the form from refreshing the page so we can validate it first
  event.preventDefault();

  // Reset the message display
  message.Display.className = 'alert alert-hidden'; // Hide the message box
  messageDisplay.textContent = '';

  // Grab the values typed into the inputs and remove any extra spaces (trim)
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phonenumber').value.trim();
  const message = document.getElementById('message').value.trim();

  // Requirement A: Check if any field is empty
  if (!name || !email || !phone || !message) {
    showError('Please fill out all fields before submitting.');
    return; // Stop the function here
  }

  // Requirement B: Email format is valid (using a basic Regular Expression)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    showError('Please enter a valid email address (e.g., name@example.com).');
    return;
  }

  // Requirement C: Phone number contains ONLY digits
  const phonePattern = /^\d+$/;
  if (!phonePattern.test(phone)) {
    showError(
      'Your phone number must contain only digits (no spaces or dashes).',
    );
    return;
  }

  // If the code makes it this far, all validation passed!
  showSuccess(
    'Thank you, ' + name + '! Your message has been sent successfully.',
  );

  // Clear the form inputs
  contactForm.reset();
});

// Helper function to display errors in red
function showError(errorText) {
  messageDisplay.textContent = errorText;
  messageDisplay.className = 'alert alert-error'; // Show the message box with error styling
}

// Helper function to display success in green
function showSuccess(successText) {
  messageDisplay.textContent = successText;
  messageDisplay.className = 'alert alert-success'; // Show the message box with success styling
}
