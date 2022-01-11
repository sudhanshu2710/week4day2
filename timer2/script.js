const timerDisplay = document.querySelector(".timer");
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");

let stopWatch = true;
let sec;
let min;
let hour;
let setTimer;
let count = 0;
timerDisplay.textContent = `0hour:0min:0sec`;
start.addEventListener("click", () => {
  if (count === 0) {
    sec = +input3.value;
    min = +input2.value;
    hour = +input1.value;
    count++;
  }

  console.log(`${hour}hour:${min}min:${sec}sec`);
  if (stopWatch) {
    const tick = () => {
      sec -= 1;
      if (sec === 0) {
        min -= 1;
        sec = 60;
      }
      if (min === 0) {
        hour -= 1;
        min = 60;
      }

      timerDisplay.textContent = `${hour}hour:${min}min:${sec}sec`;
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
  timerDisplay.textContent = `${hour}hour:${min}min:${sec}sec`;
  stopWatch = true;
});
