let Name = document.querySelector('.name-field').value;

document.getElementById('character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    localStorage.setItem('characterName', Name);
    window.location.href = 'start.html';
});


document.querySelector('.edit-button').addEventListener('submit', function (event) {
    event.preventDefault();
    let newName = prompt('Введите новое имя персонажа', '');
    if (newName === null && newName.trim() !== '') {
        Name = newName;
            localStorage.setItem('characterName', newName);
    }

})

document.querySelector('.submit-button').addEventListener('submit', function (event) {
    event.preventDefault();
window.location.href = 'fight.html';
})