$(function () {

  $(".menu a, .logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 120;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });


  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list, .menu__btn').toggleClass('active');
  });


  $('.reviews__wrapper').slick({
    dots: true,
    arrows: false,
  });

  wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 0,
    mobile: true,
    live: true
  })
  wow.init();

});