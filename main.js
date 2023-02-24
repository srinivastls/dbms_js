//Strict Mode 
//first intro description height
jQuery(document).ready(function(){
	var vt_windoww_width = jQuery(window).width();
	if(vt_windoww_width > 991){
	var vtautoheight = jQuery(".vt_description").height();
		jQuery(".profile-intro .col-md-7").css("height", 1);
		jQuery(".timeline:first-child .content-wrap:first-child").css("height", vtautoheight+20);
		}
	});
	
	jQuery(window).resize(function(){
	var vt_windoww_width = jQuery(window).width();
	if(vt_windoww_width > 991){
	var vtautoheight = jQuery(".vt_description").height();
		jQuery(".profile-intro .col-md-7").css("height", 1);
		jQuery(".timeline:first-child .content-wrap:first-child").css("height", vtautoheight+20);
		}
		else{
		jQuery(".profile-intro .col-md-7").css("height", '');
		jQuery(".timeline:first-child .content-wrap:first-child").css("height", '');
		}
	});

(function(jQuery) {
  "use strict";

//Run on Document Ready
jQuery(document).ready(function(){  

  //Add home class 
  var aaa = document.querySelector('.timeline:first-child').id;
  jQuery(".introclass").attr("id",aaa);

  jQuery(".timeline-bg")[0]

  //Smooth scrool
  jQuery("html").niceScroll({styler:"fb",cursorcolor:"#000"});
  jQuery(".side-menu").niceScroll({styler:"fb",cursorcolor:"#000"});

  //Side menu - Open
  // You can also make this on mouseenter by replacing the click event by mouseenter
  jQuery('.side-menu-open').click(function(){
    jQuery('.side-menu').animate({'left': '0px'}, 600, 'easeOutCubic');
  });

  //Side menu - Close
  jQuery('#side-menu-close').click(function(){
    var sideWidth = jQuery('.side-menu').outerWidth();
    var sideWidthClose = '-' + sideWidth + 'px';
    jQuery('.side-menu').animate({'left': sideWidthClose}, 600, 'easeOutCubic');

  });

  //Side menu - Close
  var vt_windoww_width = jQuery(window).width();
  if(vt_windoww_width < 500){
  jQuery('.menu-item a').click(function(){
    var sideWidth = jQuery('.side-menu').outerWidth();
    var sideWidthClose = '-' + sideWidth + 'px';
    jQuery('.side-menu').animate({'left': sideWidthClose}, 600, 'easeOutCubic');
  });
  }

  //Smooth Scroll on anchor links
  jQuery('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = jQuery(this.hash);
      target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        jQuery('html,body').animate({
          scrollTop: target.offset().top
        }, 700, 'easeInOutExpo');
        return false;
      }
    }
  });



  //Bxslider -see options at http://bxslider.com/
  jQuery('.portfolio-itens').bxSlider({
      slideWidth: 200,
      minSlides: 1,
      maxSlides: 4,
      moveSlides: 3,
      slideMargin: 5,
      auto: false,
      mode: 'horizontal',
      useCSS: false,
      // speed: 900,
      infiniteLoop: false,
      hideControlOnEnd: true,
      // easing: 'easeOutElastic',
      pager: false,
      prevText: '<i class="fa fa-chevron-left"></i>',
      nextText: '<i class="fa fa-chevron-right"></i>'
  });

  
  //Nivo Lightbox
  jQuery('a.nivobox').nivoLightbox({ effect: 'fade' });

  //Portfolio Animations
  jQuery('.portfolio-item').hover(function(){
    jQuery(this).find('.hover-bg-wrapper').fadeIn(200);
    jQuery(this).find('.hover').show();  
    jQuery(this).find('p').addClass('animated').addClass('fadeInUp');
  }, function(){
    jQuery(this).find('.hover-bg-wrapper').fadeOut(200);
    jQuery(this).find('.hover').fadeOut(200);
    jQuery(this).find('p').removeClass('fadeInUp');
  });


  //Modal for Contact Form
  jQuery('.modal-wrap').click(function(){
    jQuery('.modal-wrap').fadeOut(300);
  });      

  //Background Height fix for vertical progress
  jQuery( ".full-height" ).each(function() {
    var jQuerystretch = jQuery(this);
    jQuerystretch.css({ height: jQuerystretch.closest('.line').find('.content-wrap').height() });
  }); 

  //Top button hover
  var aa = jQuery(".btn-hide-text1").width();
	jQuery(".btn-top-resume .btn-hide-text").css("width", "0");
	jQuery(".btn-top-resume").mouseenter(function(){
		jQuery(".btn-top-resume .btn-hide-text").css("width", jQuery(".btn-hide-text-r").width()+5);
	}).mouseleave(function(){
		jQuery(".btn-top-resume .btn-hide-text").css("width", "0");
	});

	jQuery(".btn-top-message .btn-hide-text").css("width", "0");
	jQuery(".btn-top-message").mouseenter(function(){
		jQuery(".btn-top-message .btn-hide-text").css("width", jQuery(".btn-hide-text-c").width()+5);
	}).mouseleave(function(){
		jQuery(".btn-top-message .btn-hide-text").css("width", "0");
	});

	jQuery(".btn-top-blog .btn-hide-text").css("width", "0");
	jQuery(".btn-top-blog").mouseenter(function(){
		jQuery(".btn-top-blog .btn-hide-text").css("width", jQuery(".btn-hide-text-b").width()+5);
	}).mouseleave(function(){
		jQuery(".btn-top-blog .btn-hide-text").css("width", "0");
	});
  
});

//Run on Window Load
jQuery(window).load(function(){
  
  //Page loader
  jQuery('#page-loader').fadeOut(200, function(){});

  //Safari Crossbrowser animation Fix
  if (jQuery('html').hasClass('safari')) {
      jQuery('#content-body').removeClass('animated');
  }


  //Fade In load
 // jQuery('#content-body').addClass('fadeInUp');

  //Background Height fix for vertical progress
  setTimeout(function () {    
      jQuery( ".full-height" ).each(function() {
        var jQuerystretch = jQuery(this);
        jQuerystretch.css({ height: jQuerystretch.closest('.line').find('.content-wrap').outerHeight() });
      });  
    }, 300
  );
  
  //Background Height fix for vertical progress on window resize
  jQuery(window).resize(function(){ 
     jQuery( ".full-height" ).each(function() {
      var jQuerystretch = jQuery(this);
      jQuerystretch.css({ height: jQuerystretch.closest('.line').find('.content-wrap').outerHeight() });
    }); 
  });
});

})(jQuery);
