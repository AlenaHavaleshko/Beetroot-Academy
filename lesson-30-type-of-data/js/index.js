// // 1th level
//    // 1th task
// const digitOne = 0.1;
// const digitTwo = 0.2;
// const result = ((digitOne + digitTwo).toFixed(2));
// console.log (result);
// // 2th task
// let two = 2;
// let one = Number("1");
// const sum = one + two;
// console.log (sum);
// // OR
// let ONE = +"1";
// let TWO = 2;
// const SUM = (ONE + TWO);
// console.log (SUM);
// // 3th task
// let memory = prompt ("Напиши об'єм флешки");
// memory = Number (memory);
// if  (isNaN(memory)) {
//  alert (`Введіть правильний формат,без Гб`);
// };
// console.log (memory);
// const mbInGb = 1024;
// const fileSize = 820; // розмір файлу
// const finalResult = ((memory * mbInGb) / fileSize);
// console.log(Math.floor(finalResult));
// const wholeFinalResult = (Math.floor(finalResult));
// alert (` На флешку поміщається ${wholeFinalResult} файлів по ${fileSize} Мб`)
// console.log (wholeFinalResult);

// // 2th level

// //script for calculating chocolate

// const sumOfMoney = prompt ("Enter amount your money");
// sumOfMoney = Number (sumOfMoney);
// let priceOneChocolate = prompt ("Enter the price of chocolate");
// priceOneChocolate = Number (priceOneChocolate);
// const amountOfChocolate = (sumOfMoney / priceOneChocolate);
// console.log (Math.floor(amountOfChocolate));
// const wholeAmountOfChocolate = (Math.floor(amountOfChocolate));
// const oddMoney = (sumOfMoney - (wholeAmountOfChocolate * priceOneChocolate));
// console.log ((oddMoney));
// alert (` You can buy ${wholeAmountOfChocolate} chocolates and you odd money is ${oddMoney} $`)
// console.log (oddMoney);

// //script for backwards digit

const userNumber = prompt("user input");
const lasNumber = +userNumber % 10; // буде остання цифра
const secondNumber = (Math.floor(+userNumber / 10)) % 10; // середня цифра
const firstNumber = (Math.floor(+userNumber / 100)) % 10; // перша
console.log(`${lasNumber}${secondNumber}${firstNumber}`);

// // // document.querySelector("#userDigit") .addEventListener("change", backwardDigit);

// // function backwardDigit(){
// //     let userDigit = parseFloat(document.querySelector("#userDigit").value);

// //     if(userDigit >=1){

// //         let lastDigit = "";
// //         let digitResult = "";

// //         while (userDigit > 0){

// //             lastDigit = userDigit % 10;
// //             userDigit = Math.floor(userDigit / 10);
// //             digitResult += lastDigit;
// //             document.querySelector("#digitResult").innerHTML = `${digitResult}`;

// //         }

// //     else{
// //         document.querySelector("#digitResult").innerHTML = `Please, enter a valid number > 1`;
// //     }
// // }

// const usersList = [
//    {
//      name: 'Sierra',
//      surname: 'Quigley',
//      age: 14,
//      email: 'Alfreda12@yahoo.com',
//      isOpenToWork: false
//    },
//    {
//      name: 'Barton',
//      surname: 'Corkery',
//      age: 100,
//      email: 'Dewitt.Kohler71@gmail.com',
//      isOpenToWork: true
//    },
//    {
//      name: 'Demetrius',
//      surname: 'Mohr',
//      age: 90,
//      email: 'Maureen55@hotmail.com',
//      isOpenToWork: false
//    },
//    {
//      name: 'Abby',
//      surname: 'Metz',
//      age: 26,
//      email: 'Zelda93@yahoo.com',
//      isOpenToWork: false
//    },
//    {
//      name: 'Connie',
//      surname: 'Legros',
//      age: 86,
//      email: 'Gerardo91@yahoo.com',
//      isOpenToWork: true
//    }
//  ];

//  // User "name" "surname", user age is "age", "email"
// // User Sierra Quigley, user age is 14, Alfreda12@yahoo.com

//  usersList.forEach(user => {
//    console.log (`User ${user.name}, user age is ${user.age}, ${user.email} `)
//  });

//  const person = {
//    name1: 'Connie',
//    surname: 'Legros',
//    age: 86,
//    email: 'Gerardo91@yahoo.com',
//    isOpenToWork: true
//  };

// //   const name1 = person.name1;
// //   const surname = person.surname;
// //   const age = person.age;
// //   const email = person.email;
// //   const isOpenToWork = person.email;
//   console.log (name1 === person.name1);

// //   Или деструктуризацией сделать

// const { name1, surname, age, email, isOpenToWork } = person;


// Проініціалізуівала об'єкти
const userAlona = {
  firstName: "Alona",
  lastName: "Havaleshko",
  age: 33,
  colorOfEyes: "brown",
  colorOfHair: "brunet",
  height: 169,
  marryed: true,
  isOpenToWork: true,
};

const userAlex = {
  firstName: "Alex",
  lastName: "Havaleshko",
  age: 36,
  colorOfEyes: "grey",
  colorOfHair: "brouny",
  height: 182,
  marryed: true,
  isOpenToWork: false,
};

const userMax = {
  firstName: "Max",
  lastName: "Havaleshko",
  age: 7,
  colorOfEyes: "broun",
  colorOfHair: "blond",
  height: 128,
  marryed: false,
  isOpenToWork: false,
};
// Проініціалізуівала масив
const family = [userAlex, userAlona, userMax];

// Додала новий елемент в массив
// family.push (userAlona);
// family.push (userMax);
// family.push (userAlex);

// Перебрала масив і вибрала те,що теба по завданню
family.forEach((namber) => {
  console.log(
    `The names of mamberss your family are ${namber.firstName}, your last names is/are ${mamber.lastName}, your ${mamber.height}`
  );
});

// Цикл for

// const usersAges = { 
//    Randi: 4, 
//    Godfrey: 39, 
//    Lelia: 45, 
//    Jacey: 74, 
//    Keira: 30 
// };
// for(const item in usersAges) {
//    console.log(`object key: ${item}, object value: ${usersAges[item]}`);
// }


// Цикл for of
// const someSting = [
//    'H', 'e', 'l', 'l',
//    'o', ' ', 'W', 'o',
//    'r', 'l', 'd'
//  ];
// for(const item of someSting) {
//    console.log(item);
// }

// const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
// for(const number of numbersList) {
//       result += number;
// }

// console.log(result);

// if else or ternatniy operator 

// const fruit = "apple";
// fruit === banana;
// ? console.log("Is banana")
// : console.log("Is not banana");



// const email = "someEmail@gmail.com";
// const adminEmail = "admin@gmail.com"
// ? console.log(`Hello admin`)
// : console.log(`Hello user ${email}`);

// Excellent, Good, Satisfactory, Unsatisfactory, Failed, Invalid grade.

if ("0") { alert("Hello World"); }
console.log();