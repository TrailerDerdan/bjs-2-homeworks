const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');

    value.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    list.addEventListener('click', (event) => {
        const menuItem = event.target.closest('.dropdown__item');
        if (menuItem) {
            value.textContent = menuItem.textContent.trim();
            list.classList.remove('dropdown__list_active');
            event.preventDefault();
        }
    });
});

