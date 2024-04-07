function validateForm(registrationForm) {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    
    if (!isAlpha(username)) {
        alert("Invalid Username! Username should contain only alphanumeric characters.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password != cpassword) {
        alert("Passwords do not match.");
        return false;
    }

    window.location.href = "secret.html";
    return false;
}

// Helper function to check if a string contains only alphabetical characters
function isAlpha(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

function validateLogin(LoginForm) {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username != "hello") {
        alert("Username does not exist");
        return false;
    }

    if (password != "hello") {
        alert("Password does not match");
        return false;
    }

    window.location.href = "secret.html";
    return false;
}