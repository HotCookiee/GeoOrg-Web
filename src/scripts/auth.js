const toggleBtns = document.querySelectorAll('.toggle-btn');
const toggleSlider = document.querySelector('.toggle-slider');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const formType = btn.getAttribute('data-form');
        
        toggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (formType === 'register') {
            toggleSlider.classList.add('register');
            loginForm.classList.remove('active');
            registerForm.classList.add('active');
        } else {
            toggleSlider.classList.remove('register');
            registerForm.classList.remove('active');
            loginForm.classList.add('active');
        }
    });
});


const registerPasswordInput = document.querySelector('#register-form input[type="password"]');
if (registerPasswordInput) {
    registerPasswordInput.addEventListener('input', (e) => {
        const password = e.target.value;
        const strengthBar = document.querySelector('.strength-bar');
        const strengthText = document.querySelector('.strength-text');
        
        if (strengthBar && strengthText) {
            let strength = 0;
            if (password.length >= 8) strength += 33;
            if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 33;
            if (/[0-9]/.test(password) && /[!@#$%^&*]/.test(password)) strength += 34;
            
            strengthBar.style.setProperty('var(--strength)', strength + '%');
            
            if (strength < 40) {
                strengthText.textContent = 'Слабый пароль';
                strengthText.style.color = 'var(--color-error)';
            } else if (strength < 70) {
                strengthText.textContent = 'Средний пароль';
                strengthText.style.color = 'var(--color-warning)';
            } else {
                strengthText.textContent = 'Сильный пароль';
                strengthText.style.color = 'var(--color-success)';
            }
        }
    });
}
