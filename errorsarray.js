const formEl = document.querySelector('form');

// wyszukuję w drzewie DOM listę dla komunikatów
const messagesList = document.querySelector('.messages');

// sprawdzam, czy formularz został wyszukany i dopiero przypisuję nasłuchiwanie zdarzenia submit
if (formEl) {
  formEl.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault(); // blokuję automatyczne wysłanie formularza, by móc sprawdzić ewentualne błędy

  messagesList.innerText = ''; // czyszczę listę błędów po każdym submicie formularza, by wyświetlić tylko błędy bieżące

  const errors = []; // tworzę tablicę, w której będę zbierać komunikaty błędów

  if (formEl.firstName.value.length === 0) {
    // jeśli pole nie zostało wypełnione, dodaję komunikat do tablicy `errors`
    errors.push('Pole Imię nie może być puste');
  }
  if (formEl.lastName.value.length === 0) {
    errors.push('Pole Nazwisko nie może być puste');
  }
  if (formEl.street.value.length === 0) {
    errors.push('Pole Ulica nie może być puste');
  } // itd.

  // jeśli tablica z błędami nie jest pusta, to iteruję po niej i tworzę elementy <li> dla każdego dodanego do niej komunikatu
  if (errors.length !== 0) {
    errors.forEach(function (error) {
      // tworzę nowy element listy
      const liEl = document.createElement('li');
      // dodaję do elementu listy treść: komunikat
      liEl.innerHTML = error;
      // dodaję element listy komunikatów
      messagesList.appendChild(liEl);
    });
  }
}
