/*!
 * anest js
 */

$(document).ready(function() {

    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scroll-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // Main Navigation
    $('.hamburger-menu').on('click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    // Add collapse
    $('#btn-collapse').on('click', function() {
        $(this).toggleClass('rotate');
    });

    // Smooth Scrolling
    $(".nav-bar a, #sub-nav a, .entry-footer a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {
                window.location.hash = hash;
            });
        }
    });
});

$(document).mouseup(function(e) {
    var container = $('.site-navigation');

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('show');
        $('#btn-collapse').addClass('rotate');
    }
});