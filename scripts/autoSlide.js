
$('document').ready(function () {




    const list = ["1.jpg", "2.jpg"];
    const url = './data/hero/';
    let index = 0;

    function handleChangeImageHero() {
        // console.log($(".hero").css("background"));

        // console.log($(document).css());
        console.log($(".hero").css("background-image"));

        const gradient = "linear-gradient(180deg, rgba(0, 0, 0, 0.5084908963585435) 0%, rgba(0, 0, 0, 0) 100%, rgba(255, 255, 255, 0.4412640056022409) 100%)";
        $(".hero").css({
            "background-image": `${gradient}, url(${url + list[index]})`
        });

        // console.log(`${gradient}, url(${url + list[index]})`);

        index++;
        if (index == list.length) {
            index = 0;
        }

    }
    setInterval(handleChangeImageHero, 10000);
});

