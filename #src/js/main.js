$(function(){
  
  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('menu--active'); 
  })

  $('.menu-btn').on('click', function(e) {
    $('.menu-btn').toggleClass('active');
    $('.header__bottom-nav').toggleClass('active');
    $('.wrapper').toggleClass('covered');
    $('body').toggleClass('lock');
  })


  $('.product-card__color').on('click', function(e) {
    e.preventDefault();

    $('.product-card__colors-tab').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  })

  $('.product-card__btnlike').on('click', function () {
    $(this).toggleClass('active');
  })


  $('.filter-style').styler();

  $('.favorite__item-btn').on('click', function() {
    $(this).parent().parent().parent().parent('.favorite__item').addClass('removed');
  })

  $('.user-info__tab').on('click', function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).parent().siblings('.user-info__tab-content').removeClass('active');
    $(this).toggleClass('active');
    $($(this).attr('href')).addClass('active');
  })

  $('.basket__remove-btn').on('click', function() {
    $(this).parent().parent().addClass('removed');
  })

});