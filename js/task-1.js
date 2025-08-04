function slugify(title) {
  // Перетворюємо заголовок в нижній регістр.
  const lowerCaseTitle = title.toLowerCase();

  // Розбиваємо рядок на масив слів, використовуючи пробіл як розділювач.
  const words = lowerCaseTitle.split(' ');

  // Об'єднуємо слова в один рядок, використовуючи тире як розділювач.
  const slug = words.join('-');

  // Повертаємо отриманий slug.
  return slug;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
