const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const newYearTime = new Date('June 1 2024 00:00:00');

// update function
function updateCountDownTime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = ('0'+h).slice(-2); 
    minutes.innerHTML = ('0' + m).slice(-2);
    seconds.innerHTML = ('0' + s).slice(-2);

}

setInterval(updateCountDownTime, 1000);
updateCountDownTime(); // Call the function once to avoid initial delay