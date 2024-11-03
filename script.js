// Countdown timer
const countdownTimer = document.getElementById('countdown-timer');
const weddingDate = new Date('2024-11-16T14:00:00'); 

function updateCountdown() {
    const currentTime = new Date();
    const timeRemaining = weddingDate - currentTime;
    
    if (timeRemaining <= 0) {
        countdownTimer.innerHTML = 'Time\'s up!';
        return;
    }
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    countdownTimer.innerHTML = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Call updateCountdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown display
updateCountdown();
