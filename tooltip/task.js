const hasTooltip = document.querySelectorAll('.has-tooltip');
hasTooltip.forEach((e) => {
  e.addEventListener('click', () => {
    let tooltip = e.querySelector('.tooltip');

    if (tooltip) {
      tooltip.classList.toggle('tooltip_active');
    } else {
      let tooltipText = e.getAttribute('title');
      e.insertAdjacentHTML(
        'beforeend',
        `<div class="tooltip tooltip_active">${tooltipText}</div>`
      );
    }
  });
});
