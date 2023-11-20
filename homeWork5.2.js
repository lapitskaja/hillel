/* Знаю, що не продуманий варіант із тим, якщо якусь із форм закрили, а в іншу внесли
данні. Не встигла пропрацювати над цим моментом і над тим, як скоротити код. 
Працюю над цим. */



let userInput1, number1;

while (true) {
  userInput1 = prompt('Enter the first number:');

  if (userInput1 === null) {
    console.log('The first form is closed');
    break;
  }

  if (userInput1.trim() === '' || isNaN(userInput1)) {
    alert('Only numbers, please');
  } else {
    number1 = Number(userInput1);
    break;
  }
}

let userInput2, number2;

while (true) {
  userInput2 = prompt('Enter the second number');

  if (userInput2 === null) {
    console.log('The second form is closed');
    break;
  }

  if (userInput2.trim() === '' || isNaN(userInput2)) {
    alert('Only numbers, please');
  } else {
    number2 = Number(userInput2);
    break;
  }
}

if (!isNaN(number1) && !isNaN(number2)) {
  let start = Math.min(number1, number2);
  let end = Math.max(number1, number2);

  let productOfEvens = 1;
  let sumOfOdds = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      productOfEvens *= i;
    } else {
      sumOfOdds += i;
    }
  }

  alert('Product of even numbers: ' + productOfEvens);
  alert('Sum of odd numbers: ' + sumOfOdds);
}