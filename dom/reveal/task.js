const elements = document.querySelectorAll('.reveal');

function isVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();
  return bottom >= 0 && top <= window.innerHeight;
}

function handleScroll() {
  elements.forEach((element) => {
    if (isVisible(element)) {
      element.classList.add('reveal_active');
    }
  });
}

document.addEventListener('scroll', handleScroll);
