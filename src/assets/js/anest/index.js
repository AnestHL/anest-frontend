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

function display_c() {
    setTimeout('startTime()', 1000);
}

function startTime() {
    var date = new Date()
    var time = date.toLocaleString();
    document.getElementById('clock').innerHTML = time;
    display_c();
}
