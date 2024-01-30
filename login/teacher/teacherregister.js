document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('teacherForm');
    const passwordInput = document.getElementById('pwd');
    const confirmPasswordInput = document.getElementById('confirmPwd');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });

    passwordInput.addEventListener('input', function() {
        toggleShowPassword(this.value);
    });

    confirmPasswordInput.addEventListener('input', function() {
        toggleShowPassword(passwordInput.value);
    });

    function validateForm() {
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (!firstname || !lastname || !email || !password || !confirmPassword) {
            showToast('error', 'Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            showToast('error', 'Passwords do not match');
            return;
        }

        // Additional validation logic can be added here

        // If all validations pass, submit the form
        showToast('success', 'Registration successful');
        form.submit();
    }

    function toggleShowPassword(password) {
        const passwordField = document.getElementById('pwd');
        const confirmPasswordField = document.getElementById('confirmPwd');

        if (password) {
            passwordField.type = 'text';
            confirmPasswordField.type = 'text';
        } else {
            passwordField.type = 'password';
            confirmPasswordField.type = 'password';
        }
    }

    function showToast(type, message) {
        const toast = document.createElement('div');
        toast.classList.add('toast', type);
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
});
