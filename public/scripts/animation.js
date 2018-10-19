$(document).ready(function () {
  function addActive() {
    $(this).addClass("active");
    console.log('#someButton was clicked');
  }




  $(".landing-blog-item,.service-list-item").hover(function (e) {
    $(this).toggleClass("active");
  });
});