// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js') // sw.js is in the root directory
      .then(reg => {
        console.log('Service Worker registered! Scope:', reg.scope);
      })
      .catch(err => {
        console.log('Service Worker registration failed:', err);
      });
  });
}

// ... rest of your existing JavaScript code (let count = 0; etc.)
let count = 0; // Initialize the total counter

// Get references to the HTML elements
const countDisplay = document.getElementById('countDisplay');
const fullCycleDisplay = document.getElementById('fullCycleDisplay'); // Element for full cycles
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');

// Function to update the display
function updateDisplay() {
    // Calculate the display value for the main counter (0 to 107 cycle)
    let mainCounterValue = count % 108; // This will give 0 when count is 108, 216 etc.

    // Calculate the number of full 108 cycles completed
    let fullCycles = Math.floor(count / 108); // e.g., for count=108, fullCycles=1; for count=216, fullCycles=2

    // Update the main counter display
    countDisplay.textContent = mainCounterValue;

    // Update the full cycle display with Myanmar text
    if (fullCycles > 0) {
        fullCycleDisplay.textContent = `ပုတီးပတ်ရေ=${fullCycles}`;
    } else {
        fullCycleDisplay.textContent = ''; // Hide if no full cycles yet
    }
}

// Event listener for the Increment button
incrementButton.addEventListener('click', () => {
    count++; // Increase total count by 1
    updateDisplay(); // Update the text on the page
});

// Event listener for the Reset button
resetButton.addEventListener('click', () => {
    count = 0; // Reset total count to 0
    updateDisplay(); // Update the text on the page
});

// Initial display when the page loads
updateDisplay();