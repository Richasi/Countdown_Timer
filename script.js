let countdownInterval;
function startCountdown() {
    clearInterval(countdownInterval);
    const targetTime = new Date(document.getElementById('targetTime').value).getTime();
    
    if (isNaN(targetTime)) {
        alert("Please select a valid date and time.");
        return;
    }
    
    countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const diff = targetTime - now;
        
        if (diff <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "Time's Up!";
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
