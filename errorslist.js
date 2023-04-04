const formEl = document.querySelector('form');

// wyszukuję w drzewie DOM listę dla komunikatów
const messagesList = document.querySelector('.messages');

// sprawdzam, czy formularz został wyszukany i dopiero przypisuję nasłuchiwanie zdarzenia submit
if (formEl) {
  formEl.addEventListener('submit', handleSubmit);
}

function handleSubmit(e) {
  e.preventDefault(); // blokuję automatyczne wysłanie formularza, by móc sprawdzić ewentualne błędy

  messagesList.innerText = ""; // czyszczę listę błędów po każdym submicie formularza, by wyświetlić tylko błędy bieżące

  if (formEl.firstName.value.length === 0) {
    // tworzę nowy element listy
    const liEl = document.createElement('li');
    // dodaję do elementu listy treść: komunikat
    liEl.innerHTML = 'Pole Imię nie może być puste';
    // dodaję element listy komunikatów
    messagesList.appendChild(liEl);
  }
  if (formEl.lastName.value.length === 0) {
    const liEl = document.createElement('li');
    liEl.innerHTML = 'Pole Nazwisko nie może być puste';
    messagesList.appendChild(liEl);
  }
  if (formEl.street.value.length === 0) {
    const liEl = document.createElement('li');
    liEl.innerHTML = 'Pole Ulica nie może być puste';
    messagesList.appendChild(liEl);
  } // itd.
}
