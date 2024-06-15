document.addEventListener('DOMContentLoaded', function () {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach(function (rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeCaseIndex = 0;

    setInterval(function () {
      cases[activeCaseIndex].classList.remove('rotator__case_active');
      activeCaseIndex = (activeCaseIndex + 1) % cases.length;
      cases[activeCaseIndex].classList.add('rotator__case_active');
    }, 1000);
  });
});
