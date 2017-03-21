// /**
//  * [motion description]
//  * @stsrt  {[string]} start [시작지점]
//  * @end    {[string]} end   [도착지점]
//  * @i      {[number]} i     [대상의 인덱스]
//  * @return {[type]}       [움직여라 이미지야....]
//  */
//
//
//     function motion(start, end, i){
//         $('.con_cont_2 li').eq(i).addClass('on').css({
//             left:start,
//             'display':'block'
//         }).stop().animate({
//             left:end
//         }).siblings().removeClass();
//
//         if(idx == $('.con_cont_2 li').length){
//             idx = 0
//             motion('100%',0,idx);
//         }else if( idx < 0){
//             idx = $('.con_cont_2 li').length-1;
//             motion('-100%',0,idx);
//         }
//     }
//
//     $('.con_cont_2 li').eq(0).css('display','block')
//
//     $('.slide_arrow a.next').click(function(){
//         idx = $('.con_cont_2 li.on').index();
//         motion(0,'-100%',idx)
//         idx ++
//         motion('100%',0,idx)
//     })
//
//     $('.slide_arrow a.prev').click(function(){
//         idx = $('.con_cont_2 li.on').index();
//         motion(0,'100%',idx)
//         idx --
//         motion('-100%',0,idx)
//     })
//
//     $('.slide_bttom_btn li a').click(function(e){
//         e.preventDefault();
//         var hisnum = $('.on').index();
//         idx = $(this).parent().index();
//         $(this).parent().addClass('on').siblings().removeClass('on')
//
//         if(idx > hisnum){
//             motion('0', '-100%', hisnum);
//             motion('100%', '0', idx);
//             motion1('0','100%', hisnum);
//             motion1('-100%','0', idx);
//         }else if(idx < hisnum){
//             motion('0', '100%', hisnum);
//             motion('-100%', '0', idx);
//             motion1('0','-100%', hisnum);
//             motion1('100%','0', idx);
//         }else{
//             return
//         }
//
//     });
// });
