const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
//Отримуємо посилання на елемент <ul> з ідентифікатором #ingredients за допомогою document.querySelector('#ingredients').
//Використовуємо метод map для перебору елементів масиву ingredients і створення нового масиву <li> елементів, які відповідають кожному елементу масиву.
const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  //Для кожного елементу масиву ingredients створюємо новий елемент <li> за допомогою document.createElement('li').
  listItem.textContent = ingredient;
  //Встановлюємо текстовий вміст елемента <li> на назву інгредієнта, використовуючи listItem.textContent = ingredient.
  listItem.classList.add("item");
  //Додаємо клас item до елемента <li> за допомогою listItem.classList.add('item').
  return listItem;
  //Повертаємо створений елемент <li> з кожного ітерації циклу map.
});
ingredientsList.append(...listItems);
//Використовуємо ingredientsList.append(...listItems) для вставки всіх елементів <li> в елемент <ul>. Оператор ... розгортає масив listItems в окремі аргументи для функції append(), що дозволяє додати всі елементи одночасно.
