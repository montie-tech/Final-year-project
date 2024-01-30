// teacherlogin.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', validateForm);
});

function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        showToast('error', 'Username and password are required');
        return;
    }

    if (!isValidTeacherEmail(username)) {
        showToast('error', 'You must use a Matumaini School email');
        return;
    }

    // Proceed with form submission
    // Add your form submission logic here

    // Show success toast
    showToast('success', 'Logging in...');
}

function isValidTeacherEmail(email) {
    return email.endsWith('@matumaini.school.com');
}

function showToast(type, message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.className = type; // Update class for styling

    // Show toast with animation
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000); // Hide toast after 3 seconds
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function forgotPassword() {
    // Add logic for forgot password functionality
    // This function is called when "Forgot Password" button is clicked
}
