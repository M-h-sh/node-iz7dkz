document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    new Typed("#typed", {
        strings: ["The Software Engineer", "IT Multimedia Graduate", "Microsoft 365 Certified", " UX/UI Designer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    $(window).on('load', function () {
        const $preloader = $('#preloader');
        $preloader.css({
            'opacity': '0',
            'visibility': 'hidden',
            'transition': 'opacity 0.3s ease, visibility 0.3s ease'
        });
    });
    
    // Update year dynamically
    $('#year').text(new Date().getFullYear());
});
// Initialize AOS (Animate On Scroll) library
function aosInit() {
    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
    });
}
$(window).on('load', aosInit);

  // Function to hide the preloader
  function hidePreloader() {
    $("#preloader").fadeOut(500, function() {
        $(this).remove();
    });
}

// Set preloader timer
var preloaderTimer = setTimeout(hidePreloader, 1000);

// Go to Top Button functionality
const goTopBtn = $('#goTopBtn');

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 20) {
        goTopBtn.show();
    } else {
        goTopBtn.hide();
    }
});

goTopBtn.on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 'smooth');
});

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  $(document).ready(function () {
    const toggleButton = $('#darkModeToggle');
    const body = $('body');
    const $lightImage = $("#mockup-image-light");
    const $darkImage = $("#mockup-image-dark");

    // Function to update the image visibility
    const updateImageVisibility = () => {
        if (body.hasClass('dark-mode')) {
            $lightImage.addClass('d-none');
            $darkImage.removeClass('d-none');
        } else {
            $darkImage.addClass('d-none');
            $lightImage.removeClass('d-none');
        }
    };

    // Check the saved preference and apply it
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.addClass('dark-mode');
        toggleButton.text('Light Mode');
    }
    updateImageVisibility(); // Ensure images are updated on page load

    // Toggle button click event
    toggleButton.on('click', function () {
        if (body.toggleClass('dark-mode').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleButton.text('Light Mode');
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleButton.text('Dark Mode');
        }
        updateImageVisibility(); // Update images on mode change
    });
});


