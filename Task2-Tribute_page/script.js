
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery-images img");
    images.forEach(function(image) {
        image.style.opacity = 1;
        image.addEventListener("load", function() {
            fadeIn(image);
        });
    });
    function fadeIn(element) {
        let opacity = 0;
        const timer = setInterval(function() {
            opacity += 0.05;
            element.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(timer);
            }
        }, 50); 
    }
});
