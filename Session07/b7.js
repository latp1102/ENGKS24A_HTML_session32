const images = document.querySelectorAll('.image');
const overlay = document.getElementById('imageOverlay');
const bigImage = document.getElementById('BigImage');

images.forEach(image => {
  image.addEventListener('click', function () {
    bigImage.src = this.src;
    overlay.style.display = 'flex';
  });
});

overlay.addEventListener('click', function () {
  if (event.target === overlay) {
    overlay.style.display = 'none';
  }
});
