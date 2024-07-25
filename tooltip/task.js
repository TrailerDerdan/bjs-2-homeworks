const hasTooltip = document.querySelectorAll('.has-tooltip');
let tooltip; 

hasTooltip.forEach((el) => {
  el.addEventListener('click', function (event) {
    event.preventDefault();

    if (!tooltip) { 
      tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      document.body.appendChild(tooltip);
    }

    let tooltipText = el.getAttribute('title');
    tooltip.innerText = tooltipText;

    let rect = el.getBoundingClientRect();
    tooltip.style.position = 'absolute';
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom + 5}px`;

    tooltip.classList.toggle('tooltip_active'); 
  });
});


document.addEventListener('click', function(event) {
  if (tooltip && !event.target.classList.contains('has-tooltip')) {
    tooltip.classList.remove('tooltip_active');
  }
});

