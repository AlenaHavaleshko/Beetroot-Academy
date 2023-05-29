
function moveTo(type) {
 console.log(type);

 if(type === 'about') {
  const hdr = document.getElementsByClassName("container__header__hdr align");
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



const swiper = new Swiper('.swiper', {
 // Optional parameters
 direction: 'horizontal',
 loop: true,
 slidesPerView: 3,
 spaceBetween: 30,
 

 // If we need pagination
 pagination: {
   el: '.swiper-pagination',
   dynamicBullets: true,
 },

 // Navigation arrows
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },

 autoplay: {
  delay: 4000, 
},

 // And if we need scrollbar
 // scrollbar: {
 //   el: '.swiper-scrollbar',
 // },
});

