let timer;
let isRunning = false;
let lapCounter = 1;

function startStop() {
  if (!isRunning) {
    isRunning = true;
    document.getElementById("startStopBtn").textContent = "Stop";
    timer = setInterval(updateTime, 10);
  } else {
    isRunning = false;
    document.getElementById("startStopBtn").textContent = "Start";
    clearInterval(timer);
  }
}

function lapReset() {
  if (isRunning) {
    let lapTime = document.getElementById("display").textContent;
    let lapItem = document.createElement("li");
    lapItem.textContent = "Lap " + lapCounter + ": " + lapTime;
    document.getElementById("laps").appendChild(lapItem);
    lapCounter++;
  } else {
    clearInterval(timer);
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStopBtn").textContent = "Start";
    document.getElementById("laps").innerHTML = "";
    isRunning = false;
    lapCounter = 1;
  }
}

function updateTime() {
  let display = document.getElementById("display");
  let time = display.textContent.split(":");
  let hours = parseInt(time[0], 10);
  let minutes = parseInt(time[1], 10);
  let seconds = parseInt(time[2], 10);

  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  display.textContent =
    (hours < 10 ? "0" : "") + hours + ":" +
    (minutes < 10 ? "0" : "") + minutes + ":" +
    (seconds < 10 ? "0" : "") + seconds;
}
