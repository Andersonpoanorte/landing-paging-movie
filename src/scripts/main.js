$(document).ready(function () {
    $('.menu__hamburguer').hide();

    $('.header__menuline').click(function () {
        $('.menu__hamburguer').fadeToggle();
        console.log('.header__menuline')
    })

    $('.menu__close').click(function () {
        $('.menu__hamburguer').fadeOut();
    })

    $('.menu__hamburguer a').click(function() {
        $('.menu__hamburguer').fadeOut();
    })

   
})