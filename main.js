const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Set initial position of carousel
let counter = 1;
const slideWidth = carouselImages[0].clientWidth;
carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;

// Function to handle carousel slide
function handleCarouselSlide() {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselSlide.style.transform = `translateX(${-slideWidth * counter}px)`;
}

// Add event listeners for previous and next buttons
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  handleCarouselSlide();
});

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  counter++;
  handleCarouselSlide();
});

// Loop the carousel infinitely
carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "last-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    handleCarouselSlide();
  }

  if (carouselImages[counter].id === "first-clone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    handleCarouselSlide();
  }
});
