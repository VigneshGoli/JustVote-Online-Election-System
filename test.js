document.addEventListener('DOMContentLoaded', function() {
    const dobInput = document.getElementById('dob');

    dobInput.addEventListener('focus', function() {
        dobInput.setAttribute('placeholder', 'mm/dd/yyyy');
    });

    dobInput.addEventListener('blur', function() {
        dobInput.removeAttribute('placeholder');
    });

    document.getElementById("registration-form").addEventListener("submit", function(event) {
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            event.preventDefault();
        }
    });
});
