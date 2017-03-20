$(document).ready(function(){


    $('.btn-next-arr').bind('click',function(){
        $('html,body').animate({scrollTop:'0' + '1072px'},930);
    });
    

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

