$(document).ready(function() {

    $(".navigation > li").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 60;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    $('.intro_block .about_me').addClass('intro_img_visible');


    if (window.matchMedia('(max-width: 991px)').matches) {
        $('.mobile_menu').click(function() {
            $('header nav').toggleClass('mobile_menu_active');
            if ($('header nav').hasClass('mobile_menu_active')) {
                /*$('body, html').css('height', '100%');
                $('body, html').css('margin', '0');
                $('body, html').css('overflow', 'hidden');*/
                $(".navigation > li").on("click", "a", function(){
                    $('header nav').removeClass('mobile_menu_active');
                });
            } else {
            	$('header nav').removeClass('mobile_menu_active');
                /*$('body, html').css('overflow', 'visible');*/
            }
        });
    } else {
        $('header nav').removeClass('mobile_menu_active');
        /*$('body, html').css('overflow', 'visible');*/
	}


    $(window).resize(function() {
        if (window.matchMedia('(max-width: 991px)').matches) {

        } else {
        	$('header nav').removeClass('mobile_menu_active');
            /*$('body, html').css('overflow', 'visible');*/
        }
    });


    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });




});