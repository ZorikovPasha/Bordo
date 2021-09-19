
$('.category-btn').on('click', function(e) {

  $('.wrapper').addClass('covered')
  $('body').addClass('lock');

  setTimeout(function() {
    $('.category-aside').addClass('shown');
  },100) 
})


$(document).on('click', function(e) {
  
  if ( $('.category-aside').hasClass('shown') && $(e.target).closest('.category-aside').length == 0) {

    $('.category-aside').removeClass('shown');

    setTimeout(function() {
      $('.wrapper').removeClass('covered')
      $('body').removeClass('lock');
    },300)
  }
})

$(".category-aside__title").on("click", function (e) {
  $(this).toggleClass("rollup");
  $(this).siblings(".category-aside__list").toggleClass("closed");
});
