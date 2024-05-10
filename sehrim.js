document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
  
    let currentIndex = 0;
  
    function showSlide(index) {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }
      const offset = -currentIndex * 100 + "%";
      slider.style.transform = `translateX(${offset})`;
    }
  
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
  
    function prevSlide() {
      showSlide(currentIndex - 1);
    }
  
    if (prevButton && nextButton) {
      prevButton.addEventListener("click", prevSlide);
      nextButton.addEventListener("click", nextSlide);
    }
  
    // Ok tuşlarını klavyeden dinleme
    document.addEventListener("keydown", function(event) {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    });
  
    showSlide(currentIndex);
  });
  
  
