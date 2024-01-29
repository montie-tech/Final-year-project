function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const existingUsernames = ['user1', 'user2', 'user3']; // Example of existing usernames

    // Check if the username exists
    const isExistingUsername = existingUsernames.includes(username);

    if (!isExistingUsername) {
        showToast('error', 'Username does not exist');
        return;
    }

    // Assuming you have a backend API to verify the password
    // For demonstration purposes, I'm checking a hardcoded password
    if (password !== 'password') {
        showToast('error', 'Incorrect password');
        return;
    }

    // If username and password are correct, show success message
    showToast('success', 'Login successful');
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
