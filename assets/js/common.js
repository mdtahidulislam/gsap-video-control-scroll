/*mobile menu condition with lenis + parallax */
let lenis;
let lenisInitialized = false;

// Function to initialize Lenis
function initializeLenis() {
    if (typeof Lenis !== 'undefined' && !lenisInitialized) {
        console.log('Initializing Lenis...');
        lenis = new Lenis({
            smooth: true,
            direction: 'vertical',
            smoothTouch: true,
        });

        // Request animation frame for Lenis and parallax
        function raf(time) {
            lenis.raf(time);
            handleParallaxScroll(); // Sync parallax effect with Lenis smooth scroll
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        lenisInitialized = true;
    }
}

// Function to destroy (pause) Lenis
function destroyLenis() {
    if (lenisInitialized && lenis) {
        console.log('Pausing Lenis...');
        lenis.stop();
    }
}

// Function to resume Lenis
function resumeLenis() {
    if (lenisInitialized && lenis) {
        console.log('Resuming Lenis...');
        lenis.start();
    }
}

// Handle parallax scroll based on Lenis scroll position
function handleParallaxScroll() {
    $(".parallax2").each(function() {
        var scrollPosition = lenis && lenisInitialized ? lenis.scroll : $(window).scrollTop(); // Use Lenis scroll position or fallback to native scroll
        var offset = $(this).offset().top;
        var windowHeight = $(window).height();
        var speed = $(this).data('speed');
        var yPos = -(scrollPosition - offset) / speed;
        var xPos = 0;

        // Apply parallax effect if element is in the viewport
        if (scrollPosition + windowHeight >= offset && offset + $(this).height() >= scrollPosition) {
            $(this).css('transform', 'translateY(' + yPos + 'px) translateX(' + xPos + 'px)');
        }
    });
}

                    // mobile menu /////
// Mobile menu open handler
$(".mobile-hamburger").click(function() {
    $(".mobile-menu-wrapper").addClass("active");
    $(".mobile-menu").addClass("active");
    $("body").addClass("overflow-hidden");

    if ($(".mobile-menu").hasClass("active")) {
        destroyLenis(); // Pause Lenis when the mobile menu is active
    }
});

// Mobile menu close handler
$(".mobile-close").click(function() {
    $(".mobile-menu").removeClass("active");
    $("body").removeClass("overflow-hidden");

    setTimeout(function() {
        $('.mobile-menu-wrapper').removeClass('active');
        resumeLenis(); // Resume Lenis after the menu closes
    }, 2000);
});

// Initialize Lenis only if 'design-dev' class is present on the body and Lenis is available
if ($('body').hasClass('design-dev')) {
    if (typeof Lenis !== 'undefined') {
        initializeLenis();
    } else {
        console.log('Lenis script not loaded, using fallback scroll behavior.');
    }
} else {
    console.log('.design-dev class not found on body for Lenis initialization');
}

// Call handleParallaxScroll manually on load, resize, and scroll events (for non-Lenis scenarios)
$(window).on('load resize scroll', function() {
    if (!lenisInitialized) {
        handleParallaxScroll(); // Fallback for non-Lenis users
    }
});

/*end mobile menu condition with lenis*/
