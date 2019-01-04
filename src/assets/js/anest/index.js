/*!
 * anest js
 */

$(document).ready(function() {
    // Pushpin
    $(window).scroll(function() {
        var height = $(window).height() - 50;
        var y = $(window).scrollTop();

        if (y >= height) {
            $('#sub-nav').addClass('fixed-top');
            $('#sub-nav img').addClass('show-img');
            $('#sub-nav .navbar-nav').addClass('ml');
        }
        if (y < height) {
            $('#sub-nav').removeClass('fixed-top');
            $('#sub-nav img').removeClass('show-img');
            $('#sub-nav .navbar-nav').removeClass('ml');
        }
    });
});

function display() {
    var refresh = 1000;
    setTimeout('startTime()', refresh)
}

function startTime() {
    var strcount
    var date = new Date()
    var clock = date.toLocaleString();
    document.getElementById('clock').innerHTML = clock;
    display();
}