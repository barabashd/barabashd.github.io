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
                $(".navigation > li").on("click", "a", function(){
                    $('header nav').removeClass('mobile_menu_active');
                });
            } else {
            	$('header nav').removeClass('mobile_menu_active');
            }
        });
    } else {
        $('header nav').removeClass('mobile_menu_active');
	}


    $(window).resize(function() {
        if (window.matchMedia('(max-width: 991px)').matches) {

        } else {
        	$('header nav').removeClass('mobile_menu_active');
        }
    });


    $('.autoplay').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
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