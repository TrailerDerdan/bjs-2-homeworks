let preloader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let answer = JSON.parse(xhr.responseText);
        preloader.classList.remove('loader_active');
        let valutes = answer.response.Valute;
        for (let key in valutes) {
            if (valutes.hasOwnProperty(key)) {
                let valute = valutes[key];
                let itemDiv = document.createElement('div');
                itemDiv.className = 'item';
                itemDiv.innerHTML = `
                    <div class="item__code">${valute.CharCode}</div>
                    <div class="item__value">${valute.Value}</div>
                    <div class="item__currency">руб.</div>
                `;
                itemsContainer.appendChild(itemDiv);
            }
        }
    }
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
