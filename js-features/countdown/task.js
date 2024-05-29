const timer = document.getElementById('timer');
function startTimer() {
  timer.textContent--;
  if (timer.textContent == 0) {
    clearInterval(timerInterval);
    alert('Вы победили в конкурсе!');
  }
}

const timerInterval = setInterval(startTimer, 1000);
