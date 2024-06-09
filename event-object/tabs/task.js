const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    document.querySelector('.tab_active').classList.remove('tab_active');
    document
      .querySelector('.tab__content_active')
      .classList.remove('tab__content_active');

    tab.classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
  });
});

// const dropdowns = document.querySelectorAll('.dropdown');

// dropdowns.forEach(dropdown => {
//     const value = dropdown.querySelector('.dropdown__value');
//     const list = dropdown.querySelector('.dropdown__list');

//     value.addEventListener('click', () => {
//         list.classList.toggle('dropdown__list_active');
//     });

//     list.addEventListener('click', (event) => {
//         const menuItem = event.target.closest('.dropdown__item');
//         if (menuItem) {
//             value.textContent = menuItem.textContent.trim();
//             list.classList.remove('dropdown__list_active');
//             event.preventDefault();
//         }
//     });
// });
