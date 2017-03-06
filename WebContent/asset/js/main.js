$(function(){
  var idx=0;
//nav font color effect
//nav display
var d1idx = 0;

  $('.nav-depth-1 li').mouseenter(function(){
    d1idx = $(this).index();
     $(this).children().find('h2').css('color','#fff').parents('li').siblings().children().find('h2').css('color','#444')
     $('.nav-depth-1 li>div').eq(d1idx).css('display','block')
 }).mouseleave(function(){
   $(this).siblings().children().find('h2').css('color','#ccc')
   $('.nav-depth-1 li>div').eq(d1idx).css('display','none')
 })


// main slide

  //
  //   function slide(start,end,i){
  //     $('.section-main li div').eq(i).removeClass('on').addClass('on').css(left:start
  //     ).stop().animate({left:end}).removeClass()
  //   }
  //
  // function slide(){
  //   $('.section-main-btn a').click(function(){
  //     var idx = $(this).index();
  //     $('.section-main slide li').eq(idx-1).find('div').removeClass().addClass('on')
  //     .css(left:0).stop().animate({left:'100%'});
  //   }
  //   if(idx !== 0){
  //     var itv = setInterval(function(){
  //       slide()
  //     },5000);
  //   }else{
  //     $('.section-main slide li').sto()
  //   }
  // }






//끝
})
