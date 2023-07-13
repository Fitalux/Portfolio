const horizontal = document.querySelector("#Allwork");
const sections = gsap.utils.toArray(".color__box");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#Allwork",
    pin: true,
    scrub: 0.1,
    snap: 0.1 / (sections.length - 1),
    end: () => "+=" + document.querySelector("#Allwork").offsetWidth,
  },
});
