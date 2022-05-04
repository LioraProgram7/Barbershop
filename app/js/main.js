$(function () {

  new Swiper('.reviews__wrapper');


  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__list, .menu__btn').toggleClass('active');
  });


});