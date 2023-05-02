const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`);

gsap.registerPlugin(ScrollTrigger);

// Метки достижения якорей на сайте
gsap.to('#TopNav__section-About', { borderBottomColor: "rgba(0, 0, 0, 0)" });
gsap.to('#TopNav__Milling-machines', { borderBottomColor: "rgba(0, 0, 0, 0)" });
gsap.to('#TopNav__Other', { borderBottomColor: "rgba(0, 0, 0, 0)" });

// Включить #TopNav__section-About
gsap.fromTo('#TopNav__section-About', 
  { borderBottomColor: "rgba(0, 0, 0, 0)" },
  { borderBottomColor: "#8a1d6a", scrollTrigger: { trigger: '#section-About', start: "top center", end: "10% center", scrub: true }}
);
// Выключить #TopNav__section-About
gsap.fromTo('#TopNav__section-About', 
  { borderBottomColor: "#8a1d6a" },
  { borderBottomColor: "rgba(0, 0, 0, 0)", scrollTrigger: { trigger: '#Milling-machines', start: "top center", end: "-2% center", scrub: true }}
);

// Включить #TopNav__Milling-machines
gsap.fromTo('#TopNav__Milling-machines', 
  { borderBottomColor: "rgba(0, 0, 0, 0)" },
  { borderBottomColor: "#8a1d6a", scrollTrigger: { trigger: '#Milling-machines', start: "top center", end: "10% center", scrub: true }}
);
// Выключить #TopNav__Milling-machines
gsap.fromTo('#TopNav__Milling-machines', 
  { borderBottomColor: "#8a1d6a" },
  { borderBottomColor: "rgba(0, 0, 0, 0)", scrollTrigger: { trigger: '#Milling-machines', start: "90% center", end: "bottom center", scrub: true }}
);

// Включить #TopNav__Other
gsap.fromTo('#TopNav__Other', 
  { borderBottomColor: "rgba(0, 0, 0, 0)" },
  { borderBottomColor: "#8a1d6a", scrollTrigger: { trigger: '#Other', start: "top center", end: "10% center", scrub: true }}
);
// Выключить #TopNav__Other
gsap.fromTo('#TopNav__Other', 
  { borderBottomColor: "#8a1d6a" },
  { borderBottomColor: "rgba(0, 0, 0, 0)", scrollTrigger: { trigger: '#Other', start: "90% center", end: "bottom center", scrub: true }}
);

//==========================================================================

// Фрезерные станки
// Deprag W52
let Info__DepragW52 = document.querySelector('#Info__Deprag-W52');
let btnOpen__DepragW52 = document.querySelector('#btn-open__Deprag-W52');
let btnClose__DepragW52 = document.querySelector('#btn-close__Deprag-W52');

btnOpen__DepragW52.onclick = function() {
  Info__DepragW52.style.display = "flex";
}

btnClose__DepragW52.onclick = function() {
  Info__DepragW52.style.display = "";
}

// Deprag W42
let Info__DepragW42 = document.querySelector('#Info__Deprag-W42');
let btnOpen__DepragW42 = document.querySelector('#btn-open__Deprag-W42');
let btnClose__DepragW42 = document.querySelector('#btn-close__Deprag-W42');

btnOpen__DepragW42.onclick = function() {
  Info__DepragW42.style.display = "flex";
}

btnClose__DepragW42.onclick = function() {
  Info__DepragW42.style.display = "";
}

// Deprag W40
let Info__DepragW40 = document.querySelector('#Info__Deprag-W40');
let btnOpen__DepragW40 = document.querySelector('#btn-open__Deprag-W40');
let btnClose__DepragW40 = document.querySelector('#btn-close__Deprag-W40');

btnOpen__DepragW40.onclick = function() {
  Info__DepragW40.style.display = "flex";
}

btnClose__DepragW40.onclick = function() {
  Info__DepragW40.style.display = "";
}

//==========================================================================

// Другие товары
// Deprag P7
let Info__DepragP7 = document.querySelector('#Info__Deprag-P7');
let btnOpen__DepragP7 = document.querySelector('#btn-open__Deprag-P7');
let btnClose__DepragP7 = document.querySelector('#btn-close__Deprag-P7');

btnOpen__DepragP7.onclick = function() {
  Info__DepragP7.style.display = "flex";
}

btnClose__DepragP7.onclick = function() {
  Info__DepragP7.style.display = "";
}

// Deprag S7
let Info__DepragS7 = document.querySelector('#Info__Deprag-S7');
let btnOpen__DepragS7 = document.querySelector('#btn-open__Deprag-S7');
let btnClose__DepragS7 = document.querySelector('#btn-close__Deprag-S7');

btnOpen__DepragS7.onclick = function() {
  Info__DepragS7.style.display = "flex";
}

btnClose__DepragS7.onclick = function() {
  Info__DepragS7.style.display = "";
}

// Deprag S7
let Info__Aoralscan3 = document.querySelector('#Info__Aoralscan3');
let btnOpen__Aoralscan3 = document.querySelector('#btn-open__Aoralscan3');
let btnClose__Aoralscan3 = document.querySelector('#btn-close__Aoralscan3');

btnOpen__Aoralscan3.onclick = function() {
  Info__Aoralscan3.style.display = "flex";
}

btnClose__Aoralscan3.onclick = function() {
  Info__Aoralscan3.style.display = "";
}