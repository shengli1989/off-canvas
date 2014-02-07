var off_canvas = function (){

  var body_scroll_top;

  // 展開 menu
  $(".open-menu-btn").on("click", function(event){
    // 記憶滾動數值

    body_scroll_top = $('body').scrollTop(); // body

    $("body").addClass("open-menu");
    // 繼承滾動數值
    $('.page').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
      $('body').addClass('scroll-control');
      $('.page').css('top', body_scroll_top * -1 +'px');
    });

  });


  // 關閉 menu
  $(".off-canvas-mask").on("click", function(){

    // 記憶滾動數值
    $("body").removeClass("open-menu");
    // 繼承滾動值
    $('.page').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
      $("body").removeClass("scroll-control").scrollTop(body_scroll_top);
      $('.page').css('top', 0);
    });

  });

};

off_canvas();

// 一旦改變視窗大小，直接關閉 menu
// $( window ).resize(function() {
//   $('body').removeClass('open-menu');
// });


