// storage.js

function saveScore(score) {
    let user = JSON.parse(localStorage.getItem('user'));
    user.score += score;
    localStorage.setItem('user', JSON.stringify(user));
}

function getLeaderboard() {
    // Получение рейтинга всех игроков
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    return leaderboard;
}

function updateLeaderboard(user) {
    let leaderboard = getLeaderboard();
    leaderboard.push(user);
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}
