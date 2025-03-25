document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (email === "" || message === "") {
        alert("Please fill in all fields!");
    } else {
        alert("Message sent successfully!");
    }
});