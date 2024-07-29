const editor = document.querySelector('#editor');
window.onload = function() {
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText;
    }
};
editor.addEventListener('input', function() {
    localStorage.setItem('editorText', editor.value);
});
