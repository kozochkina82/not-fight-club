document.getElementById('character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('.name-field').value;
    localStorage.setItem('characterName', name);
    window.location.href = '/not-fight-club/start.html';
});



