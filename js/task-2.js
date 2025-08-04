function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо два масиви в один новий.
  const newArray = firstArray.concat(secondArray);

  // Перевіряємо, чи перевищує довжина нового масиву maxLength.
  if (newArray.length > maxLength) {
    // Якщо так, повертаємо копію масиву з довжиною maxLength.
    // Метод slice() створює новий масив, не змінюючи оригінал.
    return newArray.slice(0, maxLength);
  }

  // В іншому випадку, повертаємо весь новий масив.
  return newArray;
}
