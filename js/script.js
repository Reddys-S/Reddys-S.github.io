// для сайдпанель чтобы вылезала и закрывалась на крестик
const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


$('.sertificat__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: false,
    focusOnSelect: true,
    cssEase: 'linear',
    swipe: true,
    prevArrow: '<img src="img/arrow.svg" class="slick-prev">',
    nextArrow: '<img src="img/arrow.svg" class="slick-next">',
});

$("a[href^='#']").on("click", function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    $('html, body').stop().animate({
    scrollTop: $(anchor).offset().top
    }, 800);
    });