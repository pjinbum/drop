$(function () {
  $(".drop-down").css({display: "none"});

  $(".main-menu li, .drop-down").hover(function () {
    // hover시 sub 메뉴가 보이게
    $(".drop-down").stop().slideDown(500);
  }, function () {
    // hover되지 않았을 경우 sub 메뉴가 보이지 않게
    $(".drop-down").stop().slideUp(500);
  });

  $(".drop-down > li").hover(function () {
    let i = $(this).index();
    $(".main-menu li").find("a").eq(i).addClass("on");
  }, function () {
    // mouse가 this를 떠났을 때 on이라는 클래스가 사라지게
    let i = $(this).index();
    $(".main-menu li").find("a").eq(i).removeClass("on");
  })
})