$(window).scroll(function() {
    var hT = $('#nav').offset().top,
        hH = $('#nav').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
        $('#nav').addClass('scrolled');
    } else {
        $('#nav').removeClass('scrolled');
    }
    if (wS <= 250) {
        $('#nav').removeClass('scrolled');
    }
});
