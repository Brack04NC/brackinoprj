// Animazione scroll su click sui link di navigazione
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  });
});

function changeTheme(theme) {
    let themeStyle = document.getElementById('theme-style');
    if (theme === 'light') {
        themeStyle.setAttribute('href', 'styles-light.css');
    } else {
        themeStyle.setAttribute('href', 'styles-dark.css');
    }
}

// Imposta il tema di default al caricamento della pagina
document.addEventListener('DOMContentLoaded', function() {
    changeTheme('dark');
    document.getElementById('theme').value = 'dark';
});

