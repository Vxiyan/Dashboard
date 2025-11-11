// Store multiple users and their passwords
const users = {
    "Generic": "Generic"
};

// Validation function
function validateLogin() {
    // Get the values from the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username exists AND password matches
    if (users[username] && users[username] === password) {
        // If credentials are correct, redirect to dashboard
        window.location.href = "dashboard.html";
        return false; // Prevent form from submitting
    } else {
        // If credentials are incorrect, display error message
        document.getElementById("error-message").style.display = "block";
        return false; // Prevent form from submitting
    }
}
