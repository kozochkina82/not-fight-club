const characterForm = document.getElementById('character-form');
const nameField = document.querySelector('.name-field');

characterForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = nameField.value.trim();

    if (name) {
        localStorage.setItem('characterName', name);
        window.location.href = 'start.html';
    } else {
        alert('Пожалуйста, введите имя персонажа');
    }
});



const editButton = document.querySelector('.edit-button');
if (editbutton) {
    editButton.addEventListener('click', function (event) {
        event.preventDefault();
        let newName = prompt('Введите новое имя персонажа', localStorage.getItem('characterName') || '');
        if (newName === null && newName.trim() !== '') {
            localStorage.setItem('characterName', newName.trim());
        const nameElement = document.querySelector('.character-name');
            if (nameElement) {
                nameElement.textContent = newName.trim();
            }
        }
    })
}

