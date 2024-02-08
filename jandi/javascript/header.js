// 메인 페이지
// const setting = document.querySelector(
//   "header .home__header-row .settings .setting__user"
// );
// const hamburger = setting.querySelector(".setting__user-hamburger");

const detail_setting = document.querySelector(".setting__user");
const hamburger = detail_setting.querySelector(".setting__user-hamburger");

function settingClick() {
  console.log("clicked!");
  hamburger.classList.toggle("visible");
  //   hamburger.classList.remove("visible");
}

//setting.addEventListener("click", settingClick);
detail_setting.addEventListener("click", settingClick);
