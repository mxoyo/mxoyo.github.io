document.addEventListener('DOMContentLoaded', function () {
    parallaxEffect(); // on site load event

    document.addEventListener('scroll', function () {
        parallaxEffect(); // on scroll event
    });
});

function parallaxEffect() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    var parallaxBackground = document.querySelector('.parallax-background');
    parallaxBackground.style.transform = 'translateY(' + scrollTop * 0.8 + 'px)';
}