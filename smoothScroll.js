// Smooth scroll function with header offset
function scrollToSection(id) {
    const headerOffset = document.getElementById("navigationList").offsetHeight;
    const element = document.getElementById(id);
    const offsetPosition = element.offsetTop - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}