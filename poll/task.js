const url = 'https://students.netoservices.ru/nestjs-backend/poll';

function getData(callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            callback(response);
        }
    };
}

function asks(data) {
    const titleElement = document.getElementById('poll__title');
    titleElement.textContent = data.data.title;
    const answersContainer = document.getElementById('poll__answers');
    answersContainer.innerHTML = '';

    data.data.answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answer;
        button.onclick = function() {
            alert('Спасибо, ваш голос засчитан!');
        };
        answersContainer.appendChild(button);
    });
}
getData(asks);
