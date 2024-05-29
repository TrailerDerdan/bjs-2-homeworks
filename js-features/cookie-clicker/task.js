// id="clicker__counter" - счётчик
// id="cookie" - картинка

const img = document.getElementById('cookie');
let imageSize = 200;
let increase = false;
let counterValue = 0;

function сlick() {
  counterValue++;
  img.width = increase ? (imageSize -= 50) : (imageSize += 50);
  img.height = imageSize;
  increase = !increase;
  document.getElementById('clicker__counter').textContent = counterValue;
}

img.onclick = сlick;
