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

const workDetailSection = document.querySelector("#workDetail");
const displayBoxes = workDetailSection.querySelectorAll(".display__box");
const title = workDetailSection.querySelector(".title");
const line = workDetailSection.querySelector(".line");

displayBoxes.forEach((box, index) => {
  const colorClass = box.classList[1];
  const color = colorClass.split("__")[1];

  // 색상에 맞는 class 명 생성
  const newTitleClass = `title_${color}`;
  const newLineClass = `line_${color}`;

  // title과 line의 class 명 변경
  if (index === 0) {
    title.classList = `title ${newTitleClass}`;
    line.classList = `line ${newLineClass}`;
  } else {
    title.classList.add(newTitleClass);
    line.classList.add(newLineClass);
  }
});
