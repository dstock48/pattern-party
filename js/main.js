$('.tab').on('click', (e) => {
  $('.fa').removeClass('fa-minus');
  $('.fa').addClass('fa-plus');
  $(e.target).find('.fa').addClass('fa-minus');

  $('.tab').removeClass('tab-active');
  $(e.target).addClass('tab-active');

  $('.content').removeClass('content-active');
  $(e.target).siblings('.content').toggleClass('content-active');
});

