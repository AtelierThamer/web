document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;

    function showImage(index) {
        const images = document.querySelectorAll('.carousel img');
        if (index >= 0 && index < images.length) {
            const translateValue = -index * 100 + '%';
            carouselContainer.style.transform = 'translateX(' + translateValue + ')';
            currentIndex = index;
        }
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % document.querySelectorAll('.carousel img').length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + document.querySelectorAll('.carousel img').length) % document.querySelectorAll('.carousel img').length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Change image every 3 seconds

    document.querySelector('.carousel').addEventListener('mouseover', function () {
        clearInterval(this.intervalId);
    });

    document.querySelector('.carousel').addEventListener('mouseout', function () {
        this.intervalId = setInterval(nextImage, 3000);
    });

    showImage(currentIndex);
});
