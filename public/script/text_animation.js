const changingText = document.querySelector('.changing-text');
const roles = ['front end developer', 'back end developer', 'designer'];
let currentIndex = 0;

function updateText() {
    changingText.textContent = roles[currentIndex];
    currentIndex = (currentIndex + 1) % roles.length;
}

// Call the function initially
updateText();

// Update the text every 2 seconds (adjust timing as needed)
setInterval(updateText, 2000);
function updateText() {
    changingText.classList.add('hidden'); // Add hidden class
    setTimeout(() => {
        changingText.textContent = roles[currentIndex];
        changingText.classList.remove('hidden'); // Remove hidden class
        currentIndex = (currentIndex + 1) % roles.length;
    }, 500); // Wait for the transition to complete (adjust timing as needed)
}
