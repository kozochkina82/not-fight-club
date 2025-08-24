document.addEventListener('DOMContentLoaded', function () {
  const avatars = document.querySelectorAll('.choose-img');

  function avatarChange() {
    avatars.forEach(element => {
      element.addEventListener('click', function () {
        const imgSrc = this.querySelector('img').getAttribute('src');
                console.log('Selected image:', imgSrc);//log
        localStorage.setItem('selectedAvatar', imgSrc);
          console.log('LocalStorage saved:', localStorage.getItem('selectedAvatar'));//log
        window.location.href = 'charpage.html';
      });
    });
  };
  avatarChange();
});
