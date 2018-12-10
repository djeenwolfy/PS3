$(document).ready(function(){
    $('.scroll-down').click(function(){
        if($(window).scrollTop() < 880){
            $('html').animate({scrollTop: 880}, 750);
        }
        else {
            if($(window).scrollTop() < 1620){
                $('html').animate({scrollTop: 1620}, 750);
            }
            else {
                if($(window).scrollTop() < 2545){
                    $('html').animate({scrollTop: 2545}, 750);
                }
                else {
                    if($(window).scrollTop() < 3565){
                        $('html').animate({scrollTop: 3565}, 750);
                    }
                    else{
                        if($(window).scrollTop() < 3921){
                            $('html').animate({scrollTop: 3921}, 750);
                        }
                        else{
                            if($(window).scrollTop() < 4771){
                                $('html').animate({scrollTop: 4771}, 750);
                            }
                        }
                    }
                }
            }
        }
    });
    $('.scroll-up').click(function(){
        if($(window).scrollTop()>4771){
            $('html').animate({scrollTop: 4771}, 750);
        }
        else {
            if($(window).scrollTop()>3921){
                $('html').animate({scrollTop: 3921}, 750);
            }
            else {
                if($(window).scrollTop()>3565){
                    $('html').animate({scrollTop: 3565}, 750);
                }
                else {
                    if($(window).scrollTop()>2545){
                        $('html').animate({scrollTop: 2545}, 750);
                    }
                    else{
                        if($(window).scrollTop()>1620){
                            $('html').animate({scrollTop: 1620}, 750);
                        }
                        else{
                            if($(window).scrollTop()>880){
                                $('html').animate({scrollTop: 880}, 750);
                            }
                            else{
                                if($(window).scrollTop()>0){
                                    $('html').animate({scrollTop: 0}, 750);
                                }
                            }
                        }
                    }
                }
            }
        }
    });
});







		

$('body,html');
    $(function() {
        $(window).scroll(function() {
            if($(this).scrollTop() >940) {
                $(".scroll-up").fadeIn();
            } else {
                $(".scroll-up").fadeOut();
            }
        });
    });

   
    // btn-menu


(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);