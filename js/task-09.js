function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// 1.За допомогою методу querySelector знаходжу необхідні елементи за їх CSS-селекторами: .color для елемента, де буде відображатися колір, і .change-color для кнопки, яка змінює колір фону.
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");
// 2.Додаю слухач події click до кнопки .change-color, використовуючи метод addEventListener.
changeColorButton.addEventListener("click", function () {
  // 3.У функції-обробнику події генерую випадковий шестнадцятковий колір, використовуючи функцію getRandomHexColor.
  const randomColor = getRandomHexColor();
  // 4.Встановлюю згенерований колір як фоновий колір елемента <body>, використовуючи властивість style.backgroundColor.
  document.body.style.backgroundColor = randomColor;
  // 5.Оновлюю текстовий контент елемента .color згідно зі згенерованим кольором, використовуючи властивість textContent.
  colorSpan.textContent = randomColor;
});
