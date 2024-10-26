// admin.js

document.addEventListener('DOMContentLoaded', () => {
    const startTimerButton = document.getElementById('startTimer');
    if (startTimerButton) {
        startTimerButton.addEventListener('click', startTimer);
    }
});

function startTimer() {
    const timerDuration = document.getElementById('timerDuration').value;
    // Запуск таймера на указанное количество минут
}
