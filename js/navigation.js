$(function () {
  
  // オープンボタンを押した時
  // オープンナビが開かれる仕組み
  $('#open-btn').on('click', function () {
    $('#openNav').stop().toggleClass('open');
    $('.openNav__menu-list').stop().toggleClass('effect-scroll');
    $('#html').css('overflow', 'hidden');
  });
  
  // クローズボタンを押した時
  // オープンナビ内のロゴを押した時
  // オープンナビ内のメニューボタンを押した時
  // オープンナビが消える仕組み
  $('#close-btn, .openNav__logo-btn, .openNav__menu-btn, #openNav').on('click', function () {
    $('#openNav').stop().removeClass('open');
    $('.openNav__menu-list').stop().removeClass('effect-scroll');
    $('#html').css('overflow', 'scroll');
  })
});