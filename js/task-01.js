const categoriesList = document.querySelectorAll("#categories .item");
//Спочатку ми використовуємо document.querySelectorAll('#categories .item'), щоб отримати всі елементи з класом .item, які є дочірніми для елемента з ідентифікатором #categories. Метод querySelectorAll повертає колекцію всіх відповідних елементів.
console.log("Number of categories:", categoriesList.length);
//Потім ми використовуємо console.log('Number of categories:', categoriesList.length);, щоб вивести в консоль кількість категорій. categoriesList.length повертає кількість елементів у колекції, яку ми отримали на попередньому кроці.
//Далі, ми використовуємо categoriesList.forEach(category => { ... }), щоб пройтися по кожному елементу категорії. Метод forEach викликає задану функцію для кожного елемента в колекції categoriesList.
categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  //Усередині функції category => { ... } ми отримуємо назву категорії за допомогою category.querySelector('h2').textContent;. За допомогою category.querySelector('h2'), ми шукаємо перший елемент <h2>, який є дочірнім для поточної категорії. Використання .textContent дозволяє отримати текстовий вміст цього елемента.
  const categoryElements = category.querySelectorAll("li").length;
  //Ми також використовуємо category.querySelectorAll('li').length, щоб знайти всі елементи <li>, які є дочірніми для поточної категорії, і потім отримати їх кількість за допомогою .length.

  console.log(`Category : ${categoryName}`);
  //Для кожної категорії ми використовуємо console.log для виведення інформації про категорію та кількість елементів. Використовується рядок шаблону (template string) з змінними ${categoryName} і ${categoryElements} для побудови повідомлення.
  console.log(`Elements: ${categoryElements}`);
});
