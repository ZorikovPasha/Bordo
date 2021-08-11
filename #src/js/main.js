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

  $('.product-card__images').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-card__slider',
    arrows: false,
    vertical: true,
    // verticalSwiping: true,
    focusOnSelect: true,
  })

  $('.product-card__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.product-card__images',
    fade: true,
  });

  $('.product-card__color').on('click', function(e) {
    e.preventDefault();

    $(this).parent().parent().siblings('.product-card__tabs').children('.product-card__tab-wrapper').removeClass('active');

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

});