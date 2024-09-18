document.addEventListener('DOMContentLoaded', function() {
    const chemicalButtons = document.querySelectorAll('.chemical-button');
    const reagentButtons = document.querySelectorAll('.reagent-button');
    const reactionVideo = document.getElementById('reactionVideo');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.createElement('p'); // Create a success message element

    // Styling for the success message
    successMessage.style.color = 'green';
    successMessage.style.fontSize = '1.5em';
    successMessage.style.marginTop = '10px';
    successMessage.style.display = 'none'; // Hide by default

    // Append the success message to the reaction pane
    document.getElementById('reactionPane').appendChild(successMessage);

    let selectedChemical = null;
    let selectedReagent = null;

    chemicalButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (selectedChemical) {
                selectedChemical.classList.remove('selected');
            }
            selectedChemical = button;
            button.classList.add('selected');
            successMessage.style.display = 'none'; // Reset success message
            checkReaction(); // Check if the reaction is valid
        });
    });

    reagentButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (selectedReagent) {
                selectedReagent.classList.remove('selected');
            }
            selectedReagent = button;
            button.classList.add('selected');
            successMessage.style.display = 'none'; // Reset success message
            checkReaction(); // Check if the reaction is valid
        });
    });

    function checkReaction() {
        if (selectedChemical && selectedReagent) {
            const chemical = selectedChemical.querySelector('.text').innerText;
            const reagent = selectedReagent.querySelector('.text').innerText;

            // Check for valid combinations
            if ((chemical === 'Copper (II) Sulphate' && reagent === 'Iron')) {
                
                // Set the reaction video source
                reactionVideo.src = 'videos/displacement.mp4'; // Replace with your video URL
                reactionVideo.style.display = 'block';
                errorMessage.style.display = 'none'; // Hide error message

                // Listen for video end event
                reactionVideo.onended = function() {
                    successMessage.textContent = `Reaction successful! You have obtained Silver and Chlorine.`;
                    successMessage.style.display = 'block';
                };
            } else {
                // Show error message if the combination is invalid
                reactionVideo.style.display = 'none';
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none'; // Hide success message
            }
        }
    }
});
