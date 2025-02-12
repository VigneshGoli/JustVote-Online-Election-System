document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Retrieve login values
        var loginVoterId = document.getElementById('login-voter-id').value;
        var loginPassword = document.getElementById('login-password').value;

        // Retrieve user details from localStorage
        var storedUser = JSON.parse(localStorage.getItem('user_' + loginVoterId));

        if (storedUser) {
            // Check if the user has already voted
            if (storedUser.hasVoted) {
                alert("You have already voted. You cannot vote again.");
                return;
            }

            // Check if the entered password matches the stored password
            if (loginPassword === storedUser.password) {
                // Set user session or cookie as needed
                alert("Login successful!");

                // Set session for logged-in user
                sessionStorage.setItem('loggedInUser', storedUser.voterId);

                // Redirect to Vote Now page or any other page as per your application flow
                window.location.href = 'Vote-Now.html';
            } else {
                alert("Incorrect password. Please try again.");
            }
        } else {
            alert("User not found. Please check your voter ID and try again or register if you haven't already.");
        }
    });
});
