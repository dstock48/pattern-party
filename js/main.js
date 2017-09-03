$('.header-bar a').on('click', () => false);

$('.accordian-tabs').on('click', '.tab', (e) => {
  if ([...e.target.classList].includes('tab')) {
    $('.accordian-tabs .fa').removeClass('fa-minus');
    $('.accordian-tabs .fa').addClass('fa-plus');
    $(e.target).find('.fa').addClass('fa-minus');

    $('.tab').removeClass('tab-active');
    $(e.target).addClass('tab-active');

    $('.content').removeClass('content-active');
    $(e.target).siblings('.content').toggleClass('content-active');

    if (window.innerWidth < 500) {
      $('html').scrollTop($(e.target).offset().top - 20);
    }
  }
});

$('.menu-btn').on('click', () => {
  $('.dropdown').toggleClass('hidden');
});

$('.desktop-header .search-bar input').on('focus', (e) => {
  $(e.target).addClass('expanded');
});

$('.desktop-header .search-bar input').on('blur', (e) => {
  $(e.target).removeClass('expanded');
});
