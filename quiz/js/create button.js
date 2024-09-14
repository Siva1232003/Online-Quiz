$(document).ready(function () {
    // Common validation function
    function validateForm(formId) {
        let isValid = true;

        // Reset previous error messages
        $(`#${formId} .error`).text('');

        // Get the values from the form
        const emailOrPhone = $(`#${formId} input[type='text']`).val().trim();
        const password = $(`#${formId} input[type='password']`).eq(0).val().trim();
        const confirmPassword = formId === 'signupForm' ? $(`#${formId} input[type='password']`).eq(1).val().trim() : null;

        const phonePattern = /^\d{10}$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        // Validate email or phone
        if (emailOrPhone === '') {
            $(`#${formId}EmailOrPhoneError`).text('Email or Phone is required.');
            isValid = false;
        } else if (!phonePattern.test(emailOrPhone) && !emailPattern.test(emailOrPhone)) {
            $(`#${formId}EmailOrPhoneError`).text('Enter a valid email address or a 10-digit phone number.');
            isValid = false;
        }

        // Validate password
        if (password === '') {
            $(`#${formId}PasswordError`).text('Password is required.');
            isValid = false;
        } else if (!passwordPattern.test(password)) {
            $(`#${formId}PasswordError`).text('Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
            isValid = false;
        }

        // Validate confirm password if it's the signup form
        if (confirmPassword !== null && confirmPassword !== password) {
            $(`#${formId}ConfirmPasswordError`).text('Passwords do not match.');
            isValid = false;
        }

        return isValid;
    }

    // Handle login form submission
    $('#loginForm').on('submit', function (event) {
        event.preventDefault();

        if (validateForm('loginForm')) {
            console.log("Login form is ready to be submitted");
            window.location.href = "quiz.html";
        }
    });

    // Handle signup form submission
    $('#signupForm').on('submit', function (event) {
        event.preventDefault();

        if (validateForm('signupForm')) {
            console.log("Signup form is ready to be submitted");
            window.location.href = "quiz.html";
        }
    });
});
