$('.accordian-tabs').on('click', '.tab', (e) => {
  if ([...e.target.classList].includes('tab')) {
    $('.fa').removeClass('fa-minus');
    $('.fa').addClass('fa-plus');
    $(e.target).find('.fa').addClass('fa-minus');

    $('.tab').removeClass('tab-active');
    $(e.target).addClass('tab-active');

    $('.content').removeClass('content-active');
    $(e.target).siblings('.content').toggleClass('content-active');
  }
});

