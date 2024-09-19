document.addEventListener('DOMContentLoaded', function() {
    const chemicalButtons = document.querySelectorAll('.chemical-button');
    const reagentButtons = document.querySelectorAll('.reagent-button');
    const reactionVideo = document.getElementById('reactionVideo');
    const errorMessage = document.getElementById('errorMessage');
    const successMessage = document.createElement('p'); 

    successMessage.style.color = 'green';
    successMessage.style.fontSize = '1.5em';
    successMessage.style.marginTop = '10px';
    successMessage.style.display = 'none'; 

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
            successMessage.style.display = 'none'; 
            checkReaction(); 
        });
    });

    reagentButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (selectedReagent) {
                selectedReagent.classList.remove('selected');
            }
            selectedReagent = button;
            button.classList.add('selected');
            successMessage.style.display = 'none'; 
            checkReaction(); 
        });
    });

    function checkReaction() {
        if (selectedChemical && selectedReagent) {
            const chemical = selectedChemical.querySelector('.text').innerText;
            const reagent = selectedReagent.querySelector('.text').innerText;

            if ((chemical === 'Silver Chloride' && reagent === 'Sunlight')) {
                
                reactionVideo.src = 'videos/decomposition.mp4'; L
                reactionVideo.style.display = 'block';
                errorMessage.style.display = 'none'; 
                reactionVideo.onended = function() {
                    successMessage.textContent = `Reaction successful! You have obtained Silver and Chlorine.`;
                    successMessage.style.display = 'block';
                };
                alert("Reaction successful! You have obtained Silver and Chlorine.");
            } else {
                reactionVideo.style.display = 'none';
                errorMessage.style.display = 'block';
                successMessage.style.display = 'none'; 
            }
        }
    }
});