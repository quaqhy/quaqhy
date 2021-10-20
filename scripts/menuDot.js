$(document).ready(function () {
    console.log('menuDot');
    $('.menu-dot').click(function (e) {
        const menu = $('.nav-dot');

        menu.toggleClass('active');
    })

    console.log($('.nav-item'))
    $('.nav-item').click(function (e) {
        console.log(e);

        $('.nav-dot').removeClass('active');
    })
});