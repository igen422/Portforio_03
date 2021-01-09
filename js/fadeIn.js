//  -----------------------------
//  スクロールでふわっと表示。
//  ３方向を揃えています。
//  -----------------------------
$(window).scroll(function () {
  // 上にふわっと表示
  $(".effect-fade-up").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight) {
      $(this).addClass("effect-scroll");
    }
  });

  //  左にふわっと表示
  $(".effect-fade-l").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight) {
      $(this).addClass("effect-scroll");
    }
  });

  // 右にふわっと表示
  $(".effect-fade-r").each(function () {
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight) {
      $(this).addClass("effect-scroll");
    }
  });
});

$("head").append("<style>body{display:none;}");
$(window).on("load", function () {
  $("body").delay(600).fadeIn("2000");
});