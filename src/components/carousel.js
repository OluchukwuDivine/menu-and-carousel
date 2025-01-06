const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".img-dots");

prevBtn.addEventListener("click", () => {
    alert("This section has not been updated");
});
nextBtn.addEventListener("click", () => {
    alert("This section has not been updated");
});

dots.forEach(dot => {
    dot.addEventListener("click", () => {
      alert("This section has not been updated");
    });
});
