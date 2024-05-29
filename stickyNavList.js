document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("navigationList");
    var sticky = header.offsetTop;
    var headerHeight = header.clientHeight;
    var parallaxContainer = document.querySelector('.parallax-container');

    window.addEventListener("resize", function(){
        header = document.getElementById("navigationList");
        headerHeight = header.clientHeight;
    })

    window.addEventListener("scroll", function () {
        if (window.scrollY > sticky) {
            header.classList.add("sticky");
            parallaxContainer.style.paddingTop = headerHeight + "px"; // Add padding equal to header height
        } else {
            header.classList.remove("sticky");
            parallaxContainer.style.paddingTop = 0;
        }
    });
});