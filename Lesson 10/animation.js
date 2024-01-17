function fadeInAllElements() {
  // Get all elements with the class 'fade-in'
  var elements = document.querySelectorAll(".fade-in");

  // Apply fade-in animation to each element
  anime({
    targets: elements,
    opacity: [0, 1], // Fade in from 0 to 1
    easing: "easeInOutQuad", // Easing function
    duration: 1000, // Animation duration in milliseconds
    delay: anime.stagger(100), // Delay between animations for each element
  });
}

// Call the function when the document is ready
document.addEventListener("DOMContentLoaded", function () {
  fadeInAllElements();
});
