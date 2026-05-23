/* ── CALCULATOR ── */
const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
    setTimeout(() => clearDisplay(), 1200);
  }
}

/* ── STOPWATCH ── */
const swDisplay = document.getElementById("sw-display");
let swTimer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function swStart() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    swTimer = setInterval(swUpdate, 10);
    isRunning = true;
  }
}

function swStop() {
  if (isRunning) {
    clearInterval(swTimer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function swReset() {
  clearInterval(swTimer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  swDisplay.textContent = "00:00:00:00";
}

function swUpdate() {
  elapsedTime = Date.now() - startTime;
  const h  = Math.floor(elapsedTime / 3600000);
  const m  = Math.floor((elapsedTime / 60000) % 60);
  const s  = Math.floor((elapsedTime / 1000) % 60);
  const ms = Math.floor((elapsedTime % 1000) / 10);
  swDisplay.textContent =
    `${pad(h)}:${pad(m)}:${pad(s)}:${pad(ms)}`;
}

function pad(n) { return String(n).padStart(2, "0"); }
