document.addEventListener('DOMContentLoaded', function () {
    var registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve form values
        var firstName = document.getElementById('first-name').value;
        var lastName = document.getElementById('last-name').value;
        var voterId = document.getElementById('voter-id').value;
        var dob = document.getElementById('dob').value;
        var gender = document.getElementById('gender').value;
        var mobile = document.getElementById('mobile').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirm-password').value;

        // Validate if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Prepare user object
        var user = {
            firstName: firstName,
            lastName: lastName,
            voterId: voterId,
            dob: dob,
            gender: gender,
            mobile: mobile,
            email: email,
            password: password,
            hasVoted: false
        };

        // Store user details in localStorage
        var users = JSON.parse(localStorage.getItem('users')) || {};
        users[voterId] = user;
        localStorage.setItem('users', JSON.stringify(users));

        // Confirmation message
        alert("Registration successful! You can now log in.");

        // Redirect to login page
        window.location.href = 'login.html';
    });
});
