

const toggleButton = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
toggleButton.addEventListener('click',() =>{
    navLinks.classList.toggle('active');
});




const scriptURL = 'https://script.google.com/macros/s/AKfycbw7SGK2cgH6-te891_u_oKFpL8-eYY291RJHVOcNqKrXhRWZ9wLlJqw4lJ2SBbp6Gk/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message send successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
});




