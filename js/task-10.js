function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// 1.Отримую посилання на потрібні елементи
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
// 2.Додаю слухач події на кнопку "Створити" та "Очистити"
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
function createBoxes() {
  // 3. Отримую значення кількості елементів з поля введення
  const amount = input.value;

  //4. Створюю колекцію елементів
  let boxes = "";

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    const box = `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    boxes += box;
  }

  // 5. Рендерю колекцію елементів в контейнері
  boxesContainer.innerHTML = boxes;
}

function destroyBoxes() {
  // 6. Очищаю контейнер
  boxesContainer.innerHTML = "";
}
