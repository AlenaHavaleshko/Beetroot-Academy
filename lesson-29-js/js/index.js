/* Домашка 1*/
const firstName = 'Alona';
const fullName = 'Alona Havaleshko';
const yourName = 'Amanda';
const name = 'Lyci';
console.log(firstName);
/* Приклади коментування коду 
Ctrl+K+C;
Ctr=/
/*...*/

/* Приклад не вірних імен
const 87Name = 'Julia';        - не може починатися з цифри
const 87 Name = 'Julia';       - не може бути з пробілом
const frstname = 'Julia';      - не рекомендовано все писати і одному регистрі
const first-Name = 'Julia';    - не можна використовувати
let let = 8;                   - зарезервоване слово
let return = 10;               -  зарезервоване слово
*/

/* Домашка 2 */
const your_Name = prompt ('Привіт, як тебе звуть?');
console.log(your_Name);
if (your_Name !== null) {
alert (`Привіт, ${your_Name}`);
};

const currencyData = 2023;
let date = prompt ('Напиши свій рік народження');
date = Number(date);
console.log(date);
const result = currencyData - date;
alert (`Вау, тобі всього ${result} !!!!`)
console.log (result);

let lenchSquare = prompt ('Яка довжина сторони квадрату?')
lenchSquare = Number(lenchSquare);
console.log(lenchSquare);
const perimeterOfSquare =lenchSquare*4;
alert (`Периметр квадрату дорівнює ${perimeterOfSquare} !!!!`)
console.log(perimeterOfSquare);


/*Домашка 3 */
const circulRadius  = prompt ('Напиши радіус кола сюди');
circulRadius = Number (circulRadius);
console.log(circulRadius);
const squareCercal = 3.14*circulRadius**2;
alert (`Радіус кола дорівнює ${squareCercal}`);
console.log(squareCercal);



function calculate () {
 const sum  = document.getElementById("sum").value;
 const currency  = document.getElementById("currency").value;
 const sumNumber = Number(sum); // sum = Number(sum);
 const currencyNumber = Number(currency);
 const result = sumNumber * currencyNumber;
 alert(result)
}


