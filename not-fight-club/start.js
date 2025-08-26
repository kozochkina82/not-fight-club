const submitButton = document.querySelector('.submit-button');
if (submitButton) {
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        window.location.href = 'fight.html';
    });
}