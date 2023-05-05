const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Метки достижения якорей на сайте
gsap.to('#TopNav__section-About', { borderBottomColor: "rgba(0, 0, 0, 0)" });
gsap.to('#TopNav__Debrag-machines', { borderBottomColor: "rgba(0, 0, 0, 0)" });
gsap.to('#TopNav__SHINING3D-machines', { borderBottomColor: "rgba(0, 0, 0, 0)" });
gsap.to('#TopNav__Consumables', { borderBottomColor: "rgba(0, 0, 0, 0)" })

// Включить #TopNav__section-About
gsap.fromTo('#TopNav__section-About', 
  { borderBottomColor: "rgba(0, 0, 0, 0)" },
  { borderBottomColor: "#8a1d6a", scrollTrigger: { trigger: '#section-About', start: "top center", end: "10% center", scrub: true }}
);
// Выключить #TopNav__section-About
gsap.fromTo('#TopNav__section-About', 
  { borderBottomColor: "#8a1d6a" },
  { borderBottomColor: "rgba(0, 0, 0, 0)", scrollTrigger: { trigger: '#Debrag-machines', start: "top center", end: "-2% center", scrub: true }}
);

// Включить #TopNav__Debrag-machines
gsap.fromTo('#TopNav__Debrag-machines', 
  { borderBottomColor: "rgba(0, 0, 0, 0)" },
  { borderBottomColor: "#8a1d6a", scrollTrigger: { trigger: '#Debrag-machines', start: "top center", end: "10% center", scrub: true }}
);
// Выключить #TopNav__Debrag-machines
gsap.fromTo('#TopNav__Debrag-machines', 
  { borderBottomColor: "#8a1d6a" },
  { borderBottomColor: "rgba(0, 0, 0, 0)", scrollTrigger: { trigger: '#Debrag-machines', start: "90% center", end: "bottom center", scrub: true }}
);

// Включить #TopNav__SHINING3D-machines
gsap.fromTo('#TopNav__SHINING3D-machines', 
  { borderBottomColor: "rgba(0, 0, 0, 0)" },
  { borderBottomColor: "#8a1d6a", scrollTrigger: { trigger: '#SHINING3D-machines', start: "top center", end: "10% center", scrub: true }}
);
// Выключить #TopNav__SHINING3D-machines
gsap.fromTo('#TopNav__SHINING3D-machines', 
  { borderBottomColor: "#8a1d6a" },
  { borderBottomColor: "rgba(0, 0, 0, 0)", scrollTrigger: { trigger: '#SHINING3D-machines', start: "90% center", end: "bottom center", scrub: true }}
);

// Включить #TopNav__Consumables
gsap.fromTo('#TopNav__Consumables', 
  { borderBottomColor: "rgba(0, 0, 0, 0)" },
  { borderBottomColor: "#8a1d6a", scrollTrigger: { trigger: '#Consumables', start: "top center", end: "10% center", scrub: true }}
);
// Выключить #TopNav__Consumables
gsap.fromTo('#TopNav__Consumables', 
  { borderBottomColor: "#8a1d6a" },
  { borderBottomColor: "rgba(0, 0, 0, 0)", scrollTrigger: { trigger: '#Consumables', start: "90% center", end: "bottom center", scrub: true }}
);

//==========================================================================

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

// Deprag PL7
let Info__DepragPL7 = document.querySelector('#Info__Deprag-PL7');
let btnOpen__DepragPL7 = document.querySelector('#btn-open__Deprag-PL7');
let btnClose__DepragPL7 = document.querySelector('#btn-close__Deprag-PL7');

btnOpen__DepragPL7.onclick = function() {
  Info__DepragPL7.style.display = "flex";
}

btnClose__DepragPL7.onclick = function() {
  Info__DepragPL7.style.display = "";
}

//==========================================================================

// Aoralscan 3 Wireless
let Info__Aoralscan3Wireless = document.querySelector('#Info__Aoralscan3-Wireless');
let btnOpen__Aoralscan3Wireless = document.querySelector('#btn-open__Aoralscan3-Wireless');
let btnClose__Aoralscan3Wireless = document.querySelector('#btn-close__Aoralscan3-Wireless');

btnOpen__Aoralscan3Wireless.onclick = function() {
  Info__Aoralscan3Wireless.style.display = "flex";
}

btnClose__Aoralscan3Wireless.onclick = function() {
  Info__Aoralscan3Wireless.style.display = "";
}

// AutoScan-DS-EX-Pro
let Info__AutoScanDSEXPro = document.querySelector('#Info__AutoScan-DS-EX-Pro');
let btnOpen__AutoScanDSEXPro = document.querySelector('#btn-open__AutoScan-DS-EX-Pro');
let btnClose__AutoScanDSEXPro = document.querySelector('#btn-close__AutoScan-DS-EX-Pro');

btnOpen__AutoScanDSEXPro.onclick = function() {
  Info__AutoScanDSEXPro.style.display = "flex";
}

btnClose__AutoScanDSEXPro.onclick = function() {
  Info__AutoScanDSEXPro.style.display = "";
}

// AutoScan-DS-EX Pro-H
let Info__AutoScanDSEXPro_H = document.querySelector('#Info__AutoScan-DS-EX-Pro-H');
let btnOpen__AutoScanDSEXPro_H = document.querySelector('#btn-open__AutoScan-DS-EX-Pro-H');
let btnClose__AutoScanDSEXPro_H = document.querySelector('#btn-close__AutoScan-DS-EX-Pro-H');

btnOpen__AutoScanDSEXPro_H.onclick = function() {
  Info__AutoScanDSEXPro_H.style.display = "flex";
}

btnClose__AutoScanDSEXPro_H.onclick = function() {
  Info__AutoScanDSEXPro_H.style.display = "";
}