document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    function revealImages() {
        const images = document.querySelectorAll(".image-container");
        images.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const text = img.querySelector(".scroll-text");
            if (rect.top < window.innerHeight * 0.85) { // When image is visible
                img.classList.add("show"); 
                text.classList.add("show"); // Show the text
            }
        });
    }

    window.addEventListener("scroll", revealImages);
    revealImages(); // Call it once to show images on page load
});
