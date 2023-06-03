// swiper 1
export const Swiper1Settings =  {
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
 }
}

export const Swiper2Settings = {
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
 }
}
