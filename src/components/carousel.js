const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".dots");
const slides = document.querySelectorAll(".slides");

currentSlide = 0;

prevBtn.addEventListener("click", () => {
    slides.classList.add("check");
});

// console.log(typeof(slides));
// console.log(slides[0]);