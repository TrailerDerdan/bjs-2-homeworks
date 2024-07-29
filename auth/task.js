const signinForm = document.getElementById('signin__form');
const welcomeBlock = document.getElementById('welcome');
const userIdSpan = document.getElementById('user_id');
const errorMessage = document.getElementById('error-message');

window.onload = function() {
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
        showWelcome(storedUserId);
    }
};

function showWelcome(userId) {
    userIdSpan.textContent = userId;
    welcomeBlock.classList.add('welcome_active');
    document.getElementById('signin').classList.remove('signin_active');
}

signinForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(signinForm);
    const loginData = {
        login: formData.get('login'),
        password: formData.get('password')
    };
});
