let clockInterval; // Variable to store the interval ID
let isRunning = false; // To keep track of clock state

function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    // Extract hours, minutes, and seconds
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Display the time
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
    if (!isRunning) { // Prevent multiple intervals
        clockInterval = setInterval(updateClock, 1000);
        isRunning = true;
        updateClock(); // Immediately show the time
    }
}

function stopClock() {
    clearInterval(clockInterval);
    isRunning = false;
}

function resetClock() {
    stopClock(); // Stop the clock first
    document.getElementById('clock').textContent = '00:00:00'; // Reset display
}

// Attach event listeners to buttons
document.getElementById('start').addEventListener('click', startClock);
document.getElementById('stop').addEventListener('click', stopClock);
document.getElementById('reset').addEventListener('click', resetClock);
