$(document).ready(function(){
  var hSize = $(window).height();
    $('#hero').height(hSize); // アドレスバーを除いたサイズを付与
  });
  $(window).resize(function(){ // ページをリサイズした時の処理
  var hSize = $(window).height();
    $('#hero').height(hSize); // アドレスバーを除いたサイズを付与
  });