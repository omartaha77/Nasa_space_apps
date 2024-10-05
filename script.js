document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelector(".slides");
    const images = slides.children;
    let currentIndex = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
});

