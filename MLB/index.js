$(function(){
          $("li a").click(function(event){ // li a를 클릭했을 때
             event.preventDefault(); //a의 넘어가려고 하는 특성을 막아주고 animate만 실행되게
             var thish = $(this.hash).offset().top;
             // $(this.hash) this(현재 클릭한 녀석)의 id값
             // .offset()의 좌표
             // 중의 .top; 탑값
             $('html,body').stop().animate({scrollTop:thish}, 1000);
             // $('html,body') 가 이동할 때
             // animate 실행
             // scrollTop 스크롤 탑 값을 :thish 만큼 이동
             // 1000의 duration(시간)동안
});

// => 부드럽게 스크롤하면서 타겟으로 넘어가는 것
