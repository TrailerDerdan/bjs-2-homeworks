let preloader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
if (xhr.readyState === xhr.DONE) {
let answer = JSON.parse(xhr.responseText, function(key, value) {
if (key === 'Valute') return new Array(value);
return value;
});
preloader.classList.remove('loader_active');
}
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

