let timerInterval;

const startTimer = () =>{
    clearInterval(timerInterval);

    const countdownTime = 10;
    let timeLeft = countdownTime;

    timerInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
            document.getElementById('timer').textContent = formatTime(timeLeft);
        } else {
            clearInterval(timerInterval);
            document.getElementById('timer').textContent = 'BOOM!';
            document.getElementById('explosion').style.display = 'block';
        }
    }, 1000);
}

const formatTime = (seconds) =>{
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
