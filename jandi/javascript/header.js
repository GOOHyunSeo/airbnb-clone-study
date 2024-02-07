const setting = document.querySelector(
  "header .home__header-row .settings .setting__user"
);
const hamburger = document.querySelector(
  "header .home__header-row .settings .setting__user .setting__user-hamburger"
);

function settingClick() {
  console.log("clicked!");
  hamburger.classList.toggle("visible");
  //   hamburger.classList.remove("visible");
}

setting.addEventListener("click", settingClick);
