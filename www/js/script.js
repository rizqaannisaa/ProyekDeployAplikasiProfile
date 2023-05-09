var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active");
  setTimeout(showSlides, 6000);
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 1) {
    slideIndex = 3;
  }
  showSlides();
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > 3) {
    slideIndex = 1;
  }
  showSlides();
}
