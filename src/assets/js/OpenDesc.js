// 버튼 요소 가져오기
const descBtn_Pink = document.querySelector(".OpenBtn_pink");

// 모달 요소 가져오기
const modal = document.querySelector(".modal__pink");

// 모달 열기
descBtn_Pink.addEventListener("click", () => {
  gsap.to(modal, { display: "block", opacity: 1, duration: 0.3 });
});

// 모달 닫기
const CloseBtn_Pink = document.querySelector(".CloseBtn_pink");
CloseBtn_Pink.addEventListener("click", () => {
  gsap.to(modal, { display: "none", opacity: 0, duration: 0.3 });
});
