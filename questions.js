document.getElementById('submitQuery').addEventListener('click', function() {
    const query = document.getElementById('queryBox').value;
    
    if (query.trim() === '') {
        alert('Please enter a query.');
        return;
    }
    
    alert('Your query has been submitted: ' + query);
    document.getElementById('queryBox').value = '';  // Clear the query box after submission
});

function openChatBot() {
    const chatbotWindow = document.getElementById('chatbotWindow');
    
    if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
        chatbotWindow.style.display = 'block';
    } else {
        chatbotWindow.style.display = 'none';
    }
}