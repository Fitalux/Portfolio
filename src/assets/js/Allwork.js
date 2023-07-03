const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray(".color__box");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#horizontal",
    pin: true,
    scrub: 5,
    snap: 5 / (sections.length - 1),
    end: () => "+=" + document.querySelector("#horizontal").offsetWidth,
  },
});
