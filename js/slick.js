$(function(){
  $('#test').slick({
    arrows: false,
    autoplay: true,
    /* ポイントここから～ */
    autoplaySpeed: 0,
    cssEase: 'linear',
    speed: 5000,
    /* ～ここまで */
    slidesToShow: 7,
    slidesToScroll: 1,
  });
});