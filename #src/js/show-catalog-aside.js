$('.catalogue-btn').on('click', function(e) {
  e.stopPropagation()
  $('.catalogue-aside').addClass('shown');
  $('body').addClass('lock');

  setTimeout(function() {
    $('.catalogue-aside__body').addClass('opened');
  },100) 
})

$(document).on('click', function(e) {
  
  if ( $('.catalogue-aside').hasClass('shown') && $(e.target).parent('.catalogue-aside').length == 0) {

    $('.catalogue-aside__body').removeClass('opened');

    setTimeout(function() {
      $('.catalogue-aside').removeClass('shown')
      $('body').removeClass('lock')
    },300)
  }
})