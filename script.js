document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const images = document.querySelectorAll('.model img');
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    document.body.appendChild(nextButton);

    function showNextImage() {
        images[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.display = 'block';
    }

    nextButton.addEventListener('click', showNextImage);

    // Initially hide all images except the first one
    images.forEach((img, index) => {
        if (index !== 0) img.style.display = 'none';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
