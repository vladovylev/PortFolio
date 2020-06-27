$(function () {
    var windowSize = $(window).width();

    //Mobile menu
    $('#mobile-menu').on('click', function (ev) {
        ev.preventDefault();
        $('.main-navigation-items li').toggleClass('active');
    });

    //Remove Desktop Animations
    if (windowSize <= 768) {
        $('.fadeInLeft')
            .removeClass('slow delay-750')
            .addClass('slowest');

        $('.fadeInRight')
            .removeClass('slow')
            .addClass('slowest delay-1000');

        $('.animated')
            .removeClass('bounceInDown bounceInUp fadeInLeft fadeInRight fadeInDown')
            .addClass('fadeInUp')
    }

    //Remove items from cart
    $('.remove-product').on('click', function () {
        $(this).parent().remove();
    });

    //Show and hide Product Cart Popup

    $('#mini-cart').on('click', function () {
        $('#products-popup').css('display', 'block')
    });

    $('#remove').on('click', function () {
        $(this).closest('#products-popup').css('display', 'none')
    });

    //Calculate Amount in the cart
    function calculateAmountInCart() {
        var $priceProductsInCart = $('.product-price span').text()
            .split('$').filter(Boolean).map(Number),
            $totalAmount = $priceProductsInCart.reduce((a, b) => a + b, 0).toFixed(2);

        $('#total-amount').text(`$ ${$totalAmount}`);
        $('.mini-cart-amount').text(`$ ${$totalAmount}`)
    }

    $('.remove-product').on('click', function () {
        calculateAmountInCart();
    });
}());