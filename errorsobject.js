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

  // tworzę obiekt, którego właściwości odpowiadają nazwom pól formularza
  const errors = {
    firstName: [],
    lastName: [],
    street: [],
  };

  if (formEl.firstName.value.length === 0) {
    // jeśli pole nie zostało wypełnione, dodaję komunikat do tablicy o odpowiedniej nazwie w obiekcie `errors`
    errors.firstName.push('Pole Imię nie może być puste');
  }
  if (formEl.lastName.value.length === 0) {
    errors.lastName.push('Pole Nazwisko nie może być puste');
  }
  if (formEl.street.value.length === 0) {
    errors.street.push('Pole Ulica nie może być puste');
  } // itd.

  // dla przykładu dodajmy kolejny warunek, który sprawdza, czy pole zawiera same litery
  if (!formEl.firstName.value.match(/^[a-zA-Z –-]+$/)) {
    // jeśli pole jest błędnie wypełnione, dodaję komunikat do tablicy o odpowiedniej nazwie w obiekcie `errors`
    errors.firstName.push('Pole Imię może zawierać tylko litery!');
  }

  // dla każdego klucza w obiekcie `errors`...
  for (const field in errors) {
    // sprawdzam, czy mam już elementy <p> z błędami:
    // -> formEl[field] to pole formularza w DOM-ie (korzystamy z tego, że nazwa klucza w obiekcie i nazwa pola w pliku HTML są takie same);
    // -> jego parentElement to <label> – wewnątrz niego szukamy elementów <p> (dodaję je poniżej w przypadku błędów)
    const errorMsgEls = formEl[field].parentElement.querySelectorAll('p');
    
    if (errorMsgEls.length !== 0) {
      // jeśli takie elementy <p> są, to je usuwam, by się nie zduplikowały
      Array.from(errorMsgEls).forEach(element => element.remove());
    }
    if (errors[field].length !== 0) {
      // iteruję po każdej tablicy z błędami dla danego pola, jeśli nie jest ona pusta
      errors[field].forEach(function (message) {
        // tworzę element <p> dla błędu
        const errorMsgEl = document.createElement('p');
        // uzupełniam go treścią błędu
        errorMsgEl.innerText = message;
        // dodaję element <p> do elemntu <label>, który jest rodzicem dla elementu <input>
        formEl[field].parentElement.appendChild(errorMsgEl);
      });
    }
  }
}
