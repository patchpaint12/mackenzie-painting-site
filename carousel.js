// Carousel JavaScript (if additional behavior needed)
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const clone = track.cloneNode(true);
  track.parentElement.appendChild(clone);
});