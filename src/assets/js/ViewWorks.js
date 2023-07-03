let sections = gsap.utils.toArray(".display__box");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#parallax",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // end: "+=7000",
    end: document.querySelector("#parallax").offsetWidth,
  },
});
