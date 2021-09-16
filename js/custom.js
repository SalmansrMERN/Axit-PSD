$(function () {

    $('.banner_btn').click(function () {
        $('.form_fill').slideToggle('slow');

    });
    $('.banner_btn').click(function () {
        $('.form_title').slideToggle('slow');

    });
    $('#banner_part').mouseover(function () {
        $('.banner_btn').slideDown(1000);

    });
    $('#social_part').mouseover(function () {
        $('.banner_form').hide('slow');

    });
    // ============== Banner Slide End ================

    // ============== Menu Fixed Start ==================

    var navoff = $('#header_part').offset().top

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();
        if (scrolling > navoff) {
            $('#header_part').addClass('menu_fix');
        } else {
            $('#header_part').removeClass('menu_fix');
        }

    });

    // ============== Menu Fixed End ==================

    // =============== Effect Part Start ==============

    $('.effect_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 2000,
        dots: true,
        fade: true,


    });

    // =============== Effect Part Enf ==============



    // =============== Pricing Card Part Start =================

    $('.card_col').mouseover(function () {

        $('.card_hide').slideDown(1000);

    });

    // =============== Pricing Card Part End =================



    // ================ Test Part End ========================

    $('.test_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 2000,
        dots: false,
        arrows: false,

    });

    // ================ Test Part Start =================

    // ================ Design Part Start ==============

    $('.design_item').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arw"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arw"></i>',

    });

    // ================ Design Part End ===============


});