// Set the correct username and password here
        const correctUsername = "Vxiyan";
        const correctPassword = "Daniel_12@"; // Replace with your desired password

        // Validation function
        function validateLogin() {
            // Get the values from the input fields
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            
            // Check if the credentials match
            if (username === correctUsername && password === correctPassword) {
                // If credentials are correct, redirect to dashboard
                window.location.href = "dashboard.html";
                return false; // Prevent form from submitting
            } else {
                // If credentials are incorrect, display error message
                document.getElementById("error-message").style.display = "block";
                return false; // Prevent form from submitting
            }
        }
