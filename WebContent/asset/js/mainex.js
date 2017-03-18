$(function(){
  var help = 0;
  $('#main-nav nav li.nav ').mouseenter(function(){
    $(this).find('a').css('color','#fff').parent().siblings().find('a').css('color','#666')
    $(this).find('div').css('display','block')
  }).mouseleave(function(){
    $(this).siblings().find('a').css('color','#ccc')
    $(this).find('div').css('display','none')
  })

  $('#main-nav nav li.nav div ul li a').mouseenter(function(){
    $(this).css('color','#fff').parent().siblings().find('a').css('color','#666')
  }).mouseleave(function(){
    $(this).parent().siblings().find('a').css('color','#ccc')
  })

//models
  $('.models-btn a').eq(0).addClass('mo');

  $('#main-nav nav li.models').mouseenter(function(){
    $(this).find('div').css('display','block').stop().animate({
      width:'540px'
    },500)
  }).mouseleave(function(){
    $(this).find('div').stop().animate({
      width:0
    },1000,function(){
        $(this).find('div').css('display','none')
    })
  })

  $('.models-btn a').mouseenter(function(){
    var idx = $(this).index();
    console.log("models on :"+idx);
    $(this).addClass('mo').siblings().removeClass();
    if(idx == 0){
      $('.models-view li a').css('color','#fff')
    }else if (idx == 1) {
      $('.models-view li a.mv-h').css('color','#fff').siblings().find('a').css('color','#666')
    }else if (idx == 2) {
      $('.models-view li a.mv-f').css('color','#fff').siblings().find('a').css('color','#666')
    }
    return false
  }).mouseleave(function(){
    $('.models-view li a').css('color','#666')
  })


// aside

  $('aside > a').click(function(){
    console.log("1");
    $('aside > a').toggleClass('on');
    $('aside > ul').toggleClass('on');
  })

// main
  var band = $('.main-view li').size() - 1;
  var cont = 0;
  var idx =0;
//기본 첫이미지 클래스on
  $('.main-view li').eq(0).addClass('on');
  $('.main-btn li').eq(0).addClass('on');



  var inters = setInterval(function(){
    $(next).trigger('click')
  },4000);

  function motion(start, end, i){
    $('.main-view li').eq(i).addClass('on').find('div').css({
      left:start
    }).stop().animate({
      left:end
    }).parent().siblings();

    if(idx == $('.main-view li').length){
      idx = 0
      motion('100%',0,idx)
    }else if( idx < 0){
      idx = $('.main-view li').length-1;
      motion('-100%',0,idx)
    }
  }
  var next = function(){
    motion(0,'-100%',idx);
    idx++
    $('.main-view li').eq(idx).addClass('on')
    motion('100%',0,idx);
  };
  var prev =function(){
    motion(0,'100%',idx);
    idx--
    motion('-100%',0,idx)
  };
// main-btn
  $('.main-btn li a').click(function(){
    var cont = $('.main-btn li.on').index();
    idx = $(this).parent().index()

    if(cont < idx){
      motion(0,'-100%',cont);
      motion('100%',0,idx);
    }else if (cont > idx) {
      motion(0,'100%',cont)
      motion('-100%',0,idx)
    }
    return false
  })
//pause & start
 $('.main-btn > a').click(function(){
   clearInterval(inters)
 })

})
