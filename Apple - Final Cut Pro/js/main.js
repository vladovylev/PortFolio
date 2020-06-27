$(function () {
    var $widthSize = $(window).width(),
        $fragment = $(document.createDocumentFragment());

    //Function that creates video popup
    function createVideoPopup() {
        var $videoFinalCut = $('<div>')
                            .attr('id', 'video-final-cut')
                            .addClass('video-final-cut-pro'),
            $videoContainer = $('<div>').addClass('video-container'),
            $closeButton = $('<button>').attr('id', 'close')
                            .addClass('close-btn').on('click', function() {
                                $(this).closest('#video-final-cut').remove();
                            }),
            $videoframe = $('<iframe>')
                        .attr('id', 'youtube-video')
                        .attr('width', '100%')
                        .attr('height', '515px')
                        .attr('src', 'https://www.youtube.com/embed/xeAOyKnNdDw')
                        .attr('frameborder', '0')
                        .attr('allow', 'autoplay; encrypted-media')
                        .attr('allowfullscreen', true);
                        
            $videoContainer.append($closeButton).append($videoframe);
            $videoFinalCut.append($videoContainer);
            $fragment.append($videoFinalCut);
            $('#wrapper').append($fragment);
    };

    // Function which adds the 'animated' class to any '.animatable' in view
    var addAnimations = function() {
        
        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');
        
        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
            $(window).off('scroll', addAnimations);
        }
        
        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
            var $animatable = $(this);
                if (($animatable.offset().top + $animatable.height() - 20) < offset) {
                    $animatable.removeClass('animatable').addClass('animated');
                }
        });

    };

    // Hook doAnimations on scroll, and trigger a scroll
    $(window).on('scroll', addAnimations);
    $(window).trigger('scroll');

    // Responsive menu
    $('.fa-apple').on('click', () => {
        $('.main-mac-menu ul li').not(':first-child').toggleClass('active');
    });

    //Slider Settings
    $('.autoplay').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
    });

    //Video Popup Settings
    if ($widthSize < 1024) {

        $('#play-video').on('click', () => {
            createVideoPopup();
            $('#video-final-cut').css('display', 'block');
            $('.video-container').css('width', '90%').css('top', '5%');
            $('#youtube-video').removeAttr('height');
        });

        $('#footer-links').removeClass('animatable');
    }
    else {
        $('#play-video').on('click', () => {
            createVideoPopup();
            $('#video-final-cut').css('display', 'block');
        });
    }

    //Remove Desktop Animation
    if ($widthSize <= 768) {
        $('.animatable')
            .removeClass('fadeInDown fadeInLeft fadeInRight')
            .addClass('fadeInUp');
    }
}());