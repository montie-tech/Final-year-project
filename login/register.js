document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    registerBtn.addEventListener('click', register);
});

function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate username, email, and password
    if (username.length < 4 || username.length > 20) {
        showToast('error', 'Username must be 4-20 characters long');
        return;
    }

    if (!isValidEmail(email)) {
        showToast('error', 'Invalid email address');
        return;
    }

    if (password.length < 6) {
        showToast('error', 'Password must be at least 6 characters long');
        return;
    }

    // Check if user already exists in the system (simulate)
    const userExists = checkUserExists(username);
    if (userExists) {
        showToast('error', 'Username already exists');
        return;
    }

    // If all validations pass, register the user
    // Add your registration logic here
    showToast('success', 'Registration successful');
}

function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}

function checkUserExists(username) {
    // Simulate checking if user exists in the system
    // Replace with actual logic (e.g., API call to check if username exists)
    const existingUsernames = ['user1', 'user2', 'user3'];
    return existingUsernames.includes(username);
}

function showToast(type, message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add(type);

    // Show toast with animation
    toast.style.transform = 'translate(-50%, 0)';
    setTimeout(() => {
        toast.style.transform = 'translate(-50%, -100%)';
        toast.classList.remove(type);
    }, 3000); // Hide toast after 3 seconds
}
