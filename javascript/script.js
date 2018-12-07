// $(document).ready(function(){
// 	var a = 0; 
// 	$(window).scroll(function (){
// 		var x = $(window).scrollTop();
// 		//console.log(x);
// 			if($(this).scrollTop() >940 && $(this).scrollTop() <1800) {
// 				a = 1;

// 				$(".up").click(function() {
// 				$('body,html').animate({scrollTop:0},800);
// 			})
// 				console.log(a);

// 			} else if ($(this).scrollTop() >1800) {
// 				a = 2;

// 					$(".up").click(function() {
// 				$('body,html').animate({scrollTop:940},800);
// 			})
// 				console.log(a);
// 			} else {
// 				a=3;
// 					$(".up").click(function() {
// 			$('body,html').animate({scrollTop:1800},800);
// 			})
// 				console.log(a);
// 			}
// 	});
// 	$(function() {
// 		$(window).scroll(function() {
// 			if($(this).scrollTop() >940) {
// 				$(".up").fadeIn();
// 			} else {
// 				$(".up").fadeOut();
// 			}
// 		});

		
// 			if($(this).scrollTop() >940 && $(this).scrollTop() <1800) {
// 				a = 1;
// 				console.log(a);

// 			} else if ($(this).scrollTop() >1800) {
// 				a = 2;
// 				console.log(a);
// 			} else {
// 				a=3;
// 				console.log(a);
// 			}
		
// 	});
// });
// /*
// 	$(".up").click(function() {
// 		switch (a) {
//   		case 1: {
//   			$('body,html').animate({scrollTop:0},800);
//   			break;
//   		};
    	
//     	case 2: {
//     		$('body,html').animate({scrollTop:940},800);
//     		break;
//     	};
    	
//     	case 3: {
//     		$('body,html').animate({scrollTop:1800},800);
//     			break;
//     	};

//     	default : {
//     		console.log("def");
//     	} 
    	
// 	};
// });
// */
// // $('body,html').animate({scrollTop:950},800);


//scroll-btn
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 100) {
    //         if ($('.up').is(':hidden')) {
    //             $('.up').css({opacity : 1}).fadeIn('slow');
    //         }
    //     } else { $('.up').stop(true, false).fadeOut('fast'); }
    // });
    // $('.up').click(function() {
    //     $('html, body').stop().animate({scrollTop : 0}, 300);
    // });
    //btn-menu
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