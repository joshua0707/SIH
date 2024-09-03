const shakeButtons = document.querySelectorAll('.shake-button');

shakeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('shaking');

        setTimeout(() => {
            button.classList.remove('shaking');
        }, 100);
    });
});




const buttons = document.querySelectorAll('.button');
let correctButtonsClicked = 0;
let lastClickedButtons = [];

function checkForCorrectClicks() {
    if (correctButtonsClicked === 2) {
        alert('You clicked the correct buttons!');
        correctButtonsClicked = 0;
        lastClickedButtons = []; // Clear the last clicked buttons array
        checkForCorrectClicks(); // Trigger another check immediately
    }
}

const checkInterval = setInterval(checkForCorrectClicks, 100); // Check every 100 milliseconds

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('correct')) {
            lastClickedButtons.unshift(button); // Add the button to the beginning of the array
            if (lastClickedButtons.length > 2) {
                lastClickedButtons.pop(); // Remove the oldest button
            }
            correctButtonsClicked++;
            checkForCorrectClicks(); // Trigger the check immediately
        }
    });
});