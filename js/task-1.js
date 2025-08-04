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
