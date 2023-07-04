// 버튼 요소 가져오기
const descBtn_Pink_GSAP = document.querySelector(".OpenBtn_pink_GSAP");
const descBtn_Pink_Slider = document.querySelector(".OpenBtn_pink_Slider");
const descBtn_Org_Game = document.querySelector(".OpenBtn_org_Game");
const descBtn_Org_Team = document.querySelector(".OpenBtn_org_Team");
const descBtn_Yel_Site = document.querySelector(".OpenBtn_yel_site");
const descBtn_Yel_Vue = document.querySelector(".OpenBtn_yel_vue");
const descBtn_Mint_Ani = document.querySelector(".OpenBtn_mint_Ani");
const descBtn_Mint_Next = document.querySelector(".OpenBtn_mint_Next");

const descBtn_Sky_Parallax = document.querySelector(".OpenBtn_sky_parallax");
const descBtn_Sky_Mouse = document.querySelector(".OpenBtn_sky_Mouse");

const descBtn_Blue_Blog = document.querySelector(".OpenBtn_blue_Blog");
const descBtn_Blue_Quiz = document.querySelector(".OpenBtn_blue_Quiz");

const descBtn_Vio_React = document.querySelector(".OpenBtn_vio_react");
const descBtn_Vio_Seacrh = document.querySelector(".OpenBtn_vio_search");

// 모달 요소 가져오기
const modal_Pink_GSAP = document.querySelector(".modal__pink_GSAP");
const modal_Pink_Slider = document.querySelector(".modal__pink_Slider");
const modal_Org_Game = document.querySelector(".modal__org_Game");
const modal_Org_Team = document.querySelector(".modal__org_Team");
const modal_Yel_Site = document.querySelector(".modal__yel_site");
const modal_Yel_Vue = document.querySelector(".modal__yel_vue");
const modal_Mint_Ani = document.querySelector(".modal__mint_Ani");
const modal_Mint_Next = document.querySelector(".modal__mint_Next");

const modal_Sky_Parallx = document.querySelector(".modal__sky_parallax");
const modal_Sky_Mouse = document.querySelector(".modal__sky_mouse");

const modal_Blue_Blog = document.querySelector(".modal__blue_Blog");
const modal_Blue_Quiz = document.querySelector(".modal__blue_Quiz");

const modal_Vio_React = document.querySelector(".modal__vio_react");
const modal_Vio_Search = document.querySelector(".modal__vio_search");

// 모달 열기

//Pink
descBtn_Pink_GSAP.addEventListener("click", () => {
  gsap.to(modal_Pink_GSAP, { display: "block", opacity: 1, duration: 0.3 });
});
descBtn_Pink_Slider.addEventListener("click", () => {
  gsap.to(modal_Pink_Slider, { display: "block", opacity: 1, duration: 0.3 });
});

//Orange
descBtn_Org_Game.addEventListener("click", () => {
  gsap.to(modal_Org_Game, { display: "block", opacity: 1, duration: 0.3 });
});
descBtn_Org_Team.addEventListener("click", () => {
  gsap.to(modal_Org_Team, { display: "block", opacity: 1, duration: 0.3 });
});

//Yellow
descBtn_Yel_Site.addEventListener("click", () => {
  gsap.to(modal_Yel_Site, { display: "block", opacity: 1, duration: 0.3 });
});
descBtn_Yel_Vue.addEventListener("click", () => {
  gsap.to(modal_Yel_Vue, { display: "block", opacity: 1, duration: 0.3 });
});

//Mint
descBtn_Mint_Ani.addEventListener("click", () => {
  gsap.to(modal_Mint_Ani, { display: "block", opacity: 1, duration: 0.3 });
});
descBtn_Mint_Next.addEventListener("click", () => {
  gsap.to(modal_Mint_Next, { display: "block", opacity: 1, duration: 0.3 });
});

//Sky
descBtn_Sky_Parallax.addEventListener("click", () => {
  gsap.to(modal_Sky_Parallx, { display: "block", opacity: 1, duration: 0.3 });
});
descBtn_Sky_Mouse.addEventListener("click", () => {
  gsap.to(modal_Sky_Mouse, { display: "block", opacity: 1, duration: 0.3 });
});

//Blue
descBtn_Blue_Blog.addEventListener("click", () => {
  gsap.to(modal_Blue_Blog, { display: "block", opacity: 1, duration: 0.3 });
});
descBtn_Blue_Quiz.addEventListener("click", () => {
  gsap.to(modal_Blue_Quiz, { display: "block", opacity: 1, duration: 0.3 });
});

//Violet
descBtn_Vio_React.addEventListener("click", () => {
  gsap.to(modal_Vio_React, { display: "block", opacity: 1, duration: 0.3 });
});
descBtn_Vio_Seacrh.addEventListener("click", () => {
  gsap.to(modal_Vio_Search, { display: "block", opacity: 1, duration: 0.3 });
});

// 모달 닫기

//Pink
const CloseBtn_Pink_GSAP = document.querySelector(".CloseBtn_pink_GSAP");
CloseBtn_Pink_GSAP.addEventListener("click", () => {
  gsap.to(modal_Pink_GSAP, { display: "none", opacity: 0, duration: 0.3 });
});
const CloseBtn_Pink_Slider = document.querySelector(".CloseBtn_pink_Slider");
CloseBtn_Pink_Slider.addEventListener("click", () => {
  gsap.to(modal_Pink_Slider, { display: "none", opacity: 0, duration: 0.3 });
});

//Orange
const CloseBtn_Org_Game = document.querySelector(".modal__org_Game");
CloseBtn_Org_Game.addEventListener("click", () => {
  gsap.to(modal_Org_Game, { display: "none", opacity: 0, duration: 0.3 });
});
const CloseBtn_Org_Team = document.querySelector(".CloseBtn_org_Team");
CloseBtn_Org_Team.addEventListener("click", () => {
  gsap.to(modal_Org_Team, { display: "none", opacity: 0, duration: 0.3 });
});

//Yellow
const CloseBtn_Yel_Site = document.querySelector(".CloseBtn_yel_site");
CloseBtn_Yel_Site.addEventListener("click", () => {
  gsap.to(modal_Yel_Site, { display: "none", opacity: 0, duration: 0.3 });
});
const CloseBtn_Yel_Vue = document.querySelector(".CloseBtn_yel_vue");
CloseBtn_Yel_Vue.addEventListener("click", () => {
  gsap.to(modal_Yel_Vue, { display: "none", opacity: 0, duration: 0.3 });
});

//Mint
const CloseBtn_Mint_Ani = document.querySelector(".CloseBtn_mint_Ani");
CloseBtn_Mint_Ani.addEventListener("click", () => {
  gsap.to(modal_Mint_Ani, { display: "none", opacity: 0, duration: 0.3 });
});
const CloseBtn_Mint_Next = document.querySelector(".CloseBtn_mint_Next");
CloseBtn_Mint_Next.addEventListener("click", () => {
  gsap.to(modal_Mint_Next, { display: "none", opacity: 0, duration: 0.3 });
});

//Sky
const CloseBtn_Sky_Parallax = document.querySelector(".CloseBtn_sky_parallax");
CloseBtn_Sky_Parallax.addEventListener("click", () => {
  gsap.to(modal_Sky_Parallx, { display: "none", opacity: 0, duration: 0.3 });
});
const CloseBtn_Sky_Mouse = document.querySelector(".CloseBtn_sky_mouse");
CloseBtn_Sky_Mouse.addEventListener("click", () => {
  gsap.to(modal_Sky_Mouse, { display: "none", opacity: 0, duration: 0.3 });
});

//Blue
const CloseBtn_Blue_Blog = document.querySelector(".CloseBtn_blue_Blog");
CloseBtn_Blue_Blog.addEventListener("click", () => {
  gsap.to(modal_Blue_Blog, { display: "none", opacity: 0, duration: 0.3 });
});
const CloseBtn_Blue_Quiz = document.querySelector(".CloseBtn_blue_Quiz");
CloseBtn_Blue_Quiz.addEventListener("click", () => {
  gsap.to(modal_Blue_Quiz, { display: "none", opacity: 0, duration: 0.3 });
});

//Violet
const CloseBtn_Vio_React = document.querySelector(".CloseBtn_vio_react");
CloseBtn_Vio_React.addEventListener("click", () => {
  gsap.to(modal_Vio_React, { display: "none", opacity: 0, duration: 0.3 });
});
const CloseBtn_Vio_Search = document.querySelector(".CloseBtn_vio_search");
CloseBtn_Vio_Search.addEventListener("click", () => {
  gsap.to(modal_Vio_Search, { display: "none", opacity: 0, duration: 0.3 });
});
