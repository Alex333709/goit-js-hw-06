// 1. отримую посилання на форму з класом .login-form і кнопку відправлення за допомогою document.querySelector():
const loginForm = document.querySelector(".login-form");
const submitButton = loginForm.querySelector('button[type="submit"]');
// 2. Додаю слухач події submit до форми, щоб виконати код під час натискання кнопки "Login" або клавіші Enter:
loginForm.addEventListener("submit", function (event) {
  // 3.За допомогою event.preventDefault() зупиняю стандартну поведінку форми, щоб уникнути перезавантаження сторінки:
  event.preventDefault();

  // 4.Отримую значення полів електронної пошти і пароля за допомогою loginForm.elements.email і loginForm.elements.password:
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;
  // 5.Перевіряю, чи всі поля заповнені, порівнюючи значення полів з порожнім рядком:
  if (emailValue === "" || passwordValue === "") {
    alert("Будь ласка, заповніть всі поля");
    return;
  }
  // 6.Створюю об'єкт loginData, використовуючи введені дані:
  const loginData = {
    email: emailValue,
    password: passwordValue,
  };
  // 7.Виводжу об'єкт loginData в консоль:
  console.log(loginData);
  // 8. Очищаю значення полів форми, використовуючи метод reset():
  loginForm.reset();
});
