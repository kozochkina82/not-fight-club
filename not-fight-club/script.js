document.getElementById('character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const charName = document.querySelector('.name-field').value;
    localStorage.setItem('characterName', charName);
      alert(`Имя "${charName}" сохранено!`);
    window.location.href = '/not-fight-club/start.html';
});