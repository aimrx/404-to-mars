// 1. Select all layers
const parallaxLayers = document.querySelectorAll(".parallax-layer");

// 2. On scroll, update each layer's position
function updateParallax() {
  parallaxLayers.forEach((layer) => {
    // Read the speed value from HTML attribute
    const speed = parseFloat(layer.dataset.speed);

    // Calculate how much to move this layer
    const scrolled = window.pageYOffset;
    const yPos = scrolled * speed * 0.5;

    // Apply the transform
    layer.style.transform = `translateY(${yPos}px)`;
  });
}

// 3. Listen to scroll events efficiently
window.addEventListener(
  "scroll",
  () => {
    requestAnimationFrame(updateParallax);
  },
  { passive: true }
);
audioElement.play();
