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


    $('.btn-next-arr').bind('click',function(){
        $('html,body').animate({scrollTop:'0' + '1072px'},930);
    });

    $('.amazing-project li a').click(function(){
      var prjid = $(this).attr('id');
        console.log(prjid);
        $('prjid').css('display','block');
        // $('prjid').css('display','block');
    })

      var prjid = $(this).each()



});

//
// $(document).ready(function(){
//     $('.btn-next-arr').click(function(){
//           $('html,body').animate({'scrollTop' : $(this.hash).offset().top},500);
//           return false;
//     });
// };
