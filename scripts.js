// Simple JavaScript for interactive features

// Auto-scrolling testimonial slider (optional)
const slider = document.querySelector('.testimonial-slider');
let scrollAmount = 0;
function autoScroll() {
  scrollAmount += 1;
  slider.scrollTo({
    top: 0,
    left: scrollAmount,
    behavior: 'smooth'
  });
  if(scrollAmount >= slider.scrollWidth - slider.clientWidth) {
    scrollAmount = 0;
  }
}
setInterval(autoScroll, 50);
