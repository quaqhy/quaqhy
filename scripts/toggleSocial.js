$(document).ready(function () {
    function toggleUrl(s) {
        console.log(s.search('bold'))
        if (s.search('bold') != -1) {
            return s.replace('-bold', '');
        }
        else {
            console.log(s.replace('.png', '-bold.png'))
            return s.replace('.png', '-bold.png');
        }
    }

    function toggleImg() {
        const url = $(this).children('img').prop('src');
        const newUrl = toggleUrl($(this).children('img').prop('src'));

        $(this).children('img').prop('src', newUrl);
    }

    $(".contact-item>a").hover(toggleImg, toggleImg);
});