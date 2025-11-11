'use strict';



$(window).scroll(function(){
  $('.fadeUpTriger').each(function(){
    let elemPos = $(this).offset().top-50;
    let scroll =$(window).scrollTop();
    let windowHeight = $(window).height();
    
    if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeUp');
    }else{
      $(this).removeClass('fadeUp');
    }
  })
});