
$(document).ready(function () {
  // start carrousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: false
  });




  $('.movePrevCarousel').on('click touchstart', e => {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('prev');
  })

  $('.moveNextCarousel').on('click touchstart', e => {
    e.preventDefault();
    e.stopPropagation();
    $('.carousel').carousel('next');
  })



  setInterval(autoplaySlider, 4000);

  ///////////////////////////////////// SIDENAV

  $menuLeft = $('.pushmenu-left');
  $nav_list = $('#sidebartoggle');

  $nav_list.click(function () {
    $(this).toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');

    if ($(this).hasClass('active')) {
      $('#sidebartoggle').html('<i class="material-icons">close</i>');
    } else {

      $('#sidebartoggle').html('<i class="material-icons">menu</i>');
    }
  });

  $(".pushmenu > a").click(function () {
    $nav_list.toggleClass('active');
    $('.pushmenu-push').toggleClass('pushmenu-push-toright');
    $menuLeft.toggleClass('pushmenu-open');

    if ($(this).hasClass('active')) {
      $('#sidebartoggle').html('<i class="material-icons">close</i>');
    } else {

      $('#sidebartoggle').html('<i class="material-icons">menu</i>');
    }

  })


});

function autoplaySlider() {
  $('.carousel').carousel('next');
}