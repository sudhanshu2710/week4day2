const timerDisplay = document.querySelector(".timer");
const timer = () => {
  const now = new Date();
  timerDisplay.textContent = `${now}`;
};

setInterval(timer, 1000);
