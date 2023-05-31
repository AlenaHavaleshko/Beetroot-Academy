// smooth scrolling

function moveTo(type) {
 console.log(type);

 if(type === 'about') {
  const hdr = document.getElementsByClassName("container__header__hdr");
  console.log(hdr);
  hdr[0].scrollIntoView({behavior: "smooth"});
 }

 if(type === 'projects') {
  const hdr = document.getElementsByClassName("container__block1__hdr");
  console.log(hdr);
  hdr[0].scrollIntoView({behavior: "smooth"});
 }

 if(type === 'news') {
  const hdr = document.getElementsByClassName("container__block2__hdr");
  console.log(hdr);
  hdr[0].scrollIntoView({behavior: "smooth"});
 }

 if(type === 'contact') {
  const hdr = document.getElementsByClassName("container__footer");
  console.log(hdr);
  hdr[0].scrollIntoView({behavior: "smooth"});
 }

 if(type === 'arrow') {
  const hdr = document.getElementsByClassName("container__block1__line");
  console.log(hdr);
  hdr[0].scrollIntoView({behavior: "smooth"});
 }
}

// event.preventDefault() in form
function submitData(event) {
 event.preventDefault();
 alert('Your data is accepted!')
}


// swiper 1
const swiper1 = new Swiper('.swiper1', {
 // Optional parameters
 // slidesPerView: 1,
 direction: 'vertical',
 loop: true,
 autoplay: {
  delay: 2500,
  disableOnInteraction: false,
},

 // If we need pagination
   pagination: {
   el: '.swiper-pagination',
   clickable: true,
 },

 // Navigation arrows
 // navigation: {
 //   nextEl: '.swiper-button-next',
 //   prevEl: '.swiper-button-prev',
 // },

});


// const swiper2 = new Swiper('.swiper2', {
//  // Optional parameters
//  direction: 'horizontal',
//  loop: true,
//  slidesPerView: 3,
//  spaceBetween: 30,
 

//  // If we need pagination
//  pagination: {
//    el: '.swiper-pagination2',
//    clickable: true,
//    // renderBullet: function(index, className) {
//    //  return `<span class=>GO111111111111111</span>`
//    // }
//  },

//  // Navigation arrows
//  navigation: {
//    nextEl: '.swiper-button-next',
//    prevEl: '.swiper-button-prev',
//  },

//  autoplay: {
//   delay: 4000,
//   disableOnInteraction: false,
// },

// });

// swiper 2
var swiper = new Swiper(".swiper2", {
 slidesPerView: 3,
 spaceBetween: 30,
 loop: true,
 pagination: {
   el: ".swiper-pagination2",
   clickable: true,
 },
 navigation: {
   nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
 },
});





