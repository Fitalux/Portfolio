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

// const workDetailSection = document.querySelector("#workDetail");
// const displayBoxes = workDetailSection.querySelectorAll(".display__box");
// const title = workDetailSection.querySelector(".title_pink");
// const line = workDetailSection.querySelector(".top-line_pink");

// displayBoxes.forEach((box, index) => {
//   const colorClass = box.classList[1];
//   const color = colorClass.split("__")[1];

//   // 색상에 맞는 class 명 생성
//   const newTitleClass = `title_${color}`;
//   const newLineClass = `top-line_${color}`;

//   // title과 line의 class 명 변경
//   if (index === 0) {
//     title.classList = `title_ ${newTitleClass}`;
//     line.classList = `top-line_ ${newLineClass}`;
//   } else {
//     title.classList.add(newTitleClass);
//     line.classList.add(newLineClass);
//   }
// });

// 현재 화면에 보이는 section의 첫 번째 div의 색상에 맞춰 타이틀과 라인의 색상을 변경하는 함수
function ChangeColor() {
  const sections = document.querySelectorAll("section"); // 모든 section 요소를 선택합니다.

  sections.forEach((section) => {
    const firstDiv = section.querySelector("div"); // 첫 번째 div 요소를 선택합니다.
    const firstDivClasses = Array.from(firstDiv.classListd); // div 요소의 class 목록을 배열로 가져옵니다.

    const colorClass = firstDivClasses.find((className) =>
      className.includes("display__box__")
    ); // "display__box__"로 시작하는 class를 찾습니다.
    if (colorClass) {
      const color = colorClass.split("__")[2]; // class 이름에서 색상 부분을 추출합니다.

      const title = section.querySelector("title_pink"); // 타이틀 요소를 선택합니다.
      const line = section.querySelector(".top-line_pink"); // 라인 요소를 선택합니다.

      // 타이틀과 라인의 색상을 변경합니다.
      title.style.color = color;
      line.style.backgroundColor = color;
    }
  });
}

// 스크롤 이벤트 리스너 등록
window.addEventListener("scroll", ChangeColor);
