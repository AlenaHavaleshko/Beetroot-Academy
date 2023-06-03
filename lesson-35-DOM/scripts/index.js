/* Task 1 -  playlist */

const playList = [
 {
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
 },

 {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
 },

 {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
 },

 {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
 },

 {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
 },

 {
  author: "AC/DC",
  song: "BACK IN BLACK"
 },

 {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
 },

 {
  author: "METALLICA",
  song: "ENTER SANDMAN"
 }
];

const listOfSongs = document.querySelector(".page-container-list");
if (listOfSongs) {
 playList.forEach((song, i) => {
  const newListOfSongs = document.createElement("li");
  newListOfSongs.innerText = `${i + 1} ${song.song} - ${song.author}`;
  listOfSongs.appendChild(newListOfSongs);
 });
 listOfSongs.addEventListener("click", (e) => console.log(`Song - ${e.target.innerText}`));
}

/* Task 2 -  modal window */

const openModalBtn = document.querySelector(".modal-content");
const button = document.querySelector(".open-button");
console.log(button);
const closeModalButton = document.querySelector(".close-button");
button.onclick = function () {
 console.log(openModalBtn)
 openModalBtn.style.display = "block";
}
closeModalButton.onclick = function () {
 console.log(openModalBtn)
 openModalBtn.style.display = "none";
}

/* Task 3 -  trafic light */

let count = 0;
const trafficLight = document.querySelector(".traffic-light");
const buttonChangeTrafficLight = document.querySelector(".color-change-btn");
const autoButtonChangeTrafficLight = document.querySelector(".color-change-btn-auto");
const closeButtonChangeTrafficLight = document.querySelector(".color-change-btn-close");
closeButtonChangeTrafficLight.addEventListener("click", (e) => {
 clearInterval(timerID);
 console.log(closeButtonChangeTrafficLight);
});
buttonChangeTrafficLight.addEventListener("click", (e) => {
 changeOnClick();
})
let timerID;
buttonChangeTrafficLight.addEventListener("click", (e) => {

 if (timerID) {
  clearInterval(timerID)
 }
 changeOnClick();
});

autoButtonChangeTrafficLight.addEventListener("click", (e) => {
 timerID = setInterval(() => {
  changeOnClick();
 }, 1000);
})
function changeOnClick() {
 if (count % 4 === 0) {
  trafficLight.children[0].classList.toggle("isActive");
  trafficLight.children[1].classList.remove("isActive");
  trafficLight.children[2].classList.remove("isActive");
 } else if (count % 4 === 1) {
  trafficLight.children[0].classList.remove("isActive");
  trafficLight.children[1].classList.toggle("isActive");
  trafficLight.children[2].classList.remove("isActive");
 } else if (count % 4 === 2) {
  trafficLight.children[0].classList.remove("isActive");
  trafficLight.children[1].classList.remove("isActive");
  trafficLight.children[2].classList.toggle("isActive");
 }
 else if (count % 4 === 3) {
  trafficLight.children[0].classList.remove("isActive");
  trafficLight.children[1].classList.toggle("isActive");
  trafficLight.children[2].classList.remove("isActive");
 }
 console.log(count);
 count += 1;
}













/* Тут я тренуюся, не домашка*/
// /*Отримую ссилку на .site-nav*/
// const navEl = document.querySelector('.site-nav');
// /* Отримати посилання на 1й елемент*/
// // const firstNavItemEl = navEl.querySelector('.site-nav__item');
// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);      /* викликаю першу дитину в ul */
// const lastNavItemEl = navEl.lastElementChild;
// console.log(lastNavItemEl);       /* викликаю останню дитину в ul */
// // const parentNavItemEl = navEl.ParentNode;
// console.log(navEl.parentNode);    /* викликає родітєля elem */
// console.log(navEl.children);      /* викликаю всіх дітей ul, тобто li-шки */
// console.log(navEl.childNodes);    /* псевдо масив храніт всі дочірні елементи і текст*/

// /*конструюємо DOM елемент в памяті*/
// const titleEl = document.createElement('h1'); /*створили заголовок есь у памяті, в документі його не існує*/
// titleEl.classList.add('page-title');          /* створили клас в памяті, е в документі, в размітці йог немає */
// titleEl.textContent = "Це заголовок сторінки" /* додали текст в памяті */
// console.log(titleEl);

// /* додаємо його на сторінку html, варіанті декілько*/
// // document.body.appendChild(titleEl);   /* .appendChild додає в кінець*/
// // console.log(document.body);           /* швидкий доступ до роздылыв документу, наприклад body*/

//  /* ствоимо картинку */

//  const imageEl = document.createElement('img');
//  imageEl.src = './image/house-mob.jpg';
//  imageEl.alt = 'house';
//  imageEl.width = 640;
//  console.log('imageEl', imageEl);
//  document.body.appendChild(imageEl);   /* Додали в кінець картинку (appendChild)*/

//  /* Зараз будем додавати пункти меню */
//  const navItemEl = document.createElement('li');
//  navItemEl.classList.add('site-nav__item');
//  const navLinkEl = document.createElement('a');
//  navLinkEl.classList.add('site-nav__link');
//  navLinkEl.textContent = 'Особистий кабінет';
//  navLinkEl.href = './image/hIMG_5517.jpg';
//  navItemEl.appendChild(navLinkEl);      /* <li> в якому вкладен <a>*/
//  console.log(navItemEl);

//  // const navEl = document.querySelector('.site-nav'); /* все раніше обявлені*/  /* собiраем в памяти*/
//  // navEl.appendChild(navItemEl);                       /* вешаем в конец за 1 операцию*/
//  // navEl.insertbefore(navItemEl, null);                 /* вставт последним*/
//  navEl.insertBefore(navItemEl, navEl.firstElementChild);

// //  const colorPickerOptions = [
// //   { lable: 'red', color: '#F44336' },
// //   { lable: 'green', color: '#4CAF50' },
// //   { lable: 'blue', color: '#2196F3' },
// //   { lable: 'grey', color: '#687D8B' },
// //   { lable: 'pink', color: '#E91E63' },
// //   { lable: 'indigo', color: '#3F518' },
// //  ];
// //  const colorPickerContainerEl = colorPickerOptions.map(options => {
// //   const buttonEl = document.createElement('button');
// //   buttonEl.type = 'button';
// //   buttonEl.classList.add('color-picker__options');
// //   buttonEl.textContent = option.label
// //   ;
// //   buttonEl.style.backgroundColor = option.color;

// //   return buttonEl;

// //  })
// // console.log(element);
// // colorPickerContainerEl.append(...elements);

// // // function updateProductList(array, productName) {
// // // let product = array.find(prod => prod.name === productName);
// // //  if(product !== undefined) {
// // //    product.quantity += 1;
// // //  } else {
// // //  let newProcut ={
// // //   name: productName,
// // //   quantity : 1
// // //  };
// // //   array.push(newProcut);
// // //  }
// // // }

// // // updateProductList(shoppingProductList, 'lemon');

// // const products = [
// //  {
// //   id: 1,
// //   title: 'MacBook',
// //   price: 100,
// //  },
// //  {
// //   id: 2,
// //   title: 'Apple watch',
// //   price: 40,
// //  },
// //  {
// //   id: 3,
// //   title: 'Mac Pro',
// //   price: 190,
// //  },
// //  {
// //   id: 4,
// //   title: 'iPad',
// //   price: 60,
// //  },
// //  {
// //   id: 5,
// //   title: 'iphone',
// //   price: 40,
// //  },
// // ]
// // /* если надо найти в массиве обьеков apple*/
// // const product = products.find(item => item.price === apple);
// // console.log(product);

// // const newProductList = function(productList, name) {
// // let product = productList.find(p => p.name === name);
// // if (product !== undefined) {
// //  product.quantity += 1;
// // } else {
// //  let newProduct = {
// //   name: name,
// //   quantity: 1,
// //   isBought: false,
// //  };
// //  productList.push(newProduct)
// // }
// // }

// // for(let i =0; i < 1000; i ++) {
// //  newProductList(productList, 'test');
// // }

// // const productName = prompt('enter product name again');
// // newProductList(productList, productName);

// // const productName = prompt('enter product name again');
// // newProductList(productList, productName);

// const image = document.querySelector(".image");
// console.log(image.attributes);
