const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dots");
const slides = document.querySelectorAll(".slides");
const mainSlider = document.querySelector(".main-slider");


currentSlide = 0;

prevBtn.addEventListener("click", () => {
    mainSlider.classList.add("");
    mainSlider.style.transform = "translate(-300px, 0)";
});
nextBtn.addEventListener("click", () => {
  mainSlider.classList.add("slide-transition");
  mainSlider.style.transform = "translate(300px, 0)";
});

