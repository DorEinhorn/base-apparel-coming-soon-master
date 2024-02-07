
function validateEmail() {
    const email = document.getElementById('email');
    const iconError = document.getElementById('icon-error');
    const message = document.getElementById('msg');

    if (!email.validity.valid) {
        message.innerHTML = "Please provide a valid email.";
        iconError.classList.add('show');
    } else {
        message.innerHTML = "";
        iconError.classList.remove("show");
    }
}

document.querySelector('.btn').addEventListener("click", validateEmail);

// Add this event listener for the email input field
document.getElementById('email').addEventListener("input", validateEmail);
