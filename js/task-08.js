const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  const obj = {
    login: email.value,
    password: password.value
  }
  console.log(obj);
  event.currentTarget.reset();
}


// Napisz skrypt zarządzania formularzem logowania.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// 1. Opracowanie przesyłania formularza form.login-form powinno przebiegać 
// zgodnie ze zdarzeniem submit.
// 2. Podczas przesyłania formularza strona nie powinna się restartować.
// 3. Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem 
// o tym, że wszystkie pola powinny zostać wypełnione.
// 4. Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, 
// zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, 
// a wartość pola - wartością właściwości. 
// 5. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// 6. Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść 
// wartości pól formularza metodą reset.
