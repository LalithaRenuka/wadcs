// Generate a random CAPTCHA
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('captcha-text').textContent = captcha;
}

// Validate the CAPTCHA
function validateCaptcha() {
    const generatedCaptcha = document.getElementById('captcha-text').textContent;
    const enteredCaptcha = document.getElementById('captcha-input').value;

    if (enteredCaptcha === generatedCaptcha) {
        return true; // CAPTCHA is correct
    } else {
        alert('CAPTCHA does not match. Please try again.');
        return false; // Prevent form submission
    }
}

// Generate CAPTCHA on page load
document.addEventListener('DOMContentLoaded', generateCaptcha);
