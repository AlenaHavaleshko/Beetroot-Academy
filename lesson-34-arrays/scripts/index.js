/* Мінімум

Створи масив «Список покупок». Кожен елемент масиву є об'єктом, 
який містить назву продукту, кількість і куплений він чи ні, ціну за
 одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
 що ще не придбані, а потім - ті, що вже придбали.
Покупка продукту. Функція приймає назву продукту і відзначає його як 
придбаний. */

const apples = {
 name: 'apple',
 quantity: 5,
 isBought: true,
 priceOfOneGood: 10,
 get sum() {
  return this.priceOfOneGood * this.quantity;
 } 
};

const bananas = {
 name: 'banana',
 quantity: 10,
 isBought: true,
 priceOfOneGood: 20,
 get sum() {
  return this.priceOfOneGood * this.quantity;
 },
};

const cucumbers = {
 name: 'cucumber',
 quantity: 2,
 isBought: false,
 priceOfOneGood: 50,
 get sum() {
  return this.priceOfOneGood * this.quantity;
 } 
};

const shoppingList = [apples, bananas, cucumbers];
console.table(shoppingList);

/* Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
 що ще не придбані, а потім - ті, що вже придбали. */

const getShoppingList = function (allShoppingList) {
 const isNotBought = [];
 const isBought = [];
 for (const item of allShoppingList) {
  if (!item.isBought) {
   isNotBought.push(item);
  } else {
   isBought.push(item);
  }
 }
  const result = [...isNotBought, ...isBought];
  return result;
}
console.log(getShoppingList(shoppingList));

/* Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний. */
const setProductLikeBought = function (shoppingList, name) {
 // 1. Найти продукт методом find
let product =shoppingList.find(p => p.name === name);
 // 2. проверить что такой продукт є ( перевірка на андефаінд)
if (product !== undefined)
 // 3. засетать свойство ИсБоут в true 
product.isBought = true;
}
// 4. вызвать функцию и проверить что все работает с разными продуктами
// даже с теми которх не существует. что ничего не падает

setProductLikeBought(shoppingList, 'cucumber');

/* Норма

Видалення продукту зі списку (видалення повинно проводитися шляхом
  створення нового масиву, в якому продукт, що ми шукаємо, буде 
  відсутнім) */

const deleteProduct = function(shoppingList, name) { 
return shoppingList.filter(prod => prod.name!== name);
}
const res = deleteProduct(shoppingList, 'apple');
console.log(res);

/* Додавання покупки в список. Враховуй, що при додаванні покупки з уже
 існуючим в списку продуктом, необхідно збільшувати кількість в 
 існуючій покупці, а не додавати нову. При цьому також повинна 
 змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості 
 товарів стало 2, то сума буде 24.*/

const addProductToList = function(shoppingList, name) {
 let product = shoppingList.find(p => p.name === name);
 if(product) {
  product.quantity += 1;
 } else {
   const newProduct = {
   name: name,
   quantity: 1,
   isBought: false,
   priceOfOneGood: 20,
   get sum() {
   return this.priceOfOneGood * this.quantity;
   }
     }
   shoppingList.push(newProduct);
 };
}
addProductToList(shoppingList, 'banana');
for (let i = 0; i < 7; i+=1) {
 addProductToList(shoppingList, 'lime');
}

console.log(shoppingList);
console.table(shoppingList);


/*Должно поменяться quantity на +2 и sum:
quantity = quantity + 2 = 12
и sum =  priceOfOneGood * quantity = 20 * 12 = 240 */

// const bananas = {
//  name: 'banana',
//  quantity: 10,
//  isBought: true,
//  priceOfOneGood: 20,
//  get sum() {
//   return this.priceOfOneGood * this.quantity;
//  } 
// };

