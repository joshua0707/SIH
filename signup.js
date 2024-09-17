document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const school = document.getElementById('school').value;
    const board = document.getElementById('board').value;
    const grade = document.getElementById('grade').value;
    
    // Handle sign-up logic here
    console.log('Name:', name);
    console.log('Date of Birth:', dob);
    console.log('School Name:', school);
    console.log('Board:', board);
    console.log('Grade:', grade);
    
    alert('Sign up successful!');
    
    // Redirect to another page or clear the form
});
