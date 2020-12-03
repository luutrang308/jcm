$(document).ready(function() {
	new WOW().init();
	$('.section_slider_banner').slick({
        dots: true,
        slidesToShow: 1,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/next2.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next1.png' alt=''></button>",
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
    $('.slider_parner_client').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    $('.slider_parner').slick({
        dots: false,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.slider_parner_client').slick('setPosition');
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
        $('.slider_parner').slick('setPosition');
    });
    /* back to top */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.backtotop').fadeIn();
        } else {
            $('.backtotop').fadeOut();
        }
    });
    $('.backtotop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    $(window).scroll(function (){
        $('.header_pc').addClass('bg_opacity');
        if ($(this).scrollTop() < 500) {
            $('.header_pc').removeClass('bg_opacity');
        }
    });
});