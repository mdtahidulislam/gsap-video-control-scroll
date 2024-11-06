$(document).ready(function() {
    if ($('.marketing').length) {
        $(window).on("beforeunload", function() {
            window.scrollTo(0, 0);
        });
    }

   
  

});



// gsap.registerPlugin(ScrollTrigger);

// const coolVideo = document.querySelector(".video");

// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".banner-video-wrapper",
//         start: "top top",
//         end: "bottom+=200% bottom",
//         scrub: true,
//         pin: true
//     }
// });

// coolVideo.onloadedmetadata = function () {
//     console.log(coolVideo.duration);
//     tl.to(coolVideo, { currentTime: coolVideo.duration });
// };

// function isTouchDevice() {
//     return (
//         "ontouchstart" in window ||
//         navigator.maxTouchPoints > 0 ||
//         navigator.msMaxTouchPoints > 0
//     );
// }

// if (isTouchDevice()) {
//     coolVideo.play();
// }