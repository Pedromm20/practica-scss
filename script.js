document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu ul');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});