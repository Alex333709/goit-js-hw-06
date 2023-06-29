// 1.Створюю змінну counterValue з початковим значенням 0:
let counterValue = 0;
// 2. Отримую посилання на кнопки та елемент span за допомогою їх ідентифікаторів або інших атрибутів:
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"] ');
const valueElement = document.querySelector("#value");
// 3.Додаю слухачів подій "click" до кнопок:
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
// 4. Оголошую функції decrement та increment, які зменшують і збільшують значення лічильника на 1 відповідно:
function decrement() {
  counterValue -= 1;
  updateValue();
}

function increment() {
  counterValue += 1;
  updateValue();
}
// 5.Оголошую функцію updateValue, яка оновлює текстове вміст елементу span зі значенням counterValue:
function updateValue() {
  valueElement.textContent = counterValue;
}
