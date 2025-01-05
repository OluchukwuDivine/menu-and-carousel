const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dots");
const slides = document.querySelectorAll(".slides");
const mainSlider = document.querySelector(".main-slider");
const slide1 = "../src/assets/images/img1.jpeg";
const slide2 = "../src/assets/images/img2.jpeg";
const slide3 = "../src/assets/images/img3.jpeg";

const imgArray = [slide1, slide2, slide3];
const randomIndex = Math.floor(Math.random() * imgArray.length);
// const randomElement = myArray[randomIndex];
console.log(randomIndex);

prevBtn.addEventListener("click", () => {
    mainSlider.style.backgroundImage = `url(${imgArray[randomIndex]})`;
});
nextBtn.addEventListener("click", () => {
  mainSlider.style.backgroundImage = `url(${imgArray[2]})`;
});



























// currentSlide = 0;

// prevBtn.addEventListener("click", () => {
//     mainSlider.classList.add("");
//     mainSlider.style.transform = "translate(-300px, 0)";
// });
// nextBtn.addEventListener("click", () => {
//   mainSlider.classList.add("slide-transition");
//   mainSlider.style.transform = "translate(300px, 0)";
// });

