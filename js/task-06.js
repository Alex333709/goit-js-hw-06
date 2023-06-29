// 1.Отримую посилання на елемент input:
const validationInput = document.querySelector("#validation-input");
// 2.Далі я отримую потрібну кількість символів з атрибуту data-length інпуту, використовуючи властивість dataset.length. Оскільки значення атрибуту є рядком, я перетворюю його на число за допомогою Number() і зберігаю у змінну inputLength.
const inputLength = Number(validationInput.dataset.length);
// 3.Додаю слухач події "blur" до інпуту, використовуючи метод addEventListener(). Це дозволяє викликати функцію, коли інпут втрачає фокус.
validationInput.addEventListener("blur", validateInput);
// 4.Створюю функцію validateInput, яка буде перевіряти кількість символів у введеному значенні, для цього отримую значення data-length з атрибуту елементу input, потім отримую значення інпуту і очищаю його від зайвих пробілів, перевіряю, чи співпадає кількість символів з вимогами та залежно від результату перевірки, я додаю або видаляю відповідні класи для стилізації інпуту:
function validateInput() {
  const inputValue = validationInput.value.trim();
  const isValid = inputValue.length === Number(inputLength);

  if (isValid) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}
