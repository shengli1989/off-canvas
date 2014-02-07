var off_canvas = function (){

  var body_scroll_top;
  var outside_inner_scroll_top;


  // 展開 menu
  $(".open-menu-btn").on("click", function(event){
    // 記憶滾動數值
    body_scroll_top = $('body').scrollTop(); // body
    outside_inner_scroll_top = $('.outside-inner').css('top').replace("px",""); //從字串中取出數值

    $("body").addClass("open-menu");


    // 繼承滾動數值
    $('.page').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
      $('body').addClass('scroll-control');
      $('.page').scrollTop(body_scroll_top);
      $('.outside-inner').scrollTop(-outside_inner_scroll_top).css('top', 0);
    });

    event.preventDefault();

  });


  // 關閉 menu
  $(".outside a, .off-canvas-mask").on("click", function(){

    // 記憶滾動數值
    outside_inner_scroll_top = $('.outside-inner').scrollTop();
    body_scroll_top = $('.page').scrollTop();

    $("body").removeClass("open-menu");


  // 繼承滾動值
  $('.page').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
    $("body").removeClass("scroll-control").scrollTop(body_scroll_top);
    $('.outside-inner').css('top', -outside_inner_scroll_top);
  });

  });

};

off_canvas();

// 一旦改變視窗大小，直接關閉 menu
// $( window ).resize(function() {
//   $('body').removeClass('open-menu');
// });


