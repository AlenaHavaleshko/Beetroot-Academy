// 1th level
   // 1th task
const digitOne = 0.1;
const digitTwo = 0.2;
const result = ((digitOne + digitTwo).toFixed(2));
console.log (result);
// 2th task
let two = 2;
let one = Number("1");
const sum = (one + two);
console.log (sum);
// OR   
let ONE = +"1";
let TWO = 2;
const SUM = (ONE + TWO);
console.log (SUM);
// 3th task
let memory = prompt ("Напиши об'єм флешки");
memory = Number (memory);
if  (isNaN(memory)) {
 alert (`Введіть правильний формат,без Гб`);
};
console.log (memory);
const mbInGb = 1024;
const fileSize = 820; // розмір файлу
const finalResult = ((memory*mbInGb)/fileSize);
console.log(Math.floor(finalResult));
const wholeFinalResult = (Math.floor(finalResult));
alert (` На флешку поміщається ${wholeFinalResult} файлів по ${fileSize} Мб`)
console.log (wholeFinalResult);

// 2th level 

//script for calculating chocolate

let sumOfMoney = prompt ("Enter amount your money");
sumOfMoney = Number (sumOfMoney);
let priceOneChocolate = prompt ("Enter the price of chocolate");
priceOneChocolate = Number (priceOneChocolate);
let amountOfChocolate = (sumOfMoney / priceOneChocolate);
console.log (Math.floor(amountOfChocolate));
let wholeAmountOfChocolate = (Math.floor(amountOfChocolate));
let oddMoney = (sumOfMoney - (wholeAmountOfChocolate * priceOneChocolate));
console.log ((oddMoney));
alert (` You can buy ${wholeAmountOfChocolate} chocolates and you odd money is ${oddMoney} $`)
console.log (oddMoney);

//script for backwards digit


// // document.querySelector("#userDigit") .addEventListener("change", backwardDigit);

// function backwardDigit(){
//     let userDigit = parseFloat(document.querySelector("#userDigit").value);
    
//     if(userDigit >=1){

//         let lastDigit = "";
//         let digitResult = "";

//         while (userDigit > 0){
            
//             lastDigit = userDigit % 10;
//             userDigit = Math.floor(userDigit / 10);
//             digitResult += lastDigit;
//             document.querySelector("#digitResult").innerHTML = `${digitResult}`;

//         }
//     }


//     else{
//         document.querySelector("#digitResult").innerHTML = `Please, enter a valid number > 1`;
//     }
// }





