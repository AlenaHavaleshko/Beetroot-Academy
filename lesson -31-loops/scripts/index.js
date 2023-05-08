/* minimum level 
Запитай у користувача його вік і визначи, ким він є: 
дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...),
 передбач можливість введення невірних даних.
*/

// const age = prompt (`Enter currentt age, please`)
// if (age <= 11 && age> 0) {
//   alert (`You are child`);
// } else if (age >= 12 && age <= 17) {
//     alert (`You are teenager`); 
// } else if (age >= 18 && age <= 59) {
//     alert (`You are adult`);
// } else if (age >= 60 ) {
//     alert (`You are pensioner`);
// }

/* Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/

// 1 - if else
// let number = prompt (`Enter a number from 0 to 9`);
// number = Number(number);
// if (number === 0) {
//   alert (`'`);
// } else if (number === 1) {
//   alert (`!`);
// } else if (number === 2) {
//   alert (`@`);
// } else if (number === 3) {
//   alert (`#`);
// } else if (number === 4) {
//   alert (`$`);
// } else if (number === 5) {
//   alert (`%`);
// } else if (number === 6) {
//   alert (`^`);
// } else if (number === 7) {
//   alert (`&`);
// } else if (number === 8) {
//   alert (`*`);
// } else if (number === 9) {
//   alert (`(`);
// } else if (number > 9) {
//   alert (`You enter wrong digit`);
// }

// 2- swich-case
// let number = prompt (`Enter a number from 0 to 9`, ' ');
// number = Number(number);
// switch (number) {
//   case 0 : alert (`'`);
//     break;
//   case 1 : alert (`!`);
//     break;
//   case 2 : alert (`@`);
//     break;
//   case 3 : alert (`#`);
//     break;
//   case 4 : alert (`$`);
//     break;
//   case 5 : alert (`%`);
//     break;
//   case 6 : alert (`^`);
//     break;
//   case 7 : alert (`&`);
//     break;
//   case 8 : alert (`*`);
//     break;
//   case 9 : alert (`(`);
//     break;
//   // case number>9: alert (`You enter wrong digit`); - Чи можна цей пункт в світче прописати, чи тільки дефолт буде сробатувать?

//     default: 
//     alert (`You enter wrong digit`);
//     break;
// }


/* 3. Підрахуй суму всіх чисел в заданому користувачем діапазоні. */
// function workWithRange(firstName) {
 
//   calculate(min, max);
// }

// function calculate(min, max) {
//   if (min && max) { // null, undefiend, 0 - false
//     let result = 0;
//     for (let value = min; value <= max; value++) {
//       result += value;
//     }
//     alert(`Result is ${result}`);
//   } else {
//     alert(`It's wrong format`);
//   }
// }

// function multiple(min, max) {
//   if (min && max) { // null, undefiend, 0 - false
//     let result = 1;
//     for (let value = min; value <= max; value++) {
//       result *= value;
//     }
//     alert(`Result is ${result}`);
//   } else {
//     alert(`It's wrong format`);
//   }
// }

// let min = prompt(`Enter min value`);
// let max = prompt(`Enter max value`);

// min = Number(min);
// max = Number(max);

// // calculate(min, max);
// multiple(min, max);

  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // const prompt (`Введіть діапазон числел від [1 до 15]`);
  // sum = (arr[0] +=1);
  // console.log (sum);

/* 4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.*/ 

// function NSD () {
//   for (var x = arguments[0], i = 1; i < arguments.length; i++) {
//     var y = arguments[i];
//     while (x && y) {
//       x > y ? x %= y : y %= x;
//     }
//     x += y;
//   }
//   return x;
// }

// console.log([
//   NSD( 10, 15 ),
//   NSD( 111, 555, 407 ),
//   NSD( 100, 200, 300, 400, 2225, 175, 19873625 ),
// ].join( '\n' )); 



/* NORMA */
// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

// let totalSpent = prompt (`Enter sum of your total spent`);
// totalSpent = Number(totalSpent);
// let discount = 0;

// if (totalSpent >= 200 && totalSpent < 300) {
//   console.log(`Your discont is 3%`);
//   discount = 0.03;
// } else if (totalSpent >= 300 && totalSpent < 500) {
//   console.log(`Your discont is 5%`);
//   discount = 0.05;
// } else if (totalSpent >= 500) {
//   console.log(`Your discont is 7%`);
//   discount = 0.07;
// }

// console.log(
//   `We place an order for the amount ${totalSpent} with a ${(discount * 100).toFixed(2)}%`,
// );


/* 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем. */
let arr = [];
// for (let i = 0; i < 10; i ++) {  //  i < 10 -> прогнати  10 р
//   let digit = prompt (`Enter your digit`);  // зацикліла prompt 10 разів
//   digit = Number(digit);
//   arr.push (digit);                         // додала в массив пушом цифру
// }

// const arr = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4];
// for (const element of arr);
// console.log(element);

let countOfPozitiv = 0;
let countOfNegativ = 0;
let countOfZero = 0;
let countOdd = 0;
let countEven = 0;


// перебираем послідовно eлементи масива
for (const number of arr) {
  if (number === 0) {
    countOfZero += 1;
  }
  else if (number > 0) {
    countOfPozitiv += 1;
  }
  else if (number < 0) {
    countOfNegativ += 1 ;
  }
  if (number % 2 === 0) {
    countEven += 1;
  }
  else countOdd += 1;
  
  console.log(number);
}
  console.log('Result:');
  console.log(countOfPozitiv);
  console.log(countOfNegativ);
  console.log(countOfZero);
  console.log(countOdd);
  console.log(countEven);





























  


