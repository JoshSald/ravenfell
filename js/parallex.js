// ===========
// Over 1024px
// ===========
$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $(".logo").css({
    transform: "translate(0px," + wScroll / 8 + "%)"
  });
  $(".raven").css({
    transform: "translate(0px, -" + wScroll / 80 + "%)"
  });
});

// ===========
// Below 1024
// ===========

$(window).resize(function() {
  var width = $(window).width();
  if (width < 1024) {
    $(window).scroll(function() {
      var wScroll = $(this).scrollTop();

      $(".logo").css({
        transform: "translate(0px," + wScroll / 16 + "%)"
      });
      $(".raven").css({
        transform: "translate(0px, -" + wScroll / 160 + "%)"
      });
    });
  }
});

// ===========
// Below 386px
// ===========

$(window).resize(function() {
  var width = $(window).width();
  if (width < 386) {
    $(window).scroll(function() {
      var wScroll = $(this).scrollTop();

      $(".logo").css({
        transform: "translate(0px," + wScroll / 8 + "%)"
      });
      $(".raven").css({
        transform: "translate(0px, -" + wScroll / 320 + "%)"
      });
    });
  }
});
