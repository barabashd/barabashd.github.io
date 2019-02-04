$(document).ready(function() {

    $preloader = $('.preloader'),
    $loader = $preloader.find('.preloader');
    $loader.fadeOut();
    $preloader.delay(1000).fadeOut(1500);

    $(".navigation > li > a").click(function(event) {
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



    /*blog*/
    $(".all_post_block > .wrapper > a").addClass('active_post'); 
    var min_page_height = $(window).height() - $('#contact').height();
    $('.all_post_block').css('min-height', min_page_height);
    $(window).resize(function(){
        min_page_height = $(window).height() - $('#contact').height();
        $('.all_post_block').css('min-height', min_page_height);
    });
    $('.filter_post > ul > li').click(function(){

        $('.filter_post > ul > li').removeClass('active_tabs');
        $(this).addClass('active_tabs');
        
        if( $(this).hasClass('all') ){
            $(".all_post_block > .wrapper > a").addClass('active_post');  
        } 
        if( $(this).hasClass('travel') ){
            $(".all_post_block > .wrapper > a").removeClass('active_post'); 
            $(".all_post_block > .wrapper > a[data_tag='travel']").addClass('active_post');  
        } 
        if( $(this).hasClass('code') ){
            $(".all_post_block > .wrapper > a").removeClass('active_post'); 
            $(".all_post_block > .wrapper > a[data_tag='code']").addClass('active_post');  
        } 
        if( $(this).hasClass('other') ){
            $(".all_post_block > .wrapper > a").removeClass('active_post'); 
            $(".all_post_block > .wrapper > a[data_tag='other']").addClass('active_post');  
        } 
    });
});