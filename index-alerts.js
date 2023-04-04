const formEl = document.querySelector('form');

// sprawdzam, czy formularz został wyszukany i dopiero przypisuję nasłuchiwanie zdarzenia submit
if (formEl) {
  formEl.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault(); // blokuję automatyczne wysłanie formularza, by móc sprawdzić ewentualne błędy

// Przykład 1
  // jeśli pole nie zostało wypełnione...
  if (formEl.firstName.value.length === 0) {
    // ...wyświetl alert z treścią komunikatu
    alert('Pole Imię nie może być puste!');
  } else if (formEl.lastName.value.length === 0) {
    alert('Pole Nazwisko nie może być puste!');
  } else if (formEl.street.value.length === 0) {
    alert('Pole Ulica nie może być puste!');
  } // itd.


// // Przykład 2
// if (formEl.firstName.value.length === 0) {
//   alert('Pole Imię nie może być puste!');
// }
// if (formEl.lastName.value.length === 0) {
//   alert('Pole Nazwisko nie może być puste!');
// }
// if (formEl.street.value.length === 0) {
//   alert('Pole Ulica nie może być puste!');
// } // itd.
}
