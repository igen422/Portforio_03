$(function () {
  
  // オープンボタンを押した時
  // オープンナビが開かれる仕組み
  $('#open-btn').on('click', function () {
    $('#openNav').toggleClass('open');
    $('.html').css('overflow', 'hidden');
  });
  
  // クローズボタンを押した時
  // オープンナビが消える仕組み
  $('#close-btn').on('click', function () {
    $('#openNav').removeClass('open');
    $('.html').css('overflow', 'scroll');
  })
  
  // オープンナビ内のロゴを押した時
  // オープンナビが消える仕組み
  $('.openNav__logo-btn').on('click', function () {
    $('#openNav').removeClass('open');
    $('.html').css('overflow', 'scroll');
  })
  
  // オープンナビ内のメニューボタンを押した時
  // オープンナビが消える仕組み
  $('.openNav__menu-list').on('click', function () {
    $('#openNav').removeClass('open');
    $('.html').css('overflow', 'scroll');
  })

  
});