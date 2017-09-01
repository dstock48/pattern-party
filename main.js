$('.tab-container').on('click', '.tab:not(.tab-active)', (e) => {
  const n = e.target.dataset.tabnum

  $('.tab').removeClass('tab-active')
  $('.tab').css('position', 'static')
  $(e.target).addClass('tab-active')
  $(e.target).css('position', 'relative')

  $('.content').removeClass('content-active')
  $(`.content-${n}`).addClass('content-active')
});
