$('.tab').on('click', (e) => {
  $(e.target).toggleClass('tab-active');
  const icon = $(e.target).find('.fa');

  if (icon.hasClass('fa-minus')) {
    icon.removeClass('fa-minus');
    icon.addClass('fa-plus');
  } else {
    icon.removeClass('fa-plus');
    icon.addClass('fa-minus');
  }
});
