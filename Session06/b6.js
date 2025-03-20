const text = document.getElementById("text");
const btn1Element = document.getElementById("btn1");
const btn2Element = document.getElementById("btn2");

let currentSize = parseInt(window.getComputedStyle(text).fontSize);
btn1Element.addEventListener("click", () => {
  currentSize += 2;
  text.style.fontSize = currentSize + "px";
});

btn2Element.addEventListener("click", () => {
  if (currentSize > 8) {
    currentSize -= 2;
    text.style.fontSize = currentSize + "px";
  }
});
