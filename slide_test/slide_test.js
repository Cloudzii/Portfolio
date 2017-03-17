$(function(){

///// 마우스 오버시 멈춰지는 거 //////
  var sliderhend = setInterval(function(){
    $('div .next').trigger('click')
  },4800)


  $('div').on({
    mouseenter:function(){
      clearInterval(sliderhend);
    },
    mouseleave:function(){
      sliderhend = setInterval(function(){
        $('div .next').trigger('click')
      },4800);
    }
  })

///////////슬라이드 배너 ////////////
  function motion(start, end, i){
    $('div li').eq(i).addClass('on').find('div').css({
      "left":start,
      "display":"block"
    }).stop().animate({
      "left":end
    }).parent().siblings();

    if(idx == $('div li').length){
      idx = 0
      motion('100%',0,idx);
    }else if(idx < 0){
      idx = $('div li').length-1;
      motion('-100%',0,idx);
    }
  }
  var next = function(){
    motion(0,'-100%',idx);
    idx++
    $('div li').eq(idx).addClass('on')
    motion('100%',0,idx);
  };
  var prev = function(){
    motion(0,'100%',idx);
    idx--
    motion('-100%',0,idx);
  }



})
