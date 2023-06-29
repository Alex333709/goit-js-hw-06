const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
//Отримуємо посилання на елемент <ul> з класом .gallery за допомогою document.querySelector('.gallery').

//Створюємо функцію createGalleryItem, яка приймає об'єкт з властивостями url та alt. В цій функції ми створюємо розмітку для кожного елемента галереї використовуючи шаблонні рядки. Розмітка містить <li> елемент з класом .gallery-item і <img> елемент з властивостями src та alt, які отримуємо з об'єкта.
const createGalleryItem = ({ url, alt }) => {
  return `
    <li class="gallery-item">
      <img src="${url}" alt="${alt}" width="500">
    </li>
  `;
};

const galleryMarkup = images.map(createGalleryItem).join("");
//Використовуємо метод map для перебору об'єктів в масиві images і виклику функції createGalleryItem для створення розмітки для кожного елемента галереї. Отримані розмітки з'єднуємо в один рядок за допомогою join('').

gallery.insertAdjacentHTML("beforeend", galleryMarkup);
//Використовуємо gallery.insertAdjacentHTML('beforeend', galleryMarkup) для вставки розмітки галереї в кінець елемента <ul> з класом .gallery. Метод insertAdjacentHTML дозволяє вставити HTML рядок вказаного контенту у вказане місце (в даному випадку, в кінець елемента <ul>).
