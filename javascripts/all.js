var off_canvas = function (){

  var body_scroll_top = 0;
  var outside_inner_scroll_top = 0;

  // 展開 menu
  $(".open-menu-btn").on("click", function(event){


    // 記憶滾動數值
    body_scroll_top = $('body').scrollTop(); // body

    $('.page-inner').css('top', body_scroll_top * -1 +'px');
    $('body').addClass('scroll-control');
    $('.outside-inner').css('top', 0).scrollTop(outside_inner_scroll_top);

    // 延遲開啟 menu
    setTimeout( function() { $("body").addClass("open-menu"); }, 25 );


  });


  // 關閉 menu
  $(".off-canvas-mask").on("click", function(){

    outside_inner_scroll_top = $('.outside-inner').scrollTop();
    // 移除 off-canvas 開啟效果 (延遲時間與動畫一致)
    $("body").removeClass("open-menu");


    // 延遲還原 body scrollbar
    setTimeout( function() {
      $('.page-inner').css('top', 0);
      $('.outside-inner').css('top', outside_inner_scroll_top * -1 +'px');
      $("body").removeClass("scroll-control").scrollTop(body_scroll_top);
    }, 500 );


  });

};

off_canvas();

// 一旦改變視窗大小，直接關閉 menu
// $( window ).resize(function() {
//   $('body').removeClass('open-menu');
// });


