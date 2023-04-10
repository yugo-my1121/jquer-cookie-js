$(function(){
  console.log('JS読み込めています');

  //cookieに保存されている名前を取得
  var name = $.cookie('name');

  $('.js-get-cookie-data').html(name);


  // Cookieに保存されているページビュー数を取得し、1を加算します。
  var pageViews = parseInt($.cookie("pageViews")) + 1 || 1;

  // Cookieに新しいページビュー数を保存します。
  $.cookie("pageViews", pageViews, { expires: 2 });

  $('.js-visit-num').html($.cookie('pageViews'));

  console.log($.cookie('pageViews'));

  $('.js-set-cart').on('click',function(){
    console.log('カートのボタンがクリックされました。');

    var cart = $.cookie('cart');
    var shouhin = $(this).text(); //押したボタン

    if(cart){
      $.cookie('cart',cart + ',' + shouhin, { expires: 7, path: '/' });
    }else{
      $.cookie('cart',+ shouhin, { expires: 7, path: '/' });
    }
    location.reload();
  });
  $('.js-get-cart').html($.cookie('cart'));
});
