const holes = Array.from(document.getElementsByClassName('hole'));
let killMole = dead.textContent;
let missMole = lost.textContent;

holes.forEach((hole) => {
  hole.addEventListener('click', () => {
    if (hole.classList.contains('hole_has-mole')) {
      killMole++;
      alert(`Победа! Счёт: ${killMole}`);
    } else {
      missMole++;
      alert(`Поражение! Счёт: ${missMole}`);
    }
  });
});

if (killMole == 10) {
  alert('Вы победили!');
  killMole = 0;
  missMole = 0;
}

if (missMole == 5) {
  alert('Вы проиграли!');
  killMole = 0;
  missMole = 0;
}
