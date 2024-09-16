const navBar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        navBar.classList.add('shadow');
    } else {
        navBar.classList.remove('shadow');
    }
});
