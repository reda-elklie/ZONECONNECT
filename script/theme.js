const loader = document.querySelector(".loader");
const themeBtn = document.querySelector(".theme");
const themeIcon = themeBtn.querySelector(".fa-solid");
const heroImage = document.querySelector("[data_hero]");
const aboutImage = document.querySelector("[data_about]");
const body = document.body;

setTheme();

themeBtn.addEventListener("click", () => {
  saveTheme();
});

function saveTheme() {
  if (body.classList.contains("dark_mode")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  setTheme();
}

function setTheme() {
  // loader.classList.remove("hide");
  // loader.classList.remove("end");
  var theme = localStorage.getItem("theme");
  if (theme == "light") {
    body.classList.remove("dark_mode");
    body.classList.add("light_mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
    heroImage.src = "/imgs/jojo2.png";
    aboutImage.src = "/imgs/dio2.png";
  } else {
    body.classList.add("dark_mode");
    body.classList.remove("light_mode");
    themeIcon.classList.add("fa-sun");
    themeIcon.classList.remove("fa-moon");
    heroImage.src = "/imgs/jojo.png";
    aboutImage.src = "/imgs/dio.png";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loader.classList.add("end");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 500);
});
