// window.addEventListener("load", function () {
//     const pageLoader = document.querySelector(".loader-wrapper");
//     const body = document.querySelector('body');
//     pageLoader.className += " hide";
//     body.classList.remove("no-scroll"); 
// })

$('body').scrollspy({
    target: '#nav'
})

AOS.init({
    delay: 0,
    duration: 1500,
    easing: 'ease-in-out'
});