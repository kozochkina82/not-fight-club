document.addEventListener('DOMContentLoaded', function () {
  const charName = localStorage.getItem('characterName') || 'Your Character';
  const avatarSrc = localStorage.getItem('selectedAvatar') || 'assets/16a99e9d5e4d32c3dcc8e6d442bfc132.jpg';

console.log('Loaded from localStorage - Avatar:', avatarSrc, 'Name:', charName);

    // Обновляем DOM
    const nameElement = document.querySelector('.character-name');
    const imgElement = document.querySelector('.player img');

    if(nameElement) nameElement.textContent = charName;
    if(imgElement) imgElement.src = avatarSrc;
});
