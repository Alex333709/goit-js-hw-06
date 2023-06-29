// 1.Я знаходжу елементи font-size-control і text, використовуючи метод document.querySelector. Зберігаю посилання на ці елементи в змінних fontSizeControl і textElement відповідно.
const fontSizeControl = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");
// 2. Я додаю слухач події input до елементу font-size-control.
fontSizeControl.addEventListener("input", function () {
  const fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;
});
// 3.У функції, яка викликається при зміні значення повзунка, я отримую значення повзунка за допомогою fontSizeControl.value. Це значення представляє розмір шрифту у пікселях.
// 4.Встановлюю отриманий розмір шрифту для елементу text, використовуючи style.fontSize. Це змінює властивість font-size у стилі елементу.
