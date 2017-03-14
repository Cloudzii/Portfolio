$(function(){

//	var prjDisplay = true;
//	function prjDisplay = document.getElementById("motion");
//	if(con.style.display=="none"{})
//
//
//	('#motion').click(function(){
//	    if($("#motion").css("display") == "none"){
//	        ('#motion').css("display", "block");
//	    } else {
//	        ('#motion').css("display", "none");
//	    }
//	});  

	('#st_project .subfloat_menu a').click(function(){
		if($('#prj_main').css('display') == 'block' ){
			('#motion').css('display','none');
			('#film').css('display','none');
			('#award').css('display','none');
		} else {
			('#prj_main').css('display','none');
			('#motion').css('display','block');
			('#film').css('display','none');
			('#award').css('display','none');
		}
	})


})

//	menu

//	console.log('@@@')
//	var idx = 0;
//	$('.project-menu a').click(function(){
//		idx = $(this).index();
//		console.log(idx)
//		$('.project-view li').siblings().removeClass("on").eq(idx).addClass("on")
//
//	})

//	menu end
