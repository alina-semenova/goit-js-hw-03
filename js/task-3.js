function filterArray(numbers, value) {
  // 1. Створюємо порожній масив, в який будемо додавати підходящі числа.
  const filteredNumbers = [];

  // 2. Використовуємо цикл for для ітерації по кожному елементу масиву numbers.
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    // 3. Використовуємо умовний оператор if для перевірки,
    // чи поточне число більше за значення value.
    if (currentNumber > value) {
      // 4. Якщо умова істинна, додаємо число до нашого нового масиву.
      filteredNumbers.push(currentNumber);
    }
  }

  // 5. Повертаємо новий масив з підходящими числами.
  return filteredNumbers;
}
