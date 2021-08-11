$(function(){
  
  $('.main-top__slider').slick({
    fade: true,
    dots: true,
    arrows: false,
    // autoplay: 3000,
  });

  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('menu--active'); 
  })

  $('.category-aside__title').on('click', function(e) {
    $(this).toggleClass('rollup');
    $(this).siblings('.category-aside__list').toggleClass('closed');
  })

  // слайдер мелких картинок. Связан со слайдером больших картинок

  $('.product-card__images').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-card__imgslider',
    arrows: false,
    vertical: true,
    focusOnSelect: true,
    initialSlide: 0,
  })

  // слайдер больших картинок. 

  $('.product-card__imgslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-card__images',
    fade: true,
  });

  // большой слайдер. Соединяет в себе слайдер маленьких картинок и больших картинок.
  // связан со  слайдером точек цветов.

  $('.product-card__slider').slick({
    fade: true,
    arrows: false,
    asNavFor: '.product-card__colors-slider',
    swipe: false,
  });

  // слайдер точек цвета

  $('.product-card__colors-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-card__slider',
    focusOnSelect: true,
  });

  $('.product-card__color').on('click', function(e) {
    e.preventDefault();

    $('.product-card__colors-tab').removeClass('active');

    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
  })

  $('.product-card__btnlike').on('click', function () {
    $(this).toggleClass('active');
  })

  $('.basket__quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.basket__quantity-plus'),
      btnDown = spinner.find('.basket__quantity-minus'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

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