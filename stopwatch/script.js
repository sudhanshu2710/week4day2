const timerDisplay = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
let stopWatch = true;
let sec = 0;
let min = 0;
let hour = 0;
let setTimer;
start.addEventListener("click", () => {
  if (stopWatch) {
    const tick = () => {
      sec += 1;
      if (sec === 60) {
        min += 1;
        sec = 0;
      }
      if (min === 60) {
        hour += 1;
        min = 0;
      }
      if (sec > 0) {
        timerDisplay.textContent = `${sec} sec`;
      }
      if (min > 0) {
        timerDisplay.textContent = `${min}min:${sec}sec`;
      }
      if (hour > 0) {
        timerDisplay.textContent = `${hour}hour:${min}min:${sec}sec`;
      }
    };
    setTimer = setInterval(tick, 1000);
  }
  stopWatch = false;
});

pause.addEventListener("click", () => {
  clearInterval(setTimer);
  stopWatch = true;
});

reset.addEventListener("click", () => {
  sec = 0;
  min = 0;
  hour = 0;
  clearInterval(setTimer);
  timerDisplay.textContent = `${sec}sec`;
  stopWatch = true;
});
