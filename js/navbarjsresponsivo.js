document.getElementById('menuToggle').addEventListener('click', function() {
    const navbar = document.getElementById('navebar');
    const foto = document.getElementById('foto');
    navbar.classList.toggle('active');
    foto.classList.toggle('active');
});