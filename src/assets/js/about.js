const box3_1 = document.querySelector("#about .about__item .img__box1");
const box3_2 = document.querySelector("#about .about__item .img__box2");
const box3_3 = document.querySelector("#about .about__item .img__box3");

const boxMove = gsap.timeline();
boxMove.from(box3_1, { opacity: 0, y: 300, duration: 1 }, "a");
boxMove.from(box3_2, { opacity: 0, y: -300, duration: 1 }, "a");
boxMove.from(box3_3, { opacity: 0, y: 300, duration: 1 }, "a");

ScrollTrigger.create({
  animation: boxMove,
  trigger: ".about__item",
  start: "top top",
  end: "+=2000",
  scrub: true,
  pin: true,
  anticipatePin: 1,
  markers: false,
});
