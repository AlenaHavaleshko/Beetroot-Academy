
import { Swiper1Settings, Swiper2Settings } from "./swiperSettings";
import  initMap from "./map.js";

// smooth scrolling

window.moveToComponent = function (type) {
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

window.submitData = function (event) {
 event.preventDefault();
 alert('Your data is accepted!')
}

initMap();

// swiper 1
const swiper1 = new Swiper('.swiper1', Swiper1Settings);
const swiper2 = new Swiper(".swiper2", Swiper2Settings);





