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
});