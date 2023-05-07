gsap.registerPlugin(ScrollTrigger);

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