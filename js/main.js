// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Обработка регистрации
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleRegistration);
    }
});

function handleRegistration(event) {
    event.preventDefault();
    
    const nickname = document.getElementById('nickname').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    
    const user = {
        nickname,
        firstName,
        lastName,
        phone,
        profession,
        email,
        score: 0,
        lives: 9
    };

    // Сохранение данных в localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Перенаправление на страницу игры
    window.location.href = 'game.html';
}
