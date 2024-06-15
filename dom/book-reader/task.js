document.addEventListener('DOMContentLoaded', function () {
  const fontSizeControls = document.querySelectorAll('.font-size');

  fontSizeControls.forEach((control) => {
    control.addEventListener('click', function (event) {
      event.preventDefault();

      fontSizeControls.forEach((control) => {
        control.classList.remove('font-size_active');
      });

      this.classList.add('font-size_active');

      const size = this.getAttribute('data-size');

      const bookElement = document.getElementById('book');

      bookElement.classList.remove('book_fs-big', 'book_fs-small');

      if (size === 'big') {
        bookElement.classList.add('book_fs-big');
      } else if (size === 'small') {
        bookElement.classList.add('book_fs-small');
      }
    });
  });
});
