$(document).ready(function () {
  function addActive() {
    $(this).addClass("active");
    console.log('#someButton was clicked');
  }




  $(".landing-blog-item,.service-list-item").hover(function (e) {
    $(this).toggleClass("active");
  });
  $(".scroll-arrow").on("click", function () {
    $(window).scrollTop(0);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 150) {
      $('.scroll-arrow').fadeIn();
    } else {
      $('.scroll-arrow').fadeOut();
    }
  });
  $(window).bind("resize", function () {
    if ($(this).width() < 991) {
      $('.timeline > li.inverted').removeClass('timeline-inverted')
    } else {
      $('.timeline > li.inverted').addClass('timeline-inverted')
    }
  }).trigger('resize');
});