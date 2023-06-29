// 1.Отримую посилання на елементи nameInput та nameOutput за допомогою їх ідентифікаторів:
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
// 2. Додаю слухача події input до інпуту name-input, щоб відстежувати зміни значення:
nameInput.addEventListener("input", updateName);
// 3.Визначаю функцію updateName(), яка буде викликатися при кожному введенні тексту, отримаую значення імені з полів вводу та очищаю його від зайвих пробілів за допомогою "трим", далі перевіряю, чи є ім'я порожнім, якщо ім'я порожнє,то встановлюю текст "Anonymous" у спані nameOutput, інакше, встановлюю введене ім'я у спан nameOutput.
function updateName() {
  const name = nameInput.value.trim();
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
}
