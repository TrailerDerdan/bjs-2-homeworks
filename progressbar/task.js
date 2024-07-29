const url = 'https://students.netoservices.ru/nestjs-backend/upload'
const form = document.getElementById('form')
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const progress = document.getElementById('progress');
    const formData = new FormData(this);
    const xhr = new XMLHttpRequest(); 
    xhr.open('POST', url, true);
    xhr.upload.addEventListener('progress', function(el) {
        if (el.lengthComputable) {
            const percentComplete = el.loaded / el.total;
            progress.value = percentComplete;
        }
    });

    xhr.onload = function() {
        if (xhr.status === 200) {
            console.log('Файл загружен успешно!');
        } else {
            console.error('Ошибка при загрузке: ' + xhr.status);
        }
    };
    xhr.send(formData);
});
