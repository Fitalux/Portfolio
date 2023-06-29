let sections = gsap.utils.toArray(".color__box");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "power2.inOut",
  ease: "none",
  scrollTrigger: {
    trigger: "#horizontal",
    pin: true,
    scrub: true,
    snap: 1 / (sections.length - 1),
    end: () => "+=" + document.querySelector("#horizontal").offsetWidth,
  },
});
