$(function () {
    // Language Dropdown
    $('#lang-selected').on('click', () => {
        $('#lang-items').slideToggle('slow').on('click', 'li', function () {
            $('#lang-code').text(`${$(this).text()}`);

            $(document).on('click', (ev) => {
                let $trigger = $('#lang-selected');

                if ($trigger !== ev.target && !$trigger.has(ev.target).length) {
                    $('#lang-items').slideUp('slow');
                }
            });
        });
    });

    // Currency Dropdown
    $('#currency-selected').on('click', () => {
        $('#currency-items').slideToggle('slow').on('click', 'li', function () {
            $('#select-currency').text(`${$(this).text()}`);

            $(document).on('click', (ev) => {
                let $trigger = $('#currency-selected');

                if ($trigger !== ev.target && !$trigger.has(ev.target).length) {
                    $('.currency-items').slideUp('slow');
                }
            });
        });
    });

    // User Account Mobile Menu
    $('#login-user').on('click', () => {
        $('#login-user-items').toggleClass('active');
    });

    // Main Mobile Menu 
    $('#mobile-menu').on('click', () => {
        $('#mobile-menu-dropdown').toggleClass('active');
    });

    // Show Cart Content
    $('#cart').on('click', () => $('#product-list').toggleClass('active'));

    //Count Products
    var $productListCount = $('#product-list-items');

    // Add to Cart Functionality
    $('.add-to-cart').on('click', function () {
        var $productPrice = $(this).prev().text(),
            $productImage = $(this).parent().prev().find('.product-image').clone(),
            $productTitle = $(this).parent().next().children('h4').text(),
            $fragment = $(document.createDocumentFragment()),
            $productListItems = $('<div>').addClass('product-list-item'),
            $cartImage = $('<div>').addClass('product-cart-image'),
            $cartTitle = $('<div>').addClass('product-cart-title'),
            $cartPrice = $('<div>').addClass('product-cart-price'),
            $removeBtn = $('<div>').addClass('remove').on('click', function () {
                $(this).parent().remove();

                let $sumOfProducts = $('.cart-price').text(),
                    $totalSum = $sumOfProducts.split(/[\s\$]/).filter(Boolean)
                        .map(Number).reduce((a, b) => a + b, 0).toFixed(2);
                $('#total-sum').text(`Total: $${$totalSum * 1}`);
                $('.items-in-cart').text(`(${$productListCount.children().length}) items`);
            }),
            $imgBtn = $('<img>').attr('src', 'img/close_btn.png'),
            $title = $('<span>').addClass('title'),
            $price = $('<span>').addClass('cart-price'),
            $countProd = $('<span>').addClass('count-product');

            $removeBtn.append($imgBtn);
            $cartImage.append($productImage);

            $title.append($productTitle);
            $cartTitle.append($title);

            $price.append($productPrice);
            $cartPrice.append($price);
            
            $productListItems.append($cartImage).append($cartTitle).append($cartPrice).append($removeBtn);

            $fragment.append($productListItems);
            $('#product-list-items').append($fragment);

        // Cart Calculating Functionality
        let $sumOfProducts = $('.cart-price').text(),
            $totalSum = $sumOfProducts.split(/[\s\$]/).filter(Boolean)
                .map(Number).reduce((a, b) => a + b, 0).toFixed(2);
        $('#total-sum').text(`Total: $${$totalSum * 1}`);
        $('.items-in-cart').text(`(${$productListCount.children().length}) items`);
    });

    //Recent Product Slider Settings
    $('#recent-products').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1107,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 811,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 570,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    //Featured Product Slider Settings
    $('#featured-products').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1107,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 811,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 570,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    // Tabs Settings
    $('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    });
    
    //Sidebar Quotation Slide
    $('#quotations-slider').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000
    });
    
    //Sidebar Post Slide
    $('#popular-posts-slider').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000
    });
}());
