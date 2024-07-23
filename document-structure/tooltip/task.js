const hasTooltip = document.querySelectorAll('.has-tooltip');
hasTooltip.forEach((el) => {
  el.addEventListener('click', function (event) {
    event.preventDefault();
    let tooltip = el.querySelector('.tooltip');
    let rect = el.getBoundingClientRect();

    if (tooltip) {
      tooltip.classList.toggle('tooltip_active');
    } else {
      let tooltipText = el.getAttribute('title');

      tooltip = document.createElement('div');
      tooltip.className = 'tooltip tooltip_active';
      tooltip.innerText = tooltipText;

      tooltip.style.position = 'absolute';
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.top = `${rect.bottom + 5}px`;

      document.body.appendChild(tooltip);
    }
  });
});
