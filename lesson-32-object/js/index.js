/* Мінімум
1. Напиши всі можливі варіанти створення функцій.

// Function Declaration
function sum(a, b) {
  return a + b;
}

// Function Expression
var sum = function(a, b) {
  return a + b;
}

3)Arrow Function.
// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

2. Створи функцію, яка буде виводити кількість переданих їй аргументів.*/
//  const count = (...arguments) => {
//   console.log (arguments.length)
//  }
//  count (4,5,3,5,2,1,0);
//  count (4,5,6,7,3,45,67);
//  count (10,5,5,5,5,5,5,5,5,5,5,5,5,5);

3. /*Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге;
1 - якщо перше число більше, ніж друге;
0 - якщо числа рівні.*/

// const compareTwoDigits = function (x, y) {
//   console.log(x);
//   console.log(y);
//   if (x < y) {
//     return -1;
//   }
//   else if (x > y) {
//     return 1;
//   }
//   else if (x===y) {
//     return 0;
//   }
// }
// const res1 = compareTwoDigits (10, 5);
// const res2 = compareTwoDigits (18, 18);
// const res3 = compareTwoDigits (6, 18);
// console.log (res1);
// console.log (res2);
// console.log (res3);

/* 4. Напиши функцію, яка обчислює факторіал переданого їй числа.*/

// const number = function (digit) {
//   if (digit > 0) {
//     let result = 1;
//     for (i = 1; i < digit; i += 1) {
//       console.log(i);
//       result = result * (i + 1);
//     }
//     console.log(result);
//   } else{
//     alert('error');
//   }
// }
// number(10);

/* 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в 
одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/

// function contatThreeDigits (a, b, c) {
//  const result = a.toString() + b.toString() + c.toString();
//  /*const result = '' + a + b +c;*/

//   return result;
// }
// //const person = prompt              ("Please enter your name", "Harry Potter");
//   const result = contatThreeDigits  (1, 4, 9);
//   console.log (result);

  /* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його 
  площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */

  // function declaration
 function squreRectangleDeclaration(a, b) {
  return a * b;
 };

 const result1 = squreRectangleDeclaration(8, 9);
 console.log(result1);


 // function expression
 const squreRectangleExpresstion1 = function(a, b) {
  let result = 0;
  if (arguments.length === 2) {
    result = a * b;
  } else {
    result = a * a;
  }
  return result;
  
 }

 // function expression
 const squreRectangleExpresstion = function(a, b) {
  if (arguments.length === 2) {
    return a * b;
  } else {
    return a * a;
  }
  
 }
 const res2 = squreRectangleExpresstion (8, 9);
 const res3 = squreRectangleExpresstion (8);
 console.log(`Res 2 : ${res2}`);
 console.log(`Res 3 : ${res3}`);

 // arrow function
 const squreRectangleArrow = (a, b)  => {
  return a * b;
 }

 const result3 = squreRectangleArrow(8, 9);
 console.log(result3);

 const squreRectangle = function (a, b) {
    console.log(a);
    //multiply(1, 2);
    console.log(b);
    return a * b;

  }
  squreRectangle(8, 9);
  //console.log (squreRectangle);

  console.log(squreRectangle(8,9));













/* practice*/

/*Порядок выполнения кода*/

// function multiply (x, y, z) {
//   console.log(`Multiply result equel ${x*y*z}`)
// }
// console.log("Log before multiply");
// multiply(2,3,5);
// console.log("Log after multiply")



/* Иногда необходимо объявить функцию, у параметров которой будут значения отличные от 
undefined, даже если для них не передали аргументы. */

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1


/* Псевдомассив arguments
Доступ к списку всех аргументов можно получить при помощи специальной переменной arguments,
 которая доступна только внутри функции и хранит все аргументы как псевдомассив.

Псевдомассив - коллекция, со свойством length и возможностью обратиться к элементу по индексу,
 но отсутствием большинства методов для работы с массивом.*/
 
//  function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120



// const add = function (x, y) {
//   console.log(x);
//   console.log(y);
//   console.log('Виконується функція add')

//   let sum = x + y;
//   return sum;
// }

// const result1 = add (5,8);
// console.log ('result1: ', result1);
// const result2 = add (20,6);
// console.log ('result2: ', result2);
// const result3 = add (85, 75);
// console.log ('result3: ', result3);
















/* online in zoom in a class

// const dog = {
//  tail: 1,
//  head: 1,
//  dogsName: 'Chak',
//  sound: () => {
//   console.log('Gav Gav Gav!')
//  }
// }

// const doggy = {
//  name: "Rox",
//  color: "brown",
//  paws: { right: 2, left: 2, },
//  toys: [],

//  sound: () => {
//    console.log('Гав-гав!');
//  },

//  giveToy (newToy) {
//   console.log('giveToy: ' + newToy );
//    this.toys.push(newToy)
//    console.log(this.toys);
//  },

//  showToy () {
//    console.log(this.toys);
//  },

//  removeToys () {
//   console.log('removeToys!');
//   this.toys =[];
//   console.log(this.toys);
//  }

// }

// doggy.giveToy('banana');
// doggy.giveToy('apple');

// doggy.removeToys();

// 32 урок
  // Напишіть функцію, яка приймає об'єкт з властивостями "name" та "age" та повертає рядок, який містить ім'я та вік.
//   function print (name, age) {
//     console.log (Name: ${name}, age: ${age});
//   }
// print ('Alona', 33);
// print ('Sasha', 36);


// function myFunction() {

//   return 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri';

//   }

//   var days = myFunction();


//   let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

/* Mетоди масива */
//
// split()
// const name = "Mango";
// console.log(name.split(""));

// const message = "JavaScript это интересно";
// console.log(message.split(" "));