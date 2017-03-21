$(document).ready(function(){

    // $(".amazing-in-motion .main-txt .btn-next-arr").click(function(e){
    //
    //       e.preventDefault();
    //       // var top = $('html,body').offset().top;
    //       $('html,body').animate({'scrollTop' : $(this.hash).offset().top + 1072},500);
    //       console.log(this);
    // })

    // $('.btn-next-arr').click(function(){
    //   $('html,body').animate({scrollTop:0},400);
    //   return false;
    // })

    // $(document).ready(function(){
    //     $('.btn-next-arr').click(function(){
    //           $('html,body').animate({'scrollTop' : $(this.hash).offset().top},500);
    //           return false;
    //     });
    // };

    $('.btn-next-arr').on('click',function(){
        $('html,body').animate({scrollTop:'0' + '1072px'},930);
    });
    // animate가 아닌 ease jquery 로 해야함
    //스크롤버튼으로 이동한 후에 다른페이지 클릭해도
   	//새로고침으로 그 페이지의 처음부분이 나오는 것이 아니라
  	//그 머물렀던 자리에서 시작됨


    // $('.amazing-project li a').click(function(){
    //   var prjid = $(this).attr('id');
    //     console.log(prjid);
    //     $('prjid').css('display','block');
    //     // $('prjid').css('display','block');
    // })
    //
    //   var prjid = $(this).each()

    $('.project-menu li').click(function(){
    	var idx = $(this).index();
      console.log(idx);
      $(this).find('a').addClass('on').parent().siblings().find('a').removeClass('on')
    	$('.project-view>ul>li').eq(idx).show().siblings().hide();
    });

    $('.amazing-project li a').click(function(){
    	var idx = $(this).parent().index();
      console.log(idx);
    	$('.project-view>ul>li').eq(idx+1).show().siblings().hide();
    });


});

////////////////////////////////////////////////////////////////////////////////
    function popopen(xx) {

         $('.popopen').css({
           "display":"block"
         }).append('<iframe width="1677" height="921" src="https://www.youtube.com/embed/'+xx+'?rel=0" frameborder="0" allowfullscreen></iframe>')
        //journey의 iframe 주소
        //?rel=0&autoplay=1&loop=1
    };

		function close_btn() {

			$('.popopen').css({
					"display":"none"
				}).children('iframe').remove();

		};




		function popopen_hover() {

			$('.popopen_hover').css({
					"display":"block"
			}).append('<iframe width="1920" height="948" src="https://www.youtube.com/embed/q_BYvUlDviM?rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe>')

    };

		// function close_btn() {
    //
		// 	$('popopen_hover').css({
		// 		"display":"none"
		// 	}).children('iframe').remove();
    //
		// };




// });
