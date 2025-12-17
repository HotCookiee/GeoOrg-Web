const contact_but = Array.from(document.querySelectorAll("button")).filter(
    button => button.textContent.trim() === 'Связаться с нами'
);

contact_but.forEach(but => {
    but.addEventListener('click', openForm);
});

function openForm() {
    const form = document.querySelector('.Contact-us');
    
    form.style.display = 'flex';
    setTimeout(() => {
        form.classList.add('active');
    }, 10);
    
    document.body.style.overflow = 'hidden';
}

function closeForm() {
    const form = document.querySelector('.Contact-us');
    
    form.classList.remove('active');
    
    setTimeout(() => {
        form.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300); // Время совпадает с transition в CSS
}

document.addEventListener('click', function(e) {
    const form = document.querySelector('.Contact-us');
    if (e.target === form) {
        closeForm();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const form = document.querySelector('.Contact-us');
        if (form && form.classList.contains('active')) {
            closeForm();
        }
    }
});



function myfuync() {
    alert("Кнопка нажата")
}