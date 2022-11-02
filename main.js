let clock = document.querySelector(".clock"),
    hour = 0,
    minute = 0,
    second = 0,
    interval,
    startBtn = document.querySelector(".disable"),
    lapBtn = document.querySelector(".lap"),
    lapDiv = document.querySelector(".lapDiv");
const stopLap = () => {
    lapBtn.disabled = true;
};


// START counter
const startCounter = () => {
    interval = setInterval(() => {
        if (second < 59) {
            second++;
        }
        else if (minute >= 59) {
            hour++;
            minute = 0;
        }
        else {
            second = 0;
            minute++;
        }

        clock.innerHTML = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
    }, 1000);

    startBtn.disabled = true;
    lapBtn.style.display = "inline";

    lapBtn.removeEventListener('click', stopLap);
    lapBtn.disabled = false;

}

// STOP counter
const stopCounter = () => {
    clearInterval(interval);
    startBtn.disabled = false;

    lapBtn.addEventListener('click', stopLap)


}

// RESET counter
const resetCounter = () => {
    clearInterval(interval);
    second = 0;
    minute = 0;
    hour = 0;
    clock.innerHTML = "00:00:00";
    startBtn.disabled = false;
    lapBtn.style.display = "none";
    lapDiv.textContent = ""
}

// Lap
function lap() {
    let pTag = document.createElement("p");
    let pText = document.createTextNode(clock.innerHTML);
    pTag.appendChild(pText);
    lapDiv.appendChild(pTag);
}