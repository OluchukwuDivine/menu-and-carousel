const menuBtn = document.querySelector(".menu-btn");
const navHolder = document.querySelector(".nav-holder");

let menustatus = true;

menuBtn.addEventListener("click", () => {
  if (menustatus) {
    navHolder.style.height = "180px";
    menuBtn.classList.remove("fa-bars");
    menuBtn.classList.add("fa-times");
    menustatus = false;
  } else {
    navHolder.style.height = "70px";
    menuBtn.classList.remove("fa-times");
    menuBtn.classList.add("fa-bars");
    menustatus = true;
  }
});
