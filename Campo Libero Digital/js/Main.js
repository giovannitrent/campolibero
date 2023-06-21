// Ottieni il riferimento all'elemento dell'header "Chi Siamo"
const aboutLink = document.getElementById('about-link');

// Aggiungi un gestore di eventi al click sul link
aboutLink.addEventListener('click', (event) => {
  event.preventDefault(); // Previeni il comportamento predefinito del collegamento

  const targetSection = document.getElementById('about'); // Ottieni la sezione di destinazione

  // Scorrimento fluido verso la sezione di destinazione
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
});


// Ottieni il riferimento all'elemento dell'header "Servizi"
const servicesLink = document.getElementById('services-link');

// Aggiungi un gestore di eventi al click sul link
servicesLink.addEventListener('click', (event) => {
  event.preventDefault(); // Previeni il comportamento predefinito del collegamento

  const targetSection = document.getElementById('services-section'); // Ottieni la sezione di destinazione

  // Scorrimento fluido verso la sezione di destinazione
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: 'smooth'
  });
});
