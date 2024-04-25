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

$(window).scroll(function() {
    var hT = $('#dropdown').offset().top,
        hH = $('#dropdown').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    console.log((hT - wH), wS);
    if (wS > (hT + hH - wH)) {
        $('#dropdown').addClass('scrolled');
    } else {
        $('#dropdown').removeClass('scrolled');
    }
    if (wS <= 250) {
        $('#dropdown').removeClass('scrolled');
    }
});


let dropdownButton = document.querySelector('.dropdown');
dropdownButton.addEventListener('click', () => {
    var dropdownContent = document.querySelector('.dropdown-content');
    console.log(dropdownContent);
    if (dropdownContent.classList.contains('dropdown-content-hidden')) {
        dropdownContent.classList.remove("dropdown-content-hidden")
        dropdownContent.classList.add('dropdown-content-show')
    } else {
        dropdownContent.classList.remove("dropdown-content-show")
        dropdownContent.classList.add('dropdown-content-hidden')
    }
});

