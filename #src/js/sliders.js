$('.main-top__slider').slick({
  fade: true,
  dots: true,
  arrows: false,
  // autoplay: 3000,
});

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

$(".page-section__items").slick({
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  infinite: false,
  prevArrow: '<img class="slider-arr slider-arr-left" src="images/arr-right.svg" alt="">',
  nextArrow: '<img class="slider-arr slider-arr-right" src="images/arr-right.svg" alt="">',

  responsive: [
    {
      breakpoint: 861,
      settings: "unslick",
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 431,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
});

$(".catalogue__items").slick({
  mobileFirst: true,
  slidesToShow: 1,
  infinite: false,
  prevArrow: '<img class="slider-arr slider-arr-left" src="images/arr-right.svg" alt="">',
  nextArrow: '<img class="slider-arr slider-arr-right" src="images/arr-right.svg" alt="">',

  responsive: [
    {
      breakpoint: 631,
      settings: "unslick",
    },
  ],
});
