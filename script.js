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
      // Salva il tema selezionato nel localStorage
      localStorage.setItem('selectedTheme', theme);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.querySelector('.switch input');
    const themeStyle = document.getElementById('theme-style');

    // Imposta il tema iniziale su "dark"
    themeStyle.setAttribute('href', 'styles-dark.css');
    themeSwitcher.checked = false;

    // Aggiunge un listener per il cambiamento dello switch
    themeSwitcher.addEventListener('change', function() {
        if (themeSwitcher.checked) {
            themeStyle.setAttribute('href', 'styles-light.css');
        } else {
            themeStyle.setAttribute('href', 'styles-dark.css');
        }
    });

    // Gestione della sfocatura e dello zoom delle card
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            cards.forEach(c => {
                if (c !== card) {
                    c.classList.add('dimmed');
                }
            });
        });

        card.addEventListener('mouseleave', () => {
            cards.forEach(c => {
                c.classList.remove('dimmed');
            });
        });
    });
});


  
  /*
  document.addEventListener('DOMContentLoaded', function() {
      // Carica il tema salvato o imposta il tema di default a 'dark'
      const savedTheme = localStorage.getItem('selectedTheme') || 'dark';
      changeTheme(savedTheme);
      document.getElementById('theme').value = savedTheme;
  
      // Gestione degli effetti di hover sulle card
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
          card.addEventListener('mouseenter', () => {
              cards.forEach(c => {
                  if (c !== card) {
                      c.classList.add('dimmed');
                  }
              });
          });
  
          card.addEventListener('mouseleave', () => {
              cards.forEach(c => {
                  c.classList.remove('dimmed');
              });
          });
      });
  });
  */