$(document).ready(function() {

     // Check if the element with class .design-development-banner exists
     if ($('.design-development-banner').length) {
        $(window).on("beforeunload", function() {
            window.scrollTo(0, 0);
        });
    }

    
    //  // Mobile menu open handler
    //  $(".mobile-hamburger").click(function() {
    //     $(".mobile-menu-wrapper").addClass("active");
    //     $(".mobile-menu").addClass("active");
    //     $("body").addClass("overflow-hidden");

    //     if ($(".mobile-menu").hasClass("active")) {
    //         // If mobile menu is active, pause Lenis
    //         destroyLenis();
    //     }
    // });
    // // Mobile menu close handler
    // $(".mobile-close").click(function() {
    //     $(".mobile-menu").removeClass("active");
    //     $("body").removeClass("overflow-hidden");

    //     setTimeout(function() {
    //         $('.mobile-menu-wrapper').removeClass('active');
    //         resumeLenis();
    //     }, 2000);
    // });

    // // Check if 'design-dev' class exists on the body element and initialize Lenis
    // if ($('body').hasClass('design-dev')) {
    //     initializeLenis();
    // } else {
    //     console.log('.design-dev class not found on body');
    // }
    



    //  // Function to handle the parallax scrolling effect
    //  function handleParallaxScroll() {
    //     $(".parallax2").each(function() {
    //         var scrollPosition = $(window).scrollTop(); 
    //         var offset = $(this).offset().top;          
    //         var windowHeight = $(window).height();     
    //         var speed = $(this).data('speed');         
    //         var yPos = -(scrollPosition - offset) / speed;  
    //         var xPos = 0; 
    
    //         // Apply parallax effect if element is in the viewport
    //         if (scrollPosition + windowHeight >= offset && offset + $(this).height() >= scrollPosition) {
    //             $(this).css('transform', 'translateY(' + yPos + 'px) translateX(' + xPos + 'px)');
    //         }
    //     });
    // }
    // handleParallaxScroll();

    // $(window).on('resize', function() {
    //     handleParallaxScroll();
    // });

    // $(window).on('scroll', function() {
    //     handleParallaxScroll();
    // });

    // $(window).on('load', function() {
    //     handleParallaxScroll();
    // });
    
    
    
  
    



    // FAQ hide/show
    $('.faq-question').click(function() {
        const faqItem = $(this).closest('.dd-single-faq');
        const faqAnswer = faqItem.find('.faq-answer');
        
        // Slide up any currently open answer and remove the active class from other items
        $('.dd-single-faq').not(faqItem).removeClass('active').find('.faq-answer').slideUp();
        
        // Toggle the active class and slide down/up the clicked answer
        faqItem.toggleClass('active');
        
        if(faqItem.hasClass('active')) {
        faqAnswer.slideDown();
        } else {
        faqAnswer.slideUp();
        }
    });




    // city img and vdo height
    // function adjustHeight() {
    //     var imgHeight = $('.city-img').outerHeight();
    //     if (imgHeight > 0) {
    //       $('.city-vdo').css('height', imgHeight);
    //     }
    //   }
      
    //   // Use imagesLoaded to ensure all images are loaded before adjusting the height
    //   $(window).on('load', function() {
    //     $('.city-img').imagesLoaded(function() {
    //       adjustHeight();
    //     });
      
    //     $(window).resize(function() {
    //       adjustHeight();
    //     });
    //   });
      
      

    
});








// function setViewportHeight() {
//     let vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
// }

// window.addEventListener('resize', setViewportHeight);
// window.addEventListener('orientationchange', setViewportHeight);

// // Call it once on page load
// setViewportHeight();


  
//  design-development banner zoom in/out
(() => {
    document.addEventListener('DOMContentLoaded', function(){

        var textBG = document.querySelector('.design-development-banner .banner-zoom-out-wrapper')
        var text = document.querySelector('.design-development-banner .dd-banner-container')
        var scrollMouseOuter = document.querySelector('.scroll-mouse-outer')

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.design-development-banner',
                start: 'center center',
                end: '+=100%',
                scrub: true,
                pin: true,
            }
        })

        ScrollTrigger.config({ ignoreMobileResize: true });

        if (window.innerWidth <= 640) {
            tl.fromTo(textBG, {scale: 18}, {scale: 3, duration: 1}, 'mocky');
            tl.fromTo(text, {scale: 1}, {scale: 0.3, duration: 1}, 'mocky');
        } else if (window.innerWidth <= 1024) {
            tl.fromTo(textBG, {scale: 10}, {scale: 2.5, duration: 1}, 'mocky');
            tl.fromTo(text, {scale: 1}, {scale: 0.4, duration: 1}, 'mocky');
        } else {
            tl.fromTo(textBG, {scale: 5.5}, {scale: 1, duration: 1}, 'mocky');
            tl.fromTo(text, {scale: 1}, {scale: 0.2, duration: 1}, 'mocky');
        }

        // Opacity transition for the scroll-mouse-outer element
        tl.fromTo(scrollMouseOuter, {opacity: 1}, {opacity: 0, y: 200, duration: 1}, 'mocky');

    })
})();




// video optimized
document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('video[data-src]');
    const videoObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let video = entry.target;
                video.src = video.dataset.src;
                video.play();
                observer.unobserve(video);
            }
        });
    });
    videos.forEach(video => {
        videoObserver.observe(video);
    });
});



// Select all elements with the class leaf-branch*********
(() =>{
    const leafBranches = document.querySelectorAll('.black-marbel-main-media');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // Add the class 'active' when the element is in view
        entry.target.classList.add('active');
        } 
    });
    }, {
    threshold: 0.1 // Trigger 
    });

    // Observe each .leaf-branch element
    leafBranches.forEach(leafBranch => {
    observer.observe(leafBranch);
    });

})();


// Select all elements with the class zara***********
(() =>{
    const zaraMedias = document.querySelectorAll('.dd-zara-right');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
        // Add the class 'active' when the element is in view
        entry.target.classList.add('active');
        } 
    });
    }, {
    threshold: 0.2 // Trigger
    });

    // Observe each portfolio element
    zaraMedias.forEach(zaraMedia => {
    observer.observe(zaraMedia);
    });

})();


  