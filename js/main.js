$('.tab').on('click', (e) => {
  $('.fa').removeClass('fa-minus');
  $('.fa').addClass('fa-plus');
  const icon = $(e.target).find('.fa');
  icon.addClass('fa-minus');

  $('.tab').removeClass('tab-active')
  $(e.target).toggleClass('tab-active');
  $('.content').removeClass('content-active')
  console.log($(e.target).siblings('.content'))
  $(e.target).siblings('.content').toggleClass('content-active')

  // if (icon.hasClass('fa-minus')) {
  //   icon.removeClass('fa-minus');
  //   icon.addClass('fa-plus');
  // } else {
  //   icon.removeClass('fa-plus');
  //   icon.addClass('fa-minus');
  // }
});

