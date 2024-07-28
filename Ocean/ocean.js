let timerID = null;
let amountTime = 0;
const audio = document.getElementById('timerSound');

document.getElementById('setTimerButton').addEventListener('click', function() {
    const minutes = parseInt(document.getElementById('timeInput').value);
    if (!isNaN(minutes) && minutes > 0) {
        amountTime = minutes * 60;
        updateDisplay();
    } else {
        alert("Enter the correct time in minutes!");
    }
});

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);

function calcTime() {
    amountTime--;
    updateDisplay();

    if (amountTime <= 0) {
        stopTimer();
        document.getElementById('countdown').textContent = "Time's up!";
    }
}

function stopTimer() {
    if (timerID !== null) {
        clearInterval(timerID);
        timerID = null;
        audio.pause(); 
        audio.currentTime = 0;
    }
}

function startTimer() {
    if (timerID === null && amountTime > 0) {
        timerID = setInterval(calcTime, 1000);
        audio.play();
    }
}

function updateDisplay() {
    const minutes = Math.floor(amountTime / 60);
    const seconds = amountTime % 60;
    document.getElementById('countdown').textContent = `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;
}


VANTA.WAVES({
    el: "#vanta-background",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
});

gsap.to('h1', {
    text: 'Welcome to the Ocean shore',
    duration: 3,
    repeatDelay: 0.7,
    ease: 'power1.in',
    delay: 0.5
})