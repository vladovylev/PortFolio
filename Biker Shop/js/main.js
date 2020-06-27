$(function () {
    //Mobile Menu
    $('#mobile-menu').on('click', function (ev) {
        ev.preventDefault();
        $('.main-navigation li').toggleClass('active');
    })

    //Main Slider Settings
    $('.autoplay').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //Logo Slider Settings
    $('#brand-slider').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 821,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
}());
