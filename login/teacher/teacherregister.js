document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const pwdInput = document.getElementById('pwd');
    const confirmPasswordInput = document.getElementById('confirmPwd');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate form fields
        if (!validateEmail(emailInput.value)) {
            showError('Invalid email address');
            return;
        }

        if (pwdInput.value.length < 6) {
            showError('Password must be at least 6 characters long');
            return;
        }

        if (pwdInput.value !== confirmPasswordInput.value) {
            showError('Passwords do not match');
            return;
        }

        // If all validations pass, submit the form
        // You can send a request to the server here
        showSuccess('Registration successful');
    });

    function validateEmail(email) {
        // Check if email ends with @matumaini.school.com
        return email.endsWith('@matumaini.school.com');
    }

    function showError(message) {
        const errorElement = document.createElement('div');
        errorElement.classList.add('error-message');
        errorElement.textContent = message;
        form.appendChild(errorElement);
    }

    function showSuccess(message) {
        alert(message); // Display success message (you can replace this with a toast notification)
    }
});
