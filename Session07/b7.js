const contentImages = document.querySelectorAll(".content img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

contentImages.forEach((img) => {
  img.addEventListener("click", () => {
    overlayImg.src = img.src;
    overlay.style.display = "flex";
  });
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
